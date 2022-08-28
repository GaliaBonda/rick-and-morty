import { AnyAction } from '@reduxjs/toolkit';
import {
  put,
  takeEvery,
  call,
  all,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import api from '../api/api';
import ICharacterApi from '../common/interfaces/ICharacterApi';
import IResponse from '../common/interfaces/IResponse';
import { update, add } from '../features/characters/charactersSlice';
import { updateCharacter } from '../features/character/characterSlice';
import { getNextPage } from '../features/next-page/nextPageSlice';
import ILocation from '../common/interfaces/ILocation';
import { updateLocations } from '../features/locations/locationsSlice';
import { getAll } from '../features/all-characters/allCharactersSlice';

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
  ADD_CHARACTERS_SAGA: 'ADD_CHARACTERS_SAGA',
  GET_CHARACTER_SAGA: 'GET_CHARACTER_SAGA',
  GET_ALL_CHARACTERS_SAGA: 'GET_ALL_CHARACTERS_SAGA',
  UPDATE_LOCATIONS_SAGA: 'UPDATE_LOCATIONS_SAGA',
};

export function* updateCharacters() {
  try {
    const data: IResponse<ICharacterApi> = yield call(() =>
      api.get('/character')
    );
    yield put(getNextPage(data.info.next));

    yield put(update(data.results));
  } catch (error) {
    console.log(error);
  }

}

function* watchUpdateCharacters() {
  yield takeLatest(sagaActions.UPDATE_CHARACTERS_SAGA, updateCharacters);
}

function* getAllCharacters() {
  // const charactersIds: number[] = [];
  // for (let i = 1; i < 827; i++) {
  //   charactersIds.push(i);
  // }

  // const data: ICharacterApi[] = yield call(
  //   () => api.get('/character/' + charactersIds.toString())
  // );

  // yield put(update(data));

  const promises = [api.get('/character/')];
  for (let i = 2; i <= 42; i++) {
    promises.push(api.get('/character/?page=' + i));
  }
  let allCharacters: ICharacterApi[] = [];
  const data: IResponse<ICharacterApi>[] = yield call(() =>
    Promise.all(promises)
  );

  data.forEach((item) => {
    allCharacters = [...allCharacters, ...item.results];
  });
  yield put(getAll(allCharacters));
}

function* watchGetAllCharacters() {
  yield takeLatest(sagaActions.GET_ALL_CHARACTERS_SAGA, getAllCharacters);
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

function* getAllLocations() {
  const locationsIds: number[] = [];
  for (let i = 1; i <= 126; i++) {
    locationsIds.push(i);
  }

  const locations: ILocation[] = yield call(() =>
    api.get('location/' + locationsIds.toString())
  );
  yield put(updateLocations(locations));
}

function* watchUpdateLocations() {
  yield takeEvery(sagaActions.UPDATE_LOCATIONS_SAGA, getAllLocations);
}

export default function* rootSaga() {
  yield all([
    watchUpdateCharacters(),
    watchAddCharacters(),
    watchGetCharacter(),
    watchGetAllCharacters(),
    watchUpdateLocations(),
  ]);
}
