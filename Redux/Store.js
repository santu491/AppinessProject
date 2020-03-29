import { createStore, combineReducers,applyMiddleware } from 'redux'
import { DashBoard } from './Reducers/dashboard'
import { Login} from './Reducers/login'
import thunk from 'redux-thunk'

//Combined all the reducers
const combinedReducer = combineReducers({
    dashBoard: DashBoard,
    login:Login
})

// Create store
const store= createStore(combinedReducer,applyMiddleware(thunk))

export default store