import {ADD_TASK} from './constants';
 function addTask(name) {
 return {
   type: ADD_TASK,
   name,
 };
}
function deleteItem(itemIndex){
  return{
    type: 'DELETE',
    itemIndex
  }
}
export {addTask,deleteItem}