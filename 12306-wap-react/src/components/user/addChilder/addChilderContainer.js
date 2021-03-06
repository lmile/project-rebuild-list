import React,{ Component } from 'react';
import classnames from 'classnames';
import DatePicker from 'react-mobile-datepicker';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';
import _ from 'lodash';
import styles from './addChilder.scss';
import icon from '../../../styles/sprite.css';

import * as DateFilter from '../../../filter/Date';
import SessionServer from '../../../server/session/index';

import SelectAdultModal from './addChilderAdultModal';


@immutableRenderDecorator
@CSSModules(_.merge({},styles,icon),{allowMultiple: true})
class AddChilderContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            isVisibile:false,
            isAdult:false,
            adult: '',
            birthday:'',
            name:'',
        }
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
        this.handleDateShow = this.handleDateShow.bind(this);
        this.handleDateHide = this.handleDateHide.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAdultShow = this.handleAdultShow.bind(this);
        this.handleAdultHide = this.handleAdultHide.bind(this);
        this.handleAdultChange = this.handleAdultChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleBirthdayChange(date){
        var date = DateFilter.getFormat(date,'yyyy-MM-dd');
        this.setState({
            birthday:date,
            isVisibile:false,
        });
    }

    handleNameChange(el){
        let value = el.target.value;
        this.setState({
            name:value,
        })
    }

    handleDateShow(){
        this.setState({
            isVisibile:true,
        })
    }

    handleDateHide(){
        this.setState({
            isVisibile:false,
        })
    }

    handleAdultShow(){
        this.setState({
            isAdult:true,
        })
    }

    handleAdultHide(){
        this.setState({
            isAdult:false,
        })
    }

    handleAdultChange(adult){
        this.setState({
            adult:adult,
            isAdult:false,
        })
    }

    
    handleSubmit(){
        const { birthday ,name  ,adult } = this.state;
        if(!name || !birthday|| !adult){
            return false;
        }
        var passneger = SessionServer.get('trainPassenger');
        var childerPassneger = {
            userName:name,
            birthday:birthday,
            adult:adult,
            childer:true,
        }
        passneger.push(childerPassneger);
        SessionServer.set('trainPassenger',passneger);
        window.history.back();
    }


    render(){
        const { birthday ,name ,isVisibile ,isAdult ,adult } = this.state;
        const submitClass=classnames({
            'submit':true,
            'disabled': (!name || !birthday|| !adult),
        });
        return(
            <div styleName='container'>
                <div styleName="list-container">
                    <label styleName="item" >
                        <span styleName="item-label">乘客类型</span>
                        <i styleName="cicon icon-label-child"></i>
                    </label>
                    <label styleName="item" >
                        <span styleName="item-label">姓名</span>
                        <input type="text" value={name} placeholder="请输入姓名" onChange={this.handleNameChange} />
                    </label>
                    <label styleName="item" >
                        <span styleName="item-label">出生年月</span>
                        <input type="text" placeholder="请选择出生年月" value={birthday} onClick={this.handleDateShow} />
                    </label>
                    <label styleName="item" >
                        <span styleName="item-label">同行成人</span>
                        <input type="text" value={adult.userName? adult.userName : ''} placeholder="请选择成人" onClick={this.handleAdultShow} />
                    </label>
                </div>

                <div styleName="form-submit">
                    <button styleName="submit" styleName={submitClass} onClick={this.handleSubmit} >提交</button>
                </div>

                <DatePicker
                    value={new Date()}
                    onSelect={this.handleBirthdayChange}
                    onCancel={this.handleDateHide}
                    min={new Date(2000,0,0)}
                    max={new Date()}
                    isOpen={isVisibile}
                />
                <SelectAdultModal
                    isVisibile={isAdult}
                    onSelect={this.handleAdultChange}
                    onCancel={this.handleAdultHide}
                />
            </div>
        );
    }
}






export default AddChilderContainer


