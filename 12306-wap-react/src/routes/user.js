import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';


import User from '../views/user/user';
import UserIndex from '../views/user/index/index';
import UserLogin from '../views/user/login/login';
import UserForgotPassword from '../views/user/forgotPassword/forgotPassword';
import UserRegister from '../views/user/register/register';
import UserAccount from '../views/user/account/account';
import UserPassengers from '../views/user/passengers/passengers';
import UserChangePassengers from '../views/user/changePassengers/changePassengers';
import UserOrderCenter from '../views/user/orderCenter/orderCenter';
import UserAddChilder from '../views/user/addChilder/addChilder';



const UserRoutes =  function(){
    return(
        <Route path='/user' component={User} >
            <IndexRoute  component={UserIndex} />
            <Route path='/user/login'  component={UserLogin}/>
            <Route path='/user/forgotPassword'  component={UserForgotPassword}/>
            <Route path='/user/register'  component={UserRegister}/>
            <Route path='/user/account' component={UserAccount}/>
            <Route path='/user/passenger/:model' component={UserPassengers}/>
            <Route path='/user/changePassenger/:model/:id' component={UserChangePassengers}/>
            <Route path='/user/orderCenter' component={UserOrderCenter}/>
            <Route path='/user/addChilder' component={UserAddChilder}/>
        </Route> 
    )      
};




export default UserRoutes;



