import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import DoctorCard from '../DoctorCard/DoctorCard';

const Doctors = () => {
    const  [doctors,setDoctors] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data.slice(0,3)))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography  sx={{ fontWeight: 500 ,color: '#5FC7C7', m: 2}} variant="h6" component="div">
           OUR Doctors
         </Typography>
        <Typography sx={{ fontWeight: 400  ,m: 5,color:'#203047',}} variant="h3" component="div">
           Doctors
         </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{mb:10}}>
       
             {
                 doctors.map(doctor=> <DoctorCard doctor={doctor} key={doctor._id}></DoctorCard>)
             
             }
         </Grid>
        </Container>
     </Box>
    );
};

export default Doctors;