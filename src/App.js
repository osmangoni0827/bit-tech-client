
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Dashboard from './component/Dash-board/Dashboard/Dashboard';
import AddBlog from './component/Dash-board/AddBlog/AddBlog.js';
import { createContext, useState } from 'react';
import PrivateRoute from './component/LogIn/PrivateRoute/PrivateRoute';
import LogIn from './component/LogIn/LogIn';
import SignUp from './component/SignUp/SignUp';
import ManageBlog from './component/Dash-board/ManageBlog/ManageBlog'
import SingleBlogInfo from './component/SingleBlogInfo/SingleBlogInfo';
import AddAdmin from './component/Dash-board/AddAdmin/AddAdmin';
import Contact from './component/Contact/Contact';
export const loggedInContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <loggedInContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
        
          <PrivateRoute path='/addNewBlog'>
            <AddBlog></AddBlog>
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path='/manageblog'>
            <ManageBlog></ManageBlog>
          </PrivateRoute>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/signup'>
            <SignUp></SignUp>
          </Route>
          <Route path="/singleBlogInfo/:id">
            <SingleBlogInfo></SingleBlogInfo>
          </Route>
        </Switch>
      </Router>

    </loggedInContext.Provider>

  );
}

export default App;
