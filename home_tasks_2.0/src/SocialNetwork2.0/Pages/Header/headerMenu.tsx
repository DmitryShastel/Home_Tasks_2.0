import * as React from "react";
import {Link as RouterLink, useLocation} from "react-router-dom";
import Box from "@mui/material/Box";
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
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";


export const TemporaryDrawer = () => {

    const [open, setOpen] = React.useState(false);
    const location = useLocation();

    const profileRoute = '/profile';
    const messageRoute = '/message';
    const newsRoute = '/news';
    const usersRoute = '/users';
    const musicRoute = '/music';
    const settingsRoute = '/settings';

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {[
                    {text: 'Profile', icon: <AccountCircleIcon/>, route: profileRoute},
                    {text: 'Message', icon: <ChatIcon/>, route: messageRoute},
                    {text: 'News', icon: <AnnouncementIcon/>, route: newsRoute},
                    {text: 'Users', icon: <PeopleIcon/>, route: usersRoute},
                    {text: 'Music', icon: <MusicNoteIcon/>, route: musicRoute},
                    {text: 'Settings', icon: <SettingsIcon/>, route: settingsRoute},
                ].map((item, index) => (

                    <ListItem
                        key={item.text}
                        disablePadding
                        component={RouterLink}
                        to={item.route || ''}
                        sx={{
                            color: location.pathname === item.route ? 'green' : 'grey',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                        className={location.pathname === item.route ? 'active' : ''}
                    >
                        <ListItemButton disableRipple>
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