import {RECIEVE_API_DATA} from './constants';
import {fromJS} from 'immutable';

export const initialState=fromJS({
   data:[]
});

function apiReducer(state=initialState,{type,data}){
    switch(type){
    case RECIEVE_API_DATA:{
        return state.set('data',[...state.get('data'),data.users]);}
    default:
    return state;
}
}
export default apiReducer;