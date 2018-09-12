import { call, put, select, takeLatest } from 'redux-saga/effects';
import {recieveApiData} from './action';
import {REQUEST_API_DATA} from './constants';
import {fetchData} from './api';

/**
 * Github repos request/response handler
 */
export function* getApiData(action) {

  try {
    const data=yield call(fetchData);
    yield put(recieveApiData(data));
  } catch (err) {
    console.log(e);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* mySaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(REQUEST_API_DATA, getApiData);
}