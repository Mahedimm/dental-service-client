import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../images/bg.png';
import chair from '../../../images/chair.png';
const Banner = () => {

    const Banner = {
        background:`url(${bg})`, 
        position: 'relative',
        width:'100%'
    }
    const colorBackground = {
        backgroundColor:'#3A4256',
        width:"30vw",
        height:'100%',
        position: 'absolute',
        right:0,
      
      
        
        
    }
    
    return (
        <Box>
        <Box style={Banner } sx={{mb:10,boxShadow: 1, zIndex: -10}} >
            <Box style={colorBackground}   sx={{ zIndex: -20 }}> </Box>
            <Container   sx={{ flexGrow: 1, 
            
             }} >
                <Grid container spacing={8}  style={{height:900}} justifyContent="center" alignItems="center">
                    <Grid item sm={12} md={6} style={{textAlign:'left'}}  >
                        <Typography variant="h6" component="div" style={{color:'#203047', }} sx={{
                                fontSize: {
                                lg: 45,
                                md: 40,
                                sm: 30,
                                xs: 25
                                }
                            }} >
                        Your New Smile <br/>
                        Starts Here
                        </Typography>
                        <Typography  component="div" style={{color:'#B4B4B4', }} sx={{
                                fontSize: {
                                lg: 30,
                                md: 15,
                                sm: 10,
                                xs: 8
                                }
                                
                            }} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the
                        </Typography>
                        <Link to="/appointment" style={{textDecoration:'none',cursor:'pointer'}} >
                        <Button style={{backgroundColor:'#19D3AE', color:'white',fontWeight:'bold',cursor:'pointer' }} sx={{px:5,py:2}} >
                        GET APPOINTMENT
                        
                        </Button>
                        </Link>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <img src= {chair} width="100%" alt="" />
                    </Grid>
                
                </Grid>
            
        </Container>
        </Box>
            <Box>
        <Grid container justifyContent="center" alignItems="center" spacing={3} >
            <Grid  item sm={6} md={3}  style={{backgroundColor:'#1CC7C1', height:180,
     }} sx={{px:5, py:3,mt:2}} justifyContent="center" alignItems="center">
                <Grid container justifyContent="space-evenly"  alignItems="center" spacing={4} sx={{px:5 , py:2}}>
                    <Grid item>
                        <AccessTimeIcon style={{color:'white'}} sx={{ fontSize: 70 }} />
                    </Grid>
                    <Grid item style={{textAlign:'left'}}>
                        <Typography variant="h6" component="div" style={{color:'white', fontSize:22 }} sx={{mb:2}}>
                        Opening Hours
                        </Typography>
                        <Typography  component="div" style={{color:'white',fontSize:16 }} >
                        Lorem Ipsum is simply <br />
                        dummy text of the pri
                        </Typography>
                    </Grid>
                    
            </Grid>
            </Grid>
            <Grid  item sm={6} md={3} style={{backgroundColor:'#3A4256' , height:180, }} justifyContent="center" alignItems="center" sx={{px:5, py:3,mt:2}}>
                <Grid container justifyContent="space-evenly"  alignItems="center" spacing={4} sx={{px:5 , py:2}}>
                    <Grid item>
                        <LocationOnIcon style={{color:'white'}} sx={{ fontSize: 70 }} />
                    </Grid>
                    <Grid item style={{textAlign:'left'}}>
                        <Typography variant="h6" component="div" style={{color:'white', fontSize:22 }} sx={{mb:2}}>
                        Visit our location
                        </Typography>
                        <Typography  component="div" style={{color:'white',fontSize:16 }} >
                        Brooklyn, NY 10036, United States
                        </Typography>
                    </Grid>
                    
            </Grid>
            </Grid>
            <Grid  item justifyContent="center" alignItems="center"  style={{backgroundColor:'#1CC7C1', height:180,  }} sm={6} md={3}  sx={{px:5, py:3,mt:2}}>
                <Grid container justifyContent="space-around"  alignItems="center" spacing={4} sx={{px:5 , py:2}}>
                    <Grid item>
                    <CallIcon style={{color:'white'}} sx={{ fontSize: 70 }} />
                    </Grid>
                    <Grid item style={{textAlign:'left'}}>
                    <Typography variant="h6" component="div" style={{color:'white', fontSize:22 }} sx={{mb:2}}>
                    Contact us now
                    </Typography>
                    <Typography  component="div" style={{color:'white',fontSize:16 }} >
                    +000 123 456789
                    </Typography>
                    </Grid>
                    
            </Grid>
            </Grid>
      </Grid>
      </Box>

      
      </Box>
    );
};

export default Banner;