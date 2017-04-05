import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';



import Train from '../views/train/train';
import TrainIndex from '../views/train/index/index';
import TrainList from '../views/train/list/list';
import TrainSeat from '../views/train/seat/seat';
import TrainThrough from '../views/train/through/through'


import City from '../views/public/city/city';


const routes = historys =>  (
	<Router history={historys}>
		<Route path='/train' component={Train} >
			<IndexRoute  component={TrainIndex} />
			<Route path='/train/list/:fromCityName/:fromCityCode/:toCityName/:toCityCode/:detpDate/:findGD'  component={TrainList}/>
			<Route path='/train/seat/:fromCityCode/:toCityCode/:detpDate/:trainCode'  component={TrainSeat}/>
			<Route path='/train/through/:deptDate/:trainCode'  component={TrainThrough}/>
		</Route>
		
		<Route path='/city/:model/:direction' component={City}/>
		<Redirect from='*' to="/train" />
	</Router>
);


export default routes;




