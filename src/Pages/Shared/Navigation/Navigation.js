import { Info, MedicalServices, Settings, Timeline } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Divider, Hidden, ListItemIcon, SwipeableDrawer } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo.png';
const Navigation = () => {
  
    const {user,logOut,admin} = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    //Menu
    const anchor = 'left';
    const [state, setState] = React.useState({
      
      left: false,
    
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box 
      
        sx={{ width: 400,}}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
       <Box sc={{ml:0}}>
        <img src={logo} alt=""  height="100px" weight="200px" />
       </Box>

            
        <List>
          <Link to='/home' style={{textDecoration:'none',color:'#3A4256'}}>
            <ListItem button >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                Home
              </ListItemText>
            </ListItem>
          </Link>
          <Link to='/home' style={{textDecoration:'none',color:'#3A4256'}}>
            <ListItem button >
              <ListItemIcon>
                <MedicalServices />
              </ListItemIcon>
              <ListItemText>
               Services
              </ListItemText>
            </ListItem>
          </Link>
          <Link to='/appointment' style={{textDecoration:'none',color:'#3A4256'}}>
            <ListItem button >
              <ListItemIcon>
                <Timeline/>
              </ListItemIcon>
              <ListItemText>
                Appointment
              </ListItemText>
            </ListItem>
          </Link>
          <Link to='/home' style={{textDecoration:'none',color:'#3A4256'}}>
            <ListItem button >
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText>
                About
              </ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          
            <ListItem button >
              <ListItemIcon>
                
              </ListItemIcon>
              <ListItemText>
                somthing
              </ListItemText>
            </ListItem> 
        </List>
        <Divider />
        
       
      </Box>
    );
    return (
        <div>
            <Box sx={{ flexGrow: 1 }} style={{ position:'relative',zIndex:'10'}}>
                <AppBar position="fixed" style={{backgroundColor:'white',}} >
                    <Toolbar>
                    {/* -<Hidden implementation="css" mdDown><IconButton /></Hidden> */}
                    <Hidden smUp>
                    <React.Fragment key={anchor} >
                    <IconButton
                    // sx={{ display: { md:'none',xl: 'none', xs: 'block' } }}
                      onClick={toggleDrawer(anchor,true)}
                        size="large"
                        edge="start"
                       
                        aria-label="menu"
                        sx={{ mr: 2,color:'#1CC7C1' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                      {list(anchor)}
                  </SwipeableDrawer>
                  </React.Fragment>
                  </Hidden>
                  <Hidden smDown maxwidth="md">
                
                    <Box  component="div" sx={{ flexGrow: 1 }}>
                      <Link to="/home">
                        <img src={logo} alt=""  height="80px" weight="200px" />
                      </Link>
                    </Box>
                     <Link to='/home' style={{textDecoration:'none',color:'#00C689'}} >
                    <Button color="inherit" sx={{mx:2}} >Home</Button>
                    </Link>
                     <Link to='/home' style={{textDecoration:'none',color:'#00C689'}} >
                    <Button color="inherit" sx={{mx:2}} >About</Button>
                    </Link>
                     <Link to='/home' style={{textDecoration:'none',color:'#00C689'}} >
                    <Button color="inherit" sx={{mx:2}} >Services</Button>
                    </Link>
                     <Link to='/home' style={{textDecoration:'none',color:'#00C689'}} >
                    <Button color="inherit" sx={{mx:2}} >Blog</Button>
                    </Link>
                     <Link to='/home' style={{textDecoration:'none',color:'#00C689'}} >
                    <Button color="inherit" sx={{mx:2}} >Reviews</Button>
                    </Link>
                     <Link to='/appointment' style={{textDecoration:'none',color:'#00C689'}}>
                    <Button color="inherit" >Appointment</Button>
                    </Link>
                    
                    {
                        user?.email ?
                        <div >
                          
                        <Button
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                         <Avatar alt={user.displayName} src={user.photoURL} />
                      </Button>
                      <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                  <MenuItem>
                    <Avatar alt={user.displayName} src={user.photoURL}/> Profile
                  </MenuItem>
                  
                 
                  {
                    admin?
                    <MenuItem>
                    <NavLink to='/dashboard' style={{textDecoration:'none',color:'#686868',textAlign:'center',display:'flex'}}>
                  <ListItemIcon >
                      <DashboardIcon fontSize="small"/> 
                  </ListItemIcon>
                  <Typography>Dashboard</Typography>
                       
                  </NavLink>
                  </MenuItem>  : <MenuItem>
                  <NavLink to='/myAppointments' style={{textDecoration:'none',color:'#686868',textAlign:'center',display:'flex'}}>
                  <ListItemIcon >
                      <DashboardIcon fontSize="small"/> 
                  </ListItemIcon>
                  <Typography>My Appointments</Typography>
                       
                  </NavLink>
                  </MenuItem> 
                  }
                  
              
                  <Divider />
                  
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={logOut}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
                   </div>
                       
                        // <Button onClick ={logOut}color="inherit" style={{color:'#1CC7C1'}}>
                        //     <LogoutIcon />
                        //     Logout</Button>
               
                        :
                        <Link to='/signIn'style={{textDecoration:'none',color:'#1CC7C1'}}>
                        <Button color="inherit">
                            <LoginIcon /> Login</Button>
                        </Link>
                    }
                   </Hidden>
                    </Toolbar>
                </AppBar>
    </Box>
        </div>
    );
};

export default Navigation;
