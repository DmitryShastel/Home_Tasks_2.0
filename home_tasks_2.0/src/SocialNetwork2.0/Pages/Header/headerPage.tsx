import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const HeaderPage = () => {
    return (
        <Box sx={{flexGrow: 1, boxShadow: 'none'}}>
            <AppBar position="static" color="default" sx={{boxShadow: 'none'}}>
                <Toolbar  sx={{ justifyContent: 'space-between' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="info"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" >
                        <Button  color="info" variant="outlined" sx={{ mr: 1 }}>Login</Button>
                        <Button  color="info" variant="outlined">Log out</Button>
                    </Typography>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
