import React ,{ Component } from 'react';
import classnames from 'classnames';
import {immutableRenderDecorator} from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules'
import styles from './searchSubmit.scss';


@immutableRenderDecorator
@CSSModules(styles,{allowMultiple: true})
class SearchSubmit extends Component{

	render(){
		return (
			<div styleName="search-submit">
				<a styleName="submit-button">
					开始搜索
				</a>
			</div>
		)
	}

}


export default SearchSubmit;