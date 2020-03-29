import * as ActionTypes from './ActionTypes'
import { dashBoardData } from '../constants/DashBoard'
import { loginCredientials } from '../constants/Login'


// getEmployeeData action creator
export const getEmployeeData=()=> {
    return {
        type: ActionTypes.EMPLOYEE_DATA,
        payload: dashBoardData
    }

}

// loginValidation action creator
export const loginValidation = (loginData) => (dispatch) => {
        if (loginData.userName === loginCredientials.username && loginData.password === loginCredientials.password) {
             dispatch(loginSuccess())
         }
         else {
             dispatch(loginFailure())
         }
}

// loginSuccess action creator
export const loginSuccess = () => {
    return {
        type: ActionTypes.LOGIN_SUCCESS
    }
}


// loginFailure action creator
export const loginFailure = () => {
    return {
        type: ActionTypes.LOGIN_FAILURE
    }
}