import React ,{ Component,PropTypes } from 'react';
import classnames from 'classnames';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules'
import styles from './searchDate.scss';
import icon from '../../../styles/sprite.css';


import ModalDate from '../../modal/Date';


@immutableRenderDecorator
@CSSModules(Object.assign({},styles,icon),{allowMultiple: true})
class SearchDate extends Component{
	static propTypes = {
		showDate: PropTypes.string,
		showWeek: PropTypes.string,
		isVisible: PropTypes.bool,
		onChangeDate: PropTypes.fuc,
		onHide: PropTypes.func,
		onShow: PropTypes.func,
	};

	constructor(props){
		super(props);
		this.handleShow = this.handleShow.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleHide = this.handleHide.bind(this);
	}


	handleShow(){
		this.props.onShow();
	}
	
	handleHide(){
		this.props.onHide();
	}

	handleDateChange(date){
		this.props.onChangeDate(date);
	}

	render(){
		const { showDate,showWeek,isVisible } = this.props;

		return (
			<label styleName="label-item">
				<div styleName='form-date' onClick={this.handleShow}>
					<div styleName='labe-form-date'>
						<i styleName='cicon icon-rili-ico'></i>
						&nbsp;&nbsp;出发日期
					</div>
					<div styleName='form-date-selct'>
						<p styleName="date-input">{showDate}</p>
						<span styleName="date-week">{showWeek}</span>
					</div>
				</div>
				<div styleName='border'></div>

				<ModalDate
						onHide={this.handleHide}
						onChange={this.handleDateChange} 	
						isVisible={isVisible}
				/>
			</label>
		)
	}
}


export default SearchDate;