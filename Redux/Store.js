import { createStore, combineReducers,applyMiddleware } from 'redux'
import { DashBoard } from './Reducers/dashboard'
import { Login} from './Reducers/login'
import thunk from 'redux-thunk'

const combinedReducer = combineReducers({
    dashBoard: DashBoard,
    login:Login
})
const store= createStore(combinedReducer,applyMiddleware(thunk))

export default store