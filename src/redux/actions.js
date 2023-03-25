import * as types from './actionTypes';

export const getUsersStart = () => ({
    type: types.GET_USERS_START
});

export const getUsersSuccess = (users) => ({
    type: types.GET_USERS_SUCCESS,
    payload: users
});

export const getUsersFail = (error) => ({
    type: types.GET_USERS_FAIL,
    payload: error
});

export const deleteUserStart = (id) => ({
    type: types.DELETE_USER_START,
    payload: id
});

export const deleteUserSuccess = () => ({
    type: types.DELETE_USER_SUCCESS
});

export const deleteUserFail = (error) => ({
    type: types.DELETE_USER_FAIL,
    payload: error
});

export const addUserStart = (user) => ({
    type: types.ADD_USER_START,
    payload: user
});

export const addUserSuccess = () => ({
    type: types.ADD_USER_SUCCESS
});

export const addUserFail = (error) => ({
    type: types.ADD_USER_FAIL,
    payload: error
});

export const editUserStart = (userDetail) => ({
    type: types.EDIT_USER_START,
    payload: userDetail
});

export const editUserSuccess = () => ({
    type: types.EDIT_USER_SUCCESS
});

export const editUserFail = (error) => ({
    type: types.EDIT_USER_FAIL,
    payload: error
});