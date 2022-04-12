import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const DoctorCard = () => {
    return (
        <Grid item xs={2} sm={4} md={4} >
            <Paper elevation={3} sx={{py:5}}>
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" style={{width:200}} />
                <Typography variant="h5" >
                    Dr. Mahedi Hasan
                </Typography>
                <Typography variant="h6" >
                    Email : Dr. Mahedi Hasan
                </Typography>
            </Paper>
        </Grid>
    );
};

export default DoctorCard;