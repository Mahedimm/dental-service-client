import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
const TimeSlotCard = ({timeSlot,date,setBooked}) => {
    const {name,id,time,space} = timeSlot;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
       <>
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ minWidth: 275,py:2  }} elevation={3} >
                    <CardContent sx={{textAlign:'center'}} >
                        <Typography sx={{ fontSize: 24,color:'#1CC7C1' , }}  gutterBottom>
                        {name}
                        </Typography>
                        <Typography  component="div" sx={{ fontSize: 16,color:'#3A4256' , }}>
                            {time}
                        </Typography>
                        <Typography  sx={{ fontSize: 12,color:'#8B8888'  }}>
                        {space} SPACES AVAILABLE
                        </Typography>
                       
                    </CardContent>
                    <CardActions sx={{margin:" 0 auto",
                                display: 'block'}}>
                        <Button onClick={handleOpen} style={{
                            backgroundColor:'#19D3AE',
                            color: 'white',
                            
                                }}>
                            BOOK APPOINTMENT
                        </Button>
                       
                       
                    </CardActions>
                    </Card>
               </Grid>
            <AppointmentModal
            setBooked={setBooked}
            date={date}
             timeSlot = {timeSlot}
             handleClose={handleClose} 
             open={open}/>
        </>
    );
};

export default TimeSlotCard;