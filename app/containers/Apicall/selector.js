import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApi = state => state.get('api',initialState);

const makeSelectApi= () =>
createSelector(selectApi,apiState =>
  apiState.get('data'));
export { selectApi, makeSelectApi};