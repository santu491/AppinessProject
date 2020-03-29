import * as ActionTypes from './ActionTypes'
import { dashBoardData } from '../constants/DashBoard'
import { loginCredientials } from '../constants/Login'

export const getEmployeeData=()=> {
    return {
        type: ActionTypes.EMPLOYEE_DATA,
        payload: dashBoardData
    }

}

export const loginValidation = (loginData) => (dispatch) => {
        if (loginData.userName === loginCredientials.username && loginData.password === loginCredientials.password) {
             dispatch(loginSuccess())
         }
         else {
             dispatch(loginFailure())
         }
}

export const loginSuccess = () => {
    return {
        type: ActionTypes.LOGIN_SUCCESS
    }
}

export const loginFailure = () => {
    return {
        type: ActionTypes.LOGIN_FAILURE
    }
}