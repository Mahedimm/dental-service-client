import { Box, Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import treatment from '../../../images/treatment.png';


const BlogBanner = () => {
    return (
        <Container  sx={{ flexGrow: 1 ,my:8}}>
            <Grid container spacing={12}>
                <Grid item xs={12} md={6}>
                    <img 
                    src= {treatment} 
                    style ={{width:"80%", }}  
                    alt='treatment' />
                </Grid>
                <Grid item xs={12} md={6} sx={{ 
                display:'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign:'left',
                
            }}>
               <Box sx={{ml:5 } }>
                    <Typography variant="h6" sx={{mb:5,
                        fontSize: {
                        lg: 40,
                        md: 35,
                        sm: 30,
                        xs: 28
                        }

                    
                    }} style={{color:'#203047' }}>
                    Exceptional Dental Care,
                     on Your Terms
                    </Typography>
                    <Typography variant="h2" sx={{mb:5,
                      fontSize: {
                        lg: 25,
                        md: 22,
                        sm: 20,
                        xs: 18
                        }
                    }} style={{color:'#B2B2B2' , fontWeight:300}}>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its 
                    layout. The point of using Lorem Ipsumis that it has
                    a more-or-less normal distribution of letters,as opposed
                    to using ‘Content here, content here’, making it look like
                    readable English. Many desktop publishing packages 
                    and web page 

                    </Typography>
                    <Button style={{backgroundColor:'#19D3AE', color:'white' }} sx={{px:3,py:1}} >LeaRn More</Button>
               </Box>
            </Grid>
            
            </Grid>
      </Container>
    );
};

export default BlogBanner;