
import *  as actionType  from './passengersContainerType';



const initialState = {
  loading:false,
  error: false,
  passengers: false,
}



function passengers( state = initialState , action){
    
    switch(action.type){
        //请求loading
        case actionType.REQUEST_LOADING : {
            return{
                ...state,
                loading:true,
            };
        }

        //获取乘客列表
        case actionType.REQUEST_PASSENGERS_SUCCESS : {
             return{
                ...state,
                loading:false,
                passengers: action.payload,
            };
        }

        //获取乘客列表失败
        case actionType.REQUEST_PASSENGERS_ERROR : {
            return{
                ...state,
                loading:false,
                error : action.payload,
            }
        }

        default:
            return state;
    }
}



export default passengers;

