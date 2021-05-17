import { AppBar, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useState } from "react";

export default function Appbar({ title }) {
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
        <List>
          <ListItem button>Assignments</ListItem>
          <ListItem button>Classes</ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
