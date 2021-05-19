import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AccountCircle, Menu } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import app from "./mongodb";

export default function Appbar({ title }) {
  const history = useHistory();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div style={{ width: 200 }}>
          <List>
            <ListItem
              button
              onClick={() => {
                app.currentUser?.logOut();
                history.push("/login");
              }}
            >
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary={app.currentUser.profile.name} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>Assignments</ListItem>
            <ListItem button>Classes</ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}
