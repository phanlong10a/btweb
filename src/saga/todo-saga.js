import { takeEvery, call, put } from 'redux-saga/effects';
import { getList } from '../services/api';
import { REQUEST_DATA_SERVER } from '../actions/index';
import { getListWork, getDataSuccess, getDataFail } from '../slice/todoSlice';
import { helper } from '../helper/common';

function* usersSaga() {
  try {
    yield put(getListWork({ loading: true }));
    const users = yield call(getList);
    if(!helper.isEmptyObject(users)){
      yield put(getDataSuccess({data: users}))
    } else {
      yield put(getDataFail({
        error: {
          cod: 500,
          message: 'Not found data'
        }
      }));
    }
  } catch (e) {
    yield put(getDataFail({
      error: {
        cod: 500,
        message: e
      }
    }));
  } finally {
    yield put(getListWork({ loading: false }));
  }
}

export function* watchUserSaga() {
  yield takeEvery(REQUEST_DATA_SERVER, usersSaga);
}