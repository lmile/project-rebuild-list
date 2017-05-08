import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';


import Bus from '../views/bus/bus';
import BusIndex from '../views/bus/index/index';
import BusList from '../views/bus/list/list';


const BusRoutes =  function(){
    return(
        <Route path='/bus' component={Bus} >
            <IndexRoute  component={BusIndex} />
            <Route path='/bus/list/:fromCityName/:fromCityCode/:toCityName/:toCityCode/:detpDate'  component={BusList}/>
        </Route> 
    )      
};




export default BusRoutes;



