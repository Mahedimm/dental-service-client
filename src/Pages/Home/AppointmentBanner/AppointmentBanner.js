import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg_appointment from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';

const appointmentBanner = {
    background:`url(${bg_appointment})`,
    backgroundColor: '#3A4256',
    backgroundBlendMode: 'darken,luminosity',
    marginTop:180,
   
}
const AppointmentBanner = () => {
    return (
        <Box style= {appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img 
                src= {doctor} 
                style ={{width:"80%", marginTop:'-200px'}}  
                alt='doctor' />
            </Grid>
            <Grid item xs={12} md={6} sx={{ 
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign:'left',
            
         }}>
               <Box sx={{ml:5 } }>
               <Typography variant="h6" sx={{mb:2,
                 fontSize: {
                        lg: 35,
                        md: 32,
                        sm: 28,
                        xs: 25
                        }
               
               }} style={{color:'#19D3AE' ,fontWeight:400}}>
                APPOINTMENT
               </Typography>
               <Typography variant="h4" sx={{mb:3,
               
               fontSize: {
                        lg: 40,
                        md: 38,
                        sm: 35,
                        xs: 32
                        }
               }} style={{color:'white' }}>
                   Make An Appointment Today
               </Typography>
               <Typography variant="h2" sx={{mb:5,
                       fontSize: {
                        lg: 32,
                        md: 32,
                        sm: 30,
                        xs: 28
                        }
               
               }} style={{color:'white' , width:'80%', fontWeight:300}}>
               It is a long established fact that a reader will be distractedby the readable content of a page when looking at its 

               </Typography>
               <Button style={{backgroundColor:'#19D3AE', color:'white' }} sx={{px:3,py:1,mb:5}} >LeaRn More</Button>
               </Box>
            </Grid>
            
            </Grid>
      </Box>
    );
};

export default AppointmentBanner;