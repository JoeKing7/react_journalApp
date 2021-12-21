import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { login } from '../actions/auth';
import { starLoadingNotes } from '../actions/notes';
import { firebase } from "../firebase/firebaseConfig";
import AuthRouter from './AuthRouter';
import DashboardRouters from './DashboardRouters';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect( () => {
    firebase.auth().onAuthStateChanged( async (user) => { //se ejecuta cada vez que cambie el user
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        
        dispatch(starLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
      
    })
    
  }, [dispatch, setChecking]) //[] solo se ejecuta una vez

  if (checking) {
    return (
      <h1>Wait, loading ...</h1>
    )
  }

  return (
    <Router>
        <div>
            <Switch>
                <PublicRoute isAuthenticated={isLoggedIn} path="/auth" component={AuthRouter}></PublicRoute>
                <PrivateRoute isAuthenticated={isLoggedIn} exact path="/" component={DashboardRouters}></PrivateRoute>
                {/* <Route exact path={isLoggedIn ? '/' : '/auth/login'} component={DashboardRouters}></Route> */}
                <Redirect to="/auth/login"></Redirect>
            </Switch>
        </div>
      
    </Router>
  );
};

export default AppRouter;
