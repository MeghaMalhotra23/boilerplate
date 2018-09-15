import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectTask= () =>
  
createSelector(selectHome,homeState =>
  homeState.get('list'));
export { selectHome, makeSelectTask};