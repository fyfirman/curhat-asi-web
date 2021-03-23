import * as React from "react";
import { Drawer, List, ListItem, ListItemText, makeStyles, Theme } from "@material-ui/core";
import { Route as IRoute } from "@navigation/routes";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  routes: IRoute[];
  prefixPath: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
}));

const Sidebar: React.FC<SidebarProps> = ({ routes, prefixPath }: SidebarProps) => {
  const classes = useStyles();
  return (
    <Drawer className={classes.root} variant="permanent" open>
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
