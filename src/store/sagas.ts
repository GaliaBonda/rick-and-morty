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
import { updateCharacter } from '../features/character/characterSlice';
import { getNextPage } from '../features/next-page/nextPageSlice';

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
  ADD_CHARACTERS_SAGA: 'ADD_CHARACTERS_SAGA',
  GET_CHARACTER_SAGA: 'GET_CHARACTER_SAGA',
  GET_ALL_CHARACTERS_SAGA: 'GET_ALL_CHARACTERS_SAGA',
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

function* getAllCharacters() {
  const charactersIds: number[] = [];
  for (let i = 1; i < 827; i++) {
    charactersIds.push(i);
  }
  console.log(charactersIds.toString());

  const data: ICharacterApi[] = yield call(() =>
    api.get('/character/' + charactersIds.toString())
  );

  yield put(update(data));
}

function* watchGetAllCharacters() {
  yield takeEvery(sagaActions.GET_ALL_CHARACTERS_SAGA, getAllCharacters);
}

function* addCharacters(action: AnyAction) {
  yield delay(2000);
  const data: IResponse<ICharacterApi> = yield call(() =>
    api.get(action.payload)
  );
  yield put(getNextPage(data.info.next));
  yield put(add(data.results));
}

function* watchAddCharacters() {
  yield takeLatest(sagaActions.ADD_CHARACTERS_SAGA, addCharacters);
}

function* getCharacter(action: AnyAction) {
  const data: ICharacterApi = yield call(() =>
    api.get('character/' + action.payload)
  );
  yield put(updateCharacter(data));
}

function* watchGetCharacter() {
  yield takeLatest(sagaActions.GET_CHARACTER_SAGA, getCharacter);
}

export default function* rootSaga() {
  yield all([
    watchUpdateCharacters(),
    watchAddCharacters(),
    watchGetCharacter(),
    watchGetAllCharacters(),
  ]);
}
