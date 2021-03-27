import * as React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Drawer, List, ListItem, ListItemText, makeStyles, Theme,
} from '@material-ui/core';
import { Route as IRoute } from 'src/router/routes';
import { requestlogout } from '@redux/actions/authActions';
import { useDispatch } from 'react-redux';

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
    ...theme.mixins.toolbar,
  },
  nav: {
    textDecoration: 'none',
    color: 'inherit',
  },
  activeNav: {
    color: theme.palette.secondary.main,
  },
}));

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { routes, prefixPath } = props;

  const classes = useStyles(props);
  const dispatch = useDispatch();

  return (
    <Drawer variant="permanent" open>
      <div className={classes.toolbar} />
      <div className={classes.containerMenu}>
        <List>
          {routes.map(({ name, path }, key) => (
            <NavLink
              to={prefixPath + path}
              className={classes.nav}
              activeClassName={classes.activeNav}
              key={key}
            >
              <ListItem button key={name}>
                <ListItemText primary={name} />
              </ListItem>
            </NavLink>
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
