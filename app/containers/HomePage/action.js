import {ADD_TASK} from './constants';
export default function addTask(name) {
 return {
   type: ADD_TASK,
   name,
 };
}