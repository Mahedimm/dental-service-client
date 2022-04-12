import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'40%',
  height:'50%',
  bgcolor: 'background.paper',
  
  borderRadius:'15px',
  boxShadow: 24,
  p: 4,
};
const AppointmentModal = ({handleClose,open,timeSlot,date,setBooked}) => {
  const {name,time} = timeSlot;
  const {user} = useAuth();
  const initialInfo = {patientName:user.displayName,patientEmail:user.email,patientPhone:''};

  const [bookingInfo,setBookingInfo] = React.useState(initialInfo);
  
  const handleChange = (prop) => (event) => {
    setBookingInfo({ ...bookingInfo, [prop]: event.target.value });
    console.log(bookingInfo);
  };


  

  const handleSubmit = e =>{
      console.log(bookingInfo);
      //Collect data
      const appointmentData = {
          ...bookingInfo,
          timeSlot :time,
          date:date.toLocaleDateString(),
          ServiceName:name,


      }
      //Send data to server
        fetch('http://localhost:8000/appointments',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(appointmentData)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.insertedId){
                setBooked(true);
                handleClose();
            }
        })
    //   console.log(appointmentData);
     
      e.preventDefault();
  }

    return (
        <div>
           <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
               
                }}
            >
                <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h4" component="h2" sx={{my:3, textAlign:'center',color:'#1CC7C1'}}>
                    {name}
                    </Typography>
                    
                    <form onSubmit={handleSubmit}
                style={{
                    marginLeft:'auto',
                    marginRight:'auto',
                    width:'80%'
                }}>

                    <TextField
                        sx={{width:'100%',my:1}}
                        disabled
                        id="outlined-size-small"
                        defaultValue={time}
                        
                        />
                        
                        <TextField
                        sx={{width:'100%',my:1}}
                        label="YOUR NAME" id="YOUR NAME"
                        name="patientName"
                        onChange ={handleChange('patientName')}
                        defaultValue={user.displayName}
                     
                        />
                        
                        <TextField
                        sx={{width:'100%',my:1}}
                        name="patientPhone"
                        onChange ={handleChange('patientPhone')}
                        label="PHONE NUMBER" id="PHONE NUMBER"
                        // defaultValue='PHONE NUMBER'
                   
                        />
                        <TextField
                        sx={{width:'100%',my:1}}
                        // id="outlined-size-small"
                        name="patientEmail"
                        onChange ={handleChange('patientEmail')}
                        label="EMAIL" id="EMAIL"
                        defaultValue={user.email}
                        
                        />
                        <TextField
                        sx={{width:'100%',my:1}}
                        disabled
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}  
                        />
                          <Button onClick={handleSubmit}style={{
                              backgroundColor:'#19D3AE',
                               color:'white' }} 
                               sx={{px:3,py:1}} > 
                               SEND
                          </Button>
                           
                      
                    </form>
                </Box>
                </Fade>
            </Modal> 
        </div>
    );
};

export default AppointmentModal;