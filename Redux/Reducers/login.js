import * as ActionTypes from '../ActionTypes'
const initialState = {
    isLoginSuccess: false
}

// Login reducer is being created
export const Login = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: true
            }

        case ActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isLoginSuccess: false
            }
        default:
            return state
    }

}