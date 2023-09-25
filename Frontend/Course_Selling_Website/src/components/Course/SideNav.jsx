import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Sheet from '@mui/joy/Sheet';
import PieChart from '@mui/icons-material/PieChart';
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

function Sidenav(){
    return (
    <div>
        <Box sx={{ display: 'flex', position: 'fixed', bottom: 0, width: 1.0 }}>
      <Sheet
        variant="solid"
        color="info"
        invertedColors
        sx={(theme) => ({
          p: 2,
          ml: -3,
          my: -2,
          height:700,
          background: `linear-gradient(to top, ${theme.vars.palette.info[700]}, ${theme.vars.palette.info[600]} 25%, ${theme.vars.palette.info[500]} 75%)`,
        })}
      >
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '15px',
            flexGrow: 0,
            minWidth: 256
          }}
        >
          <ListItemButton><ListItemDecorator><PersonIcon /></ListItemDecorator>User
          </ListItemButton>
          <ListItemButton><ListItemDecorator><PieChart /></ListItemDecorator>Dashboard</ListItemButton>
          <ListItemButton><ListItemDecorator />Overview</ListItemButton>
          <ListItemButton ><ListItemDecorator></ListItemDecorator>Add Courses</ListItemButton>
          <ListItemButton ><ListItemDecorator></ListItemDecorator>Update Course</ListItemButton>
          <ListItemButton onClick={async()=>{window.location = "/"}}><ListItemDecorator></ListItemDecorator>Logout</ListItemButton>
          <ListItem nested>
            <ListSubheader>History</ListSubheader>
            <List>
              <ListItemButton>Recent Tasks</ListItemButton>
              <ListItemButton><IconButton
                variant="outlined"
                aria-label="Add another chat"
                sx={{ mt: 'auto' }}
                >
                <SettingsIcon />
                </IconButton>Settings</ListItemButton>
            </List>
          </ListItem>
        </List>
      </Sheet>
    </Box>
    </div>)
}

export default Sidenav;