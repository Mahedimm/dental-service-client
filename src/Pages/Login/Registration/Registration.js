import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, AlertTitle, Container, Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginBanner from '../../../images/login.png';
const Registration = () => {
    const {user,registerUser,isLoading,authError,setIsLoading,setAuthError,setUser,profile,saveUserInfo} = useAuth();
    const [flag,setFlag] = React.useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_url = location.state?.from || '/home';
    
    const [values, setValues] = React.useState({
        password: '',
        password2: '',
        name:'',
        email:'',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values);
      };

      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


      const handleSignUp =(e)=>{
            values.password !== values.password2?setFlag(false):setFlag(true);
            registerUser(values.email,values.password)
            .then((userCredential) => {
                
                // Signed in 
                const newUser = {email:values.email,displayName:values.name,uid:userCredential.user.uid};
                setUser(newUser);
                
                //save user info in database
                saveUserInfo(values.email,values.name,'POST');
                
                setAuthError('');
                profile(values.name).then(() => {
                    // Profile updated!
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                  
                navigate(redirect_url);
                // console.log(user);
                // const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                // const errorCode = error.code;
                 setAuthError(error.message);
                // ..
              })
              .finally(()=>setIsLoading(false));
            
            setValues({
                password: '',
                password2: '',
                name:'',
                email:'',
                showPassword: false,
            })
            e.preventDefault();
      }
    return (
        <Container sx={{borderLeft: 3,borderColor:'#19D3AE'}}>
            <Grid container spacing={2} sx={{mt:4,}} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} >
                        <Typography sx={{color:'#686868',fontSize:26,p:5}} >
                            Sign Up
                        </Typography>
                        {
                        user?.email&& <Alert severity="success" >
                            <AlertTitle >Success</AlertTitle>
                            Your Account Create — <strong><Link to='/signIn'style={{textDecoration:'blink', color:'#19D3AE'}}>Sign In</Link></strong>
                            </Alert>
                            }
                            {
                                authError && <Alert severity="error">
                                <AlertTitle>Sorry</AlertTitle>
                                {authError}<strong>TRY AGAIN!</strong>
                              </Alert>
                            }
                        { !isLoading &&  <form onSubmit={handleSignUp}>
                            <FormControl sx={{m:1 ,width: '80%' }}>
                                <TextField id="input-with-sx" label="Your Name" 
                                type='name' 
                                name='name'
                                value ={values.name}
                                onChange ={handleChange('name')}
                                variant="standard" />
                            </FormControl>
                            <FormControl sx={{m:1 ,width: '80%' }}>
                                <TextField id="input-with-sx" label="Your Email" 
                                type='email' 
                                name='email'
                                value ={values.email}
                                onChange ={handleChange('email')}
                                variant="standard" />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '80%' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1, width: '80%' }} variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password2'}
                                    value={values.password2}
                                    onChange={handleChange('password2')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                            {
                                flag!==true?<Typography sx={{textAlign:'left' ,ml:7, color:'red',}}>Don't match your password ,try again</Typography>:''
                            }
                            
                            
                            <br/>
                            <Button  type='submit' style={{
                            backgroundColor:'#19D3AE',
                            color: 'white',
                            width:'80%',
                            
                                }}
                                sx={{
                                    mt:2,
                                    py:2
                                }}>
                            Sign Up
                        </Button>
                        </form>}

                        {
                        isLoading && <CircularProgress sx={{ color:'red',}}/>
                        }
                        
                        <Button  style={{
                            backgroundColor:'red',
                            color: 'white',
                            width:'80%',
                            
                                }}
                                sx={{
                                    mt:2,
                                    py:2
                                    
                                    
                                }}>
                            <GoogleIcon sx={{mr:2}}/>
                            Sign In Using Google
                        </Button>
                        <Typography sx={{pb:5}} >
                             Already have an account? <Link to='/signIn'style={{textDecoration:'blink', color:'#19D3AE'}}>Sign In</Link>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginBanner}  alt="" srcset="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Registration;