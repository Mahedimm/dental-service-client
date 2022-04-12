import { Alert, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
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
  const Input = styled('input')({
    display: 'none',
  });
const AddDoctor = () => {
    const [success,setSuccess] = React.useState(false);
    const [image,setImage] = React.useState(null);

    const [values, setValues] = React.useState({
        doctorName: '',
        doctorEmail:'',

        
       
      });
     
      
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value});
        console.log(values);
      };

      const  handleSubmit = (event) => {
        //   console.log(values);
        //   console.log(image);
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('doctorName',values.doctorName);
        formData.append('doctorEmail',values.doctorEmail);
        formData.append('image',image);

        fetch('http://localhost:8000/addDoctor',{
            method:'POST',
            body:formData
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.insertedId){
                setSuccess(true);
                setValues({
                    doctorName: '',
                    doctorEmail:'',
                });
                setImage(null);
            }
         
        })
        .catch(err => console.log(err));

    

        event.preventDefault();
      }

    return (
        <div>
        
        <Box sx={style}>
               <Typography id="transition-modal-title" variant="h4" component="h2" sx={{my:3, textAlign:'center',color:'#1CC7C1'}}>
               Add New Doctors
               </Typography>
               {
           success && <Alert sx={{mb:5,backgroundColor:'#1CC7C1'}} variant="filled" severity="success">
           New Doctor Add Successfully !
         </Alert>
        }
               
               <form onSubmit={handleSubmit}
           style={{
               marginLeft:'auto',
               marginRight:'auto',
               width:'80%'
           }}>

                   
                   <TextField
                   sx={{width:'100%',my:1}}
                   label="Doctor NAME" 
                   required
                   name="doctorName"
                   onChange ={handleChange('doctorName')}
                   // defaultValue={user.displayName}
                
                   />
                   
                 
                   <TextField
                   sx={{width:'100%',my:1}}
                   // id="outlined-size-small"
                   name="doctorEmail"
                   required
                   onChange ={handleChange('doctorEmail')}
                   label=" Doctor Email" 
                   // defaultValue={user.email}
                   
                   />
                   <label htmlFor="contained-button-file" >
                   <Input accept="image/*" id="contained-button-file"  type="file" onChange={e=>setImage(e.target.files[0])}/>
                    <Button variant="contained" component="span" >
                        Upload Doctor Image
                    </Button>
                    </label>
                    <br/>
                    
                
                     <Button style={{
                         backgroundColor:'#19D3AE',
                          color:'white' }} 
                          sx={{mt:5,px:3,py:1}
                          } type='submit'> 
                          Add Doctors
                     </Button>
                      
                 
               </form>
           </Box>
   </div>
    );
};

export default AddDoctor;