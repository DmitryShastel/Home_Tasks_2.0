import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {TemporaryDrawer} from "./headerMenu";
import {LoginMenu} from "./loginMenu";


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
                        <LoginMenu/>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
