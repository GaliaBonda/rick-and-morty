import { put, takeEvery, call } from 'redux-saga/effects';
import api from '../api/api';
import ICharacterApi from '../common/interfaces/ICharacterApi';
import IResponse from '../common/interfaces/IResponse';
import { update } from '../features/characters/charactersSlice';

export function* updateCharacters() {
  const data: IResponse<ICharacterApi> = yield call(() =>
    api.get('/character')
  );
  yield put(update(data.results));
}

export const sagaActions = {
  UPDATE_CHARACTERS_SAGA: 'UPDATE_CHARACTERS_SAGA',
};

export default function* rootSaga() {
  yield takeEvery(sagaActions.UPDATE_CHARACTERS_SAGA, updateCharacters);
}
