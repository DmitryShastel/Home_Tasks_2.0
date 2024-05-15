import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from "@mui/material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatIcon from "@mui/icons-material/Chat";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import PeopleIcon from "@mui/icons-material/People";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";


export const TemporaryDrawer = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {[
                    {text: 'Profile', icon: <AccountCircleIcon/>},
                    {text: 'Message', icon: <ChatIcon/>},
                    {text: 'News', icon: <AnnouncementIcon/>},
                    {text: 'Users', icon: <PeopleIcon/>},
                    {text: 'Music', icon: <MusicNoteIcon/>},
                    {text: 'Settings', icon: <SettingsIcon/>},
                ].map((item, index) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>Menu</Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}


export const HeaderPage = () => {
    return (
        <Box sx={{flexGrow: 1, boxShadow: 'none'}}>
            <AppBar position="static" color="default" sx={{boxShadow: 'none'}}>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="info"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <TemporaryDrawer/>
                    </IconButton>
                    <Typography variant="h6">
                        <Button color="info" variant="outlined" sx={{mr: 1}}>Login</Button>
                        <Button color="info" variant="outlined">Log out</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
