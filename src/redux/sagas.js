import { all, put, fork, takeEvery } from 'redux-saga/effects';
import * as types from './actionTypes';
import firebaseDb from '../firebase';
import { addUserFail, addUserSuccess, deleteUserFail, deleteUserSuccess, editUserFail, editUserSuccess, getUsersFail, getUsersSuccess } from './actions';

function* onLoadUsersAsync() {
    try {
        const users = yield new Promise((resolve) => firebaseDb.child("users").on("value", resolve));
        if (users.val() !== null) {
            yield put(getUsersSuccess(users.val()));
        } else {
            yield put(getUsersSuccess({}));
        }

    } catch (error) {
        yield put(getUsersFail());

    }
}

function* onDeleteUserAsync({ payload: id }) {
    try {
        yield firebaseDb.child(`users/${id}`).remove();
        yield put(deleteUserSuccess());
    } catch (error) {
        yield put(deleteUserFail(error));

    }
}

function* onAddUserAsync({ payload: user }) {
    try {
        yield firebaseDb.child('users').push(user);
        yield put(addUserSuccess());
    } catch (error) {
        yield put(addUserFail(error));

    }
}

function* onEditUserAsync({ payload: { id, initialState: user } }) {
    try {
        yield firebaseDb.child(`users/${id}`).set(user);
        yield put(editUserSuccess());
    } catch (error) {
        yield put(editUserFail(error));

    }
}


export function* onLoadUsers() {
    yield takeEvery(types.GET_USERS_START, onLoadUsersAsync)
}

export function* onDeleteUser() {
    yield takeEvery(types.DELETE_USER_START, onDeleteUserAsync)
}

export function* onAddUser() {
    yield takeEvery(types.ADD_USER_START, onAddUserAsync)
}

export function* onEditUser() {
    yield takeEvery(types.EDIT_USER_START, onEditUserAsync)
}


const userSagas = [fork(onLoadUsers), fork(onDeleteUser), fork(onAddUser), fork(onEditUser)];

export default function* rootSaga() {
    yield all([...userSagas]);
}