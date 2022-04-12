import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';




const Service = ({service}) => {
    const {name,img ,description} = service;
    return (
        <Grid item xs={12} sm={4} md={4} >
            <Card sx={{ minWidth: 275 , border: 0,boxShadow: 0 }}>
                <CardMedia
                        component="img"
                        style={{width:"auto", height:'80px', margin:"0 auto"}}
                        image={img}
                        alt="Paella dish"
                />
                <CardContent>
               
                <Typography variant="h5" component="div" sx={{m:5, color:'#565E69'}}>
               {name}
                </Typography>
               
                <Typography variant="body2" sx={{color:"#B4B4B4"}}>
               {description}
                <br />
                {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            
            </Card>
        </Grid>
    );
};

export default Service;