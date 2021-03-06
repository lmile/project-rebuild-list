import React ,{ Component,PropTypes } from 'react';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import classnames from 'classnames';
import CSSModules from 'react-css-modules'
import styles from './calendar.scss';



@immutableRenderDecorator
@CSSModules(styles,{allowMultiple: true})
class CalendarContent extends Component{

	constructor(props){
		super(props);
	}

	getWeek(){
		let week = ['一','二','三','四','五','六','日'];
		return week.map(function(item,index){
			return <span>{item}</span>
		});
	}

	getDate(){
		const { dateList,checked } = this.props;
		var self = this;

		let isDateDifference = function(dateOne,dateTwo){
			let year = (dateOne.getFullYear() === dateTwo.getFullYear());
			let month = (dateOne.getMonth() === dateTwo.getMonth());
			let day = (dateOne.getDate() === dateTwo.getDate());
			

			if(year && month && day){
				return false;
			}
			return true;
		}
	
		return  dateList.map(function(item){
			let classname = classnames({
				'date-disabled': !item.active,
				'date-active': ( item.active && item.monthFlag !== 'now' ),
				'date-checked': !isDateDifference(item.date,checked),
			});
			return <span 	
						styleName={classname}
						onClick={ self.handleCheckDate.bind(self,item) }
						key={item.date.getTime()}
					>
						{item.value}
					</span>
		});
	}
	
	

	handleCheckDate(item){
		if(item.active){
			this.props.onCheckDate(item.date);
		}
	}


	render(){
		return (
			<div styleName="calendar-content">
				<div styleName="calendar-week">
					{this.getWeek()}
				</div>
				<div styleName="calendar-date">
					{this.getDate()}
				</div>
			</div>
		);
	}
	
}






export default CalendarContent

