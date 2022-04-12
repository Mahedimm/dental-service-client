import { Box, Container, Hidden, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
import Calender from '../../Shared/Calender/Calender';


    const Banner = {
        background:`url(${bg})`, 
        
    }
const AppointmentHeader = ({date,setDate}) => {
    
    return (
        
        <Box style={Banner } sx={{mb:30,boxShadow: 1, zIndex: -10}} >
            
            <Container   sx={{ flexGrow: 1,  }} >
                <Grid container spacing={8} style={{height:900}} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} md={6} style={{textAlign:'left'}}>
                        <Typography variant="h6" component="div" style={{color:'#203047',}} sx={{mb:10,
                        fontSize: {
                                lg: 50,
                                md: 45,
                                sm: 40,
                                xs: 35
                                }
                                ,
                                                    
                        }}>
                        Appointment
                        </Typography>
                        <Box style={{
                            width:400,height:400, 
                            backgroundColor:'white' }} sx={{mb:-40, py:5, boxShadow: 2}}>

                            <Calender date={date} setDate={setDate}/>
                        </Box>
                         
                     
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Hidden mdDown>
                        <img src= {chair} style ={{width:"100%"}} alt="" />
                    </Hidden>
                    </Grid>
                
                </Grid>
            
        </Container>
       

        </Box>
    );
};

export default AppointmentHeader;