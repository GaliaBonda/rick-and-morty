import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../api/api';
import ICharacter from '../common/interfaces/ICharacter';
import { update } from '../features/characters/charactersSlice';

export function* updateCharacters() {
  const data: ICharacter[] = yield call(() => api.get('/character'));
  yield put(update(data));
}

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
};

export default function* rootSaga() {
  yield takeEvery(sagaActions.UPDATE_CHARACTERS_SAGA, updateCharacters);
}
