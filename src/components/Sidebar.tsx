import * as React from "react";
import { Drawer, List, ListItem, ListItemText, makeStyles, Theme } from "@material-ui/core";
import { Route as IRoute } from "@navigation/routes";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  routes: IRoute[];
  prefixPath: string;
  width?: number;
}

const useStyles = makeStyles<Theme, SidebarProps>((theme: Theme) => ({
  root: {},
  toolbar: {
    width: ({ width }) => width ?? 300,
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
}));

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { routes, prefixPath } = props;
  const classes = useStyles(props);

  return (
    <Drawer variant="permanent" open>
      <div className={classes.toolbar} />
      <List>
        {routes.map(({ name, path }, key) => (
          <NavLink to={prefixPath + path} activeClassName="active" key={key}>
            <ListItem button key={name}>
              <ListItemText primary={name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
