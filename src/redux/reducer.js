import * as types from './actionTypes';

const initialState = {
    users: {},
    error: null,
    loading: false
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_START:
        case types.DELETE_USER_START:
        case types.ADD_USER_START:
        case types.EDIT_USER_START:
            return {
                ...state,
                loading: true
            }
        case types.GET_USERS_SUCCESS:

            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case types.DELETE_USER_SUCCESS:
        case types.ADD_USER_SUCCESS:
        case types.EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case types.GET_USERS_FAIL:
        case types.DELETE_USER_FAIL:
        case types.ADD_USER_FAIL:
        case types.EDIT_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state;
    }
};

export default contactReducer;
