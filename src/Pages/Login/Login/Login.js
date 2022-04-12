import GoogleIcon from '@mui/icons-material/Google';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, CircularProgress, Container, Grid, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
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
const Login = () => {
    const {user,logIn,isLoading,authError,setAuthError,signInWithGoogle,setUser,setIsLoading,saveUserInfo} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_url = location.state?.from || '/home';
    const [values, setValues] = React.useState({
        password: '',
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
      //Google sign In
      const handleGoogleSignIn = () => {
        signInWithGoogle().then((res) => {
           
            const user = res.user;
            
            //send info database
            saveUserInfo(user.email,user.displayName,'PUT');
            navigate(redirect_url);
        }).catch((err) => {
            setAuthError(err.message);
        }).finally(() => setIsLoading(false));
        };

        //Email and Password Sign In

      const handleLogin =(e)=>{
            console.log(values);
            logIn(values.email,values.password)
            .then((userCredential) => {
                // console.log(userCredential.user);
                // console.log(redirect_url);
                setUser(userCredential.user);
                navigate(redirect_url);
                  // Signed in 
                  setAuthError('');
                 
              })
              .catch((error) => {
                  // const errorCode = error.code;
                  setAuthError(error.message);
              })
              .finally(()=>setIsLoading(false));
            
            setValues({
                password: '',
                email:'',
            });
        e.preventDefault();
      }
    return (
        <Container sx={{borderLeft: 3,borderColor:'#19D3AE'}}>
            <Grid container spacing={2} sx={{mt:4,}} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} >
                        <Typography sx={{color:'#686868',fontSize:26,p:5}} >
                            Login
                        </Typography>
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }
                        { !isLoading &&  <form onSubmit={handleLogin}>
                            
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
                                 <Typography style={{textAlign:'left'}}><Link to='/forgotPassword' style={{color:'red',textDecoration:'blink'}}>Forgot Password?</Link></Typography>
                            </FormControl>
                            
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
                            Sign In
                        </Button>
                        </form>}
                      
                        {
                        isLoading && <CircularProgress sx={{ color:'red',}}/>
                        }
                        <Button  onClick={handleGoogleSignIn}style={{
                            backgroundColor:'red',
                            color: 'white',
                            width:'80%',
                            
                                }}
                                sx={{
                                    mt:2,
                                    py:2
                                    
                                    
                                }}>
                            <GoogleIcon  sx={{mr:2}}/>
                            Sign In Using Google
                        </Button>
                        <Typography sx={{pb:5}} >
                            Don't Have Account? <Link to='/signUp'style={{textDecoration:'blink', color:'#19D3AE'}}>Sign Up</Link>
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

export default Login;