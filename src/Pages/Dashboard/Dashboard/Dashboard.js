import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import AddProducts from '../AddProducts/AddProducts';
import { CircularProgress } from '@mui/material';
import {
 
  Switch,
  Route,
  Link,

  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrder from '../MyOrder/MyOrder';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageOrder from '../ManageOrder/ManageOrder';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllProduct from '../ManageAllProduct/ManageAllProduct';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const {user,logOut,admin,loading}=useAuth()
 
  if(loading){
    return <CircularProgress color="inherit" />
  }
  const drawer = (
                <div>
                        <Toolbar>
                          {
                            admin? <Button sx={{marginLeft:4}}>Admin</Button>:
                                 <Button>{user.displayName}</Button>
                          }
                        </Toolbar>
                        {/* <Button></Button> */}
                        
                        <Divider />
                        <Link style={{textDecoration:'none'}} to="/home">Home</Link> <br />
                       
                        <Button> <Link style={{textDecoration:'none'}} to={`${url}/myorder`}>My Order</Link></Button> <br />
                        <Button> <Link style={{textDecoration:'none'}} to={`${url}/review`}>Give Review</Link></Button> <br />
                       
                        <Button> <Link style={{textDecoration:'none'}} to={`${url}/payment`}>Payment</Link></Button> <br />
                        <Divider />
                        {
                          admin && <Box>

                                 <Link style={{textDecoration:'none'}} to={`${url}/makeadmin`}>  <Button> Make Admin</Button></Link> <br />
                                 <Link style={{textDecoration:'none'}} to={`${url}/manageorder`}><Button> Manage Order</Button></Link> <br />
                                 <Link style={{textDecoration:'none'}} to={`${url}/addproduct`}> <Button> Add Product</Button></Link> <br />
                                 <Link style={{textDecoration:'none'}} to={`${url}/allproducts`}><Button> Manage Product</Button></Link> <br />
                          </Box>
                        }
                        <Divider />
                        <Button sx={{my:4}} variant="contained" onClick={logOut}>Logout</Button>
                
                </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
            backgroundColor:'#713095',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       <Grid container spacing={2}>
                <Grid item xs={12}>
                          <Switch>
                              <Route exact path={path}>
                                <h3>Welcome To deshboard.</h3>
                              </Route>
                              <Route path={`${path}/myorder`}>
                                <MyOrder/>
                              </Route>
                              <Route path={`${path}/review`}>
                                 <Review/>
                              </Route>
                              <Route path={`${path}/payment`}>
                                  <Payment/>
                              </Route>
                              <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin/>
                              </AdminRoute>
                              <AdminRoute path={`${path}/allproducts`}>
                                <ManageAllProduct/>
                              </AdminRoute>
                              <AdminRoute path={`${path}/manageorder`}>
                                  <ManageOrder/>
                              </AdminRoute>
                              <AdminRoute path={`${path}/addproduct`}>
                                <AddProducts/>
                              </AdminRoute>
                              
                     </Switch>
                </Grid>
       </Grid>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
