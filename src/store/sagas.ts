import { AnyAction } from '@reduxjs/toolkit';
import {
  put,
  takeEvery,
  call,
  all,
  take,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import api from '../api/api';
import ICharacterApi from '../common/interfaces/ICharacterApi';
import IResponse from '../common/interfaces/IResponse';
import { update, add } from '../features/characters/charactersSlice';
import { getNextPage } from '../features/next-page/nextPageSlice';

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
  ADD_CHARACTERS_SAGA: 'ADD_CHARACTERS_SAGA',
};

function* updateCharacters() {
  const data: IResponse<ICharacterApi> = yield call(() =>
    api.get('/character')
  );
  yield put(getNextPage(data.info.next));

  yield put(update(data.results));
}
function* watchUpdateCharacters() {
  yield takeEvery(sagaActions.UPDATE_CHARACTERS_SAGA, updateCharacters);
}

function* watchAddCharacters() {
  yield takeLatest(sagaActions.ADD_CHARACTERS_SAGA, addCharacters);
}

function* addCharacters(action: AnyAction) {
  yield delay(2000);
  const data: IResponse<ICharacterApi> = yield call(() =>
    api.get(action.payload)
  );
  yield put(getNextPage(data.info.next));
  yield put(add(data.results));
}

export default function* rootSaga() {
  yield all([watchUpdateCharacters(), watchAddCharacters()]);
}
