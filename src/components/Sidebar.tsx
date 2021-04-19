import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { Route as IRoute } from 'src/router/routes';
import { requestlogout } from '@redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

interface SidebarProps {
  routes: IRoute[];
  prefixPath: string;
  width?: number;
}

const useStyles = makeStyles<Theme, SidebarProps>((theme: Theme) => ({
  containerMenu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  toolbar: {
    width: ({ width }) => width ?? 300,
    padding: '0 8px',
  },
  nav: {
    textDecoration: 'none',
    color: 'inherit',
  },
  activeNav: {
    color: theme.palette.secondary.main,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { routes, prefixPath } = props;

  const initIsOpen = (): { [key: string]: boolean } => {
    const init = {};
    routes
      .filter((route) => route.collapsible)
      .forEach((route) => Object.assign(init, { [route.name]: true }));
    return init;
  };

  const [isOpen, setIsOpen] = React.useState(initIsOpen());

  const classes = useStyles(props);

  const dispatch = useDispatch();

  const handleClick = (name: string) => {
    setIsOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleNavLinkClick = (event: React.SyntheticEvent, disabled: boolean = false) => {
    if (disabled) event.preventDefault();
  };

  return (
    <Drawer variant="permanent" open>
      <div className={classes.toolbar} />
      <div className={classes.containerMenu}>
        <List>
          {routes.map(({ name, path, collapsible, subRoutes }, key) => (
            <>
              <NavLink
                to={prefixPath + path}
                className={classes.nav}
                activeClassName={classes.activeNav}
                key={key}
                onClick={(event) => handleNavLinkClick(event, collapsible)}
              >
                <ListItem button key={name} onClick={() => handleClick(name)}>
                  <ListItemText primary={name} />
                  {collapsible && <>{isOpen[name] ? <ExpandLess /> : <ExpandMore />}</>}
                </ListItem>
              </NavLink>
              {subRoutes && (
                <Collapse in={isOpen[name]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subRoutes.map((subRoute, index) => (
                      <NavLink
                        to={prefixPath + subRoute.path}
                        activeClassName={classes.activeNav}
                        className={classes.nav}
                        key={index}
                      >
                        <ListItem
                          key={subRoute.name}
                          className={classes.nested}
                          button
                          onClick={() => handleClick(subRoute.name)}
                        >
                          <ListItemText primary={subRoute.name} />
                        </ListItem>
                      </NavLink>
                    ))}
                  </List>
                </Collapse>
              )}
            </>
          ))}
        </List>
        <ListItem button onClick={() => dispatch(requestlogout())}>
          <ListItemText primary="Keluar" />
        </ListItem>
      </div>
    </Drawer>
  );
};

export default Sidebar;
