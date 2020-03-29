import * as ActionTypes from '../ActionTypes'

const initialstate = {
    employeeData: []
}

// Dashboard reducer is being created
export const DashBoard = (state = initialstate, action) => {
    switch (action.type) {
        case ActionTypes.EMPLOYEE_DATA:
            return {
                ...state,
                employeeData: action.payload
            }

        default:
            return state
    }
}