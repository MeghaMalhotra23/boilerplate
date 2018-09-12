import {REQUEST_API_DATA,RECIEVE_API_DATA} from './constants';
export const requestApiData=()=>{
    return ({type:REQUEST_API_DATA})}
export const recieveApiData=(data)=>{
    return({type:RECIEVE_API_DATA,data})};