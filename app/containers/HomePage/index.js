

import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input'
import {addTask} from './action';
import {deleteItem} from './action';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import addToList from './action2';
import reducer from './reducer';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import { makeSelectTask } from './selectors';
import { createStructuredSelector } from 'reselect';
import { ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CheckBox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

/* eslint-disable react/prefer-stateless-function */
const styles = theme=>({  
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'block'
  },
  block:{
    width:'100%',
    display:'block'
  }
});
export class HomePage extends React.PureComponent {
  constructor(){
    super();
    
  }

  componentDidMount(){
    
  }
  render() {
    const {classes,themes}=this.props;
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
      <Typography variant="headline" color="primary" gutterBottom>
        To Do List Application
      </Typography>
      </Paper>      
        </Grid>
        <Grid item xs={4} margin="normal" >
        <Paper className={classes.paper}>
      <Input placeholder="Enter task" id="task" type="text"  value={this.props.task} onChange={this.props.onChangeValue} />
      </Paper>
      </Grid>
      <Grid item xs={1}>
     <Paper className={classes.paper}>
      <Button onClick={this.props.addInList}>ADD</Button>
      </Paper>
      </Grid>
      <div className={classes.block}>
      <List>
     {this.props.statetask.map((ele,index)=>{
       return <ListItem key={ele}> 
         <CheckBox/>
       <ListItemText primary={ele}/>
       <Button onClick={()=>this.props.deleteTask(index)}>X</Button>
        </ListItem>
     })}
         </List>
      </div>
      <List>
        <ListItem>
        <Link to="/apicall">API </Link>
        </ListItem>
      </List>
      </Grid> 
    </div>
  
    );
  }
  
}
HomePage.propTypes={
  task:PropTypes.string,
  onChangeValue:PropTypes.func,
}
const mapStateToProps=createStructuredSelector({
  statetask:makeSelectTask()
});
 export function mapDispatchToProps(dispatch){
    return{
      onChangeValue: evt=>{
        dispatch(addTask(evt))},
        addInList: ()=>{
          dispatch(addToList())
        },
        deleteTask:index=>{dispatch(deleteItem(index))}
 }
}

const withReducer=injectReducer({key:'home',reducer});
const withConnect=connect(mapStateToProps,mapDispatchToProps);

export default compose(withReducer,withConnect,withStyles(styles))(HomePage);