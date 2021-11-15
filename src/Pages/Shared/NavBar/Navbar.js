
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useAuth from '../../../hooks/useAuth';
import {  NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const {user,logOut}=useAuth();
  const theme=useTheme()
  const useStyle =makeStyles({
    navItem:{
      color:'#fff',
      textDecoration:'none'
    },
    navIcon:{
      [theme.breakpoints.up('sm')]:{
        display:'none'
      }

    },
    navLink:{
      [theme.breakpoints.down('sm')]:{
        display:'none'
      }

    },
    logo:{
      [theme.breakpoints.down('sm')]:{
       textAlign:'right'
      },
      [theme.breakpoints.up('sm')]:{
       textAlign:'left'
      }
    }
  })
  
  const {navItem,navIcon,logo,navLink}=useStyle()
const [state, setState] = React.useState(false);


  const list =  (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    
    >
      <List>
     
              <ListItem button >
           
            <ListItemText>  <NavLink  to='/home'><Button sx={{  fontWeight:'700' }} color="inherit">Home</Button></NavLink> </ListItemText>
            </ListItem>
            <Divider />
            <ListItem button >
            <ListItemText>  <NavLink  to='/productss'><Button sx={{  fontWeight:'700' }} color="inherit">Product</Button></NavLink></ListItemText>
            </ListItem>
            <Divider />
     
          
            <ListItem button >
            <ListItemText>   { user.email && <NavLink  to='/dashboard'><Button sx={{  fontWeight:'700' }} color="inherit">Dashboard</Button></NavLink>}</ListItemText>
            </ListItem>
            <Divider />
     
           <ListItem>
           {
                user?.email && <NavLink to='' > {user.displayName}</NavLink>
              }
            {
              user?.email? <Button variant='contained' onClick={logOut}> Logout</Button> :
              <NavLink  to='/login'><Button  sx={{  fontWeight:'700' }} color="inherit">Login</Button></NavLink>
            }

           </ListItem>
        
   
      </List>
      <Divider />
    
       
    </Box>)
    return (
 	<>
        <Box sx={{ flexGrow: 1,backgroundColor:'#181038',color:'#fff' }}>
        <AppBar position="fixed" sx={{ backgroundColor:'#181038',color:'#fff',mb:2 }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
	onClick={()=>setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={logo} variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'700' }}>
              Glass Store
            </Typography>
           <Box className={navLink}>
           <NavLink className={navItem} to='/home'><Button sx={{  fontWeight:'700' }} color="inherit">Home</Button></NavLink>
            <NavLink className={navItem} to='/productss'><Button sx={{  fontWeight:'700' }} color="inherit">Product</Button></NavLink>
           { user.email && <NavLink className={navItem} to='/dashboard'><Button sx={{  fontWeight:'700' }} color="inherit">Dashboard</Button></NavLink>}

              {
                user?.email && <NavLink to='' className={navItem}> {user.displayName}</NavLink>
              }
            {
              user?.email? <Button sx={{mx:2}} variant='contained' onClick={logOut}> Logout</Button> :
              <NavLink className={navItem} to='/login'><Button  sx={{  fontWeight:'700' }} color="inherit">Login</Button></NavLink>
            }
           </Box>
           
          </Toolbar>
        </AppBar>
      </Box>
 	<React.Fragment>
         
          <Drawer
          
            open={state}
            onClose={()=>setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
 </>
    );
};

export default Navbar;