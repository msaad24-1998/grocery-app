import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import item from './items';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';


export default function TemporaryDrawer({isOpen,handleOpen}) {


const naviagate = useNavigate()

 const toNavigate=(path)=>naviagate(path)

  const list = () => (
    <Box
      sx={{ width:'auto' }}
      role="presentation"
    >
      <List>
        {item.map((i, index) => (
          <ListItem key={index} disablePadding onClick={()=>toNavigate(i.path)}>
            <ListItemButton>
              <ListItemIcon>
                {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon/>
                </ListItemIcon>
                <ListItemText>Log-Out</ListItemText>
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
          <Drawer
            anchor={'bottom'}
            open={isOpen}
            onClose={()=>handleOpen(false)}
          >
            {list()}
          </Drawer>
    </div>
  );
}
