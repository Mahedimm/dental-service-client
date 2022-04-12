import { Alert, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import TimeSlotCard from '../TimeSlotCard/TimeSlotCard';
const  timeSlots = [
  
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10:05 am – 11:30 am',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '  5:00 pm – 6:30 pm',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: ' 7:00 am – 8:30 am',
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Orthodontics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
] 
const AvailableAppointments = ({date}) => {
    const [booked, setBooked] = React.useState(false);
    return (
        <Container >
            <Typography sx={{color:'#1CC7C1',fontSize:45, mb:5}}>
            Available Appointments on {date.toDateString()}
            </Typography>
            {
                booked && <Alert sx={{mb:5,backgroundColor:'#1CC7C1'}} variant="filled" severity="success">
                Your Appointment Booked SuccessFully — check it out!
              </Alert>
             }
            <Box sx={{ flexGrow: 1 ,mb:5}} >
            <Grid container spacing={8}>
                {
                    timeSlots.map(timeSlot=><TimeSlotCard 
                        timeSlot={timeSlot}
                         date={date} 
                         setBooked={setBooked}
                         key={timeSlot.id} />)
                }
            </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppointments;
