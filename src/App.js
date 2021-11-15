
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

import ProductBooked from './Pages/ProductBooked/ProductBooked';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AllProducts from './Pages/AllProducts/AllProducts/AllProducts';

function App() {
  return (
    <div className="App">
       <AuthProvider>
            <Router>
                    <Switch>
                          <Route exact path='/'>
                            <Home/>
                          </Route>
                          <Route exact path='/home'>
                            <Home/>
                          </Route>
                          <Route path='/productss'>
                                <AllProducts></AllProducts>
                          </Route>
                          
                          <PrivateRoute  path='/products/:id'>
                             <ProductBooked/>
                          </PrivateRoute>
                          <PrivateRoute path='/dashboard'>
                            <Dashboard/>
                          </PrivateRoute>
                          <Route path='/login'>
                            <Login></Login>
                          </Route>
                          <Route path='/register'>
                            <Register/>
                          </Route>
                    
                    </Switch>
            </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
