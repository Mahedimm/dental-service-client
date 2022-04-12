import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';

const services = [
    {
        name: "Fluoride Treatment",
        description:' Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the !',
        img: fluoride
    },
    {
        name: "Cavity Filling",
        description:' Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the !',
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description:' Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the !',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
           <Container>
           <Typography sx={{ fontWeight: 500 ,color: '#5FC7C7', m: 2}} variant="h6" component="div">
              OUR SERVICES
            </Typography>
           <Typography sx={{ fontWeight: 400  ,m: 5,color:'#203047',}} variant="h3" component="div">
              Services We Provide
            </Typography>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
                {
                    services.map(service=> <Service service={service} key={service.name}></Service>)
                
                }
            </Grid>
           </Container>
        </Box>
    );
};

export default Services;