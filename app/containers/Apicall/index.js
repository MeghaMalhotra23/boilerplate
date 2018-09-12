import React from 'react';
import Button from '@material-ui/core/Button';
import TypoGraphy from '@material-ui/core/Typography';
import {requestApiData} from './action';
import {makeSelectApi} from './selector';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import reducer from './reducer';
import saga from './saga';
import ListItemText  from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


 
export class ApiCall extends React.PureComponent{
    constructor(){
        super();
    }
    componentDidMount(){
        requestApiData();
    }
    
   
    render(){
          let dataAvailable;
          if(this.props.data.size!=0){
              dataAvailable=<List>
              {this.props.data[0].map((obj)=>{
                   return <ListItem key={obj.userid}><ListItemText primary={obj.userid} />
                   <ListItemText primary={obj.role}/></ListItem>
              })}
              </List>
          }
          else{
              dataAvailable=""
          }
        return(
        <div>
            <TypoGraphy  variant="headline" color="primary" gutterBottom>
            API call
             </TypoGraphy>
             <Button onClick={this.props.getData}>Get api Data</Button>
            {dataAvailable}
        </div>
    );
  }}
  const mapStateToProps=createStructuredSelector({
      data:makeSelectApi()
  });

  const mapDispatchToProps=(dispatch)=>{
      return{
      getData: (evt)=>{
          if(evt!=undefined)
          dispatch(requestApiData())}}};
const withReducer=injectReducer({key:'api',reducer});
const withConnect=connect(mapStateToProps,mapDispatchToProps);
const withSaga=injectSaga({key:'api',saga});
  export default compose(withConnect,withReducer,withSaga)(ApiCall);