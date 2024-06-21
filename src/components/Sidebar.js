import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => (
  <Drawer variant="permanent">
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/calendar">
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={Link} to="/kanban">
        <ListItemText primary="Kanban" />
      </ListItem>
      <ListItem button component={Link} to="/charts">
        <ListItemText primary="Charts" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
