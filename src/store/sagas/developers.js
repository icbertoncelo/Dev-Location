import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as DeveloperActions } from '../ducks/developers';

export function* addDeveloper(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.developer}`);

    const developerData = {
      id: data.id,
      login: data.login,
      avatar_url: data.avatar_url,
      url: data.html_url,
      cordinates: action.payload.cordinates,
    };

    yield put(DeveloperActions.addDeveloperSuccess(developerData));
  } catch (err) {
    yield put(DeveloperActions.addDeveloperFailure('Error'));
  }
}
