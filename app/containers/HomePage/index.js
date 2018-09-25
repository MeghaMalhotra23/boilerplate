

import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input'
import {addTask} from './action';
import {deleteItem} from './action';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
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
import Toolbar from '@material-ui/core/Toolbar';

/* eslint-disable react/prefer-stateless-function */
const styles = theme=>({  
  palette:{
    type:'dark'
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding:theme.spacing.unit * 2,
    margin:theme.spacing.unit ,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'block',
  },
  inputBox:{
    padding:theme.spacing.unit * 2,
    margin:theme.spacing.unit ,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'block',
    width:400
  },
  block:{
    width:'100%',
    display:'block'
  },
  grow: {
    flexGrow: 1
  },
  linkCss:{
    backgroundColor: '#fff',
    padding: theme.spacing.unit *2,
    textDecoration: 'none',
    paddingRight: 20,
    borderRadius: 10,
    paddingLeft:20
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
      <Grid container spacing={20} alignItems="center" justify="center">
        <Grid item xs={12} alignContent="space-around">
       <AppBar position="static">
       <Toolbar>
       <Typography variant="title" color="inherit" className={classes.grow}>
            To Do List
          </Typography>
       <Link to="/apicall" color="inherit" className={classes.linkCss}>API </Link>
       </Toolbar> 
      </AppBar>
        </Grid>
        <Grid item xs={12} >
        <Grid container justify="center">
        <Grid item xs={4} margin="normal" >
        <Paper className={classes.paper}>
      <Input placeholder="Enter task" id="task" type="text"  value={this.props.task} onChange={this.props.onChangeValue} />
      </Paper>
      </Grid>
      <Grid item xs={1}>
     <Paper className={classes.paper}>
      <Button onClick={this.props.addInList} color="secondary">ADD</Button>
      </Paper>
      </Grid>
      </Grid>
      </Grid>
      <Grid item xs={4} >
      <List>
     {this.props.statetask.map((ele,index)=>{
       return <ListItem key={ele}> 
         <CheckBox color="primary"/>
       <ListItemText primary={ele}/>
       <Button onClick={()=>this.props.deleteTask(index)}>X</Button>
        </ListItem>
     })}
         </List>
         </Grid>
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