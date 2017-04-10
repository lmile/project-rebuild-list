import React ,{ Component , PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules'
import _ from 'lodash';
import styles from './login.scss';
import icon from '../../../styles/sprite.css';


import LoginSubmit from './loginSubmit';
import ValidateCode from './loginValidateCode';



const loginValidate = values => {
    const error = {}
    const phoneReg = /^0?(13|15|18|14|17)[0-9]{9}$/;
    const { username , password } = values;
    if(!username){
        error._error= '手机号码不可以为空';
        return error;
    }
    if( !phoneReg.test(username) ){
        error._error= '手机格式不正确';
        return error;
    }
    return error;
}


@immutableRenderDecorator
@CSSModules(_.merge({},styles,icon),{allowMultiple: true})
class LoginPhoneFrom extends Component{

    constructor(props){
        super(props);
    }

    handleOnSubmit(data){
        this.props.onLogin(data);
    }

    handleOnValidateCode(data){
        const { username } = data;
        this.props.onVlidateCode(username);
    }

    render(){
        const { handleSubmit ,invalid ,error ,pristine ,loading } = this.props;
        return(
            <div styleName="login-from-container">
                <form>
                    <label styleName="login-from-input" >
                        <i styleName="cicon icon-login-user-ico"></i>
                        <Field name="username" type="text" component="input" placeholder="请输入手机号码"/>
                    </label>
                    <label styleName="login-from-input" >
                        <i styleName="cicon icon-login-password-ico"></i>
                        <Field name="password" type="password" component="input" placeholder="请输入动态密码"/>
                        <ValidateCode 
                                disabled = { invalid || pristine || loading } 
                                handleSubmit={ handleSubmit( this.handleOnValidateCode.bind(this) ) } 
                        />
                    </label>
                </form>
                <LoginSubmit 
                        handleSubmit={ handleSubmit( this.handleOnSubmit.bind(this) ) } 
                        disabled={ invalid || pristine || loading } 
                        error={error}
                />
            </div> 
        )
    }
}





export default reduxForm({
  form: 'loginPhoneFrom',                 //你的redux-form的特殊标记，必填项
  validate:loginValidate,            // 上面定义的一个验证函数，使redux-form同步验证
})(LoginPhoneFrom)   



