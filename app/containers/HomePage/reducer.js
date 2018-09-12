import {fromJS} from 'immutable';
import {ADD_TASK} from './constants';
export const initialState=fromJS({
    task:'',
    list:[]
});

function homeReducer(state=initialState,action){
    switch(action.type){
    case ADD_TASK:{
        return state.set('task',action.name.target.value);}
    case 'ADD_LIST':{
        return state.set('list',[...state.get('list'),state.get('task')]);}
       
    default:
    return state;
}
}
export default homeReducer;