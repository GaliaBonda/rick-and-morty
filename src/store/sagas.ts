import { put, takeEvery, call, all } from 'redux-saga/effects';
import api from '../api/api';
import ICharacterApi from '../common/interfaces/ICharacterApi';
import IResponse from '../common/interfaces/IResponse';
import { update } from '../features/characters/charactersSlice';

function* updateCharacters() {
  const data: IResponse<ICharacterApi> = yield call(() =>
    api.get('/character')
  );
  yield put(update(data.results));
}
function* watchUpdateUsers() {
  yield takeEvery(sagaActions.UPDATE_CHARACTERS_SAGA, updateCharacters);
}
function* addCharacters() {}

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
};

export default function* rootSaga() {
  yield all([watchUpdateUsers()]);
}
