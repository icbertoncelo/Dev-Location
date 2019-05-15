import { call, put, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../services/api';

import { Creators as DeveloperActions } from '../ducks/developers';
import { Creators as ModalActions } from '../ducks/modal';

export function* addDeveloper(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.developer}`);

    const isDuplicated = yield select(state => state.developers.data.find(developer => developer.id === data.id));

    if (isDuplicated) {
      yield put(DeveloperActions.addDeveloperFailure('User already exists!'));
      toast.warn('User already exists!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      const developerData = {
        id: data.id,
        login: data.login,
        name: data.name,
        avatar_url: data.avatar_url,
        url: data.html_url,
        cordinates: action.payload.cordinates,
      };

      yield put(DeveloperActions.addDeveloperSuccess(developerData));
      toast.success('Developer added successfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  } catch (err) {
    yield put(DeveloperActions.addDeveloperFailure('Error'));
    toast.error('Error adding developer', {
      position: toast.POSITION.TOP_RIGHT,
    });
  } finally {
    yield put(ModalActions.hideModal());
  }
}
