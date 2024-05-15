import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    mainContent: {
        width: '100%',
        height: '300px',
        //border: '1px solid',
        borderColor: 'red',
        borderRadius: 2,
    },

});

export const MenuPage = () => {
    return (
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <MainContent/>
            </Grid>
        </Grid>
    )
}


const MainContent = () => {
    const classes = useStyles()
    return (
        <Box className={classes.mainContent}>
            {/* Ваше содержимое */}
        </Box>
    )
}