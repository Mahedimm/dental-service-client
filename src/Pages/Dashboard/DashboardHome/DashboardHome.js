import { Grid, Paper } from '@mui/material';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Appointments from '../../MyAppointments/Appointments/Appointments';
import Calender from '../../Shared/Calender/Calender';

const DashboardHome = () => {
    const [date,setDate] = React.useState(new Date());
    const [appointments, setAppointments] = React.useState([]);
    useEffect(() => {
        const url =`http://localhost:8000/allAppointments?date=${date.toLocaleDateString()}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setAppointments(data);
        })
    },[date]);
    return (
        <Box style={{backgroundColor:'#F4FDFB',  }} sx={{mt:2}} >
        
        <Container >
            <Grid container spacing={  2 } justifyContent="space-between">
  
                <Grid item xs={12} sm={4} md={4} sx={{my:10,}}>
                    <Paper elevation={3} style={{
                    height:600, 
                    }} >
                                 <Calender date={date} setDate={setDate} />
                    </Paper>
                
                </Grid>
                <Grid item xs={12} sm={8} md={8} sx={{my:10}}>
                    <Paper elevation={3} style={{
                    height:600, 
                    backgroundColor:'white' }} >
                             
                         <Appointments date={date} appointments={appointments}/>       
                    </Paper>
                
                </Grid>

            </Grid>
        </Container>
        </Box>
    );
};

export default DashboardHome;