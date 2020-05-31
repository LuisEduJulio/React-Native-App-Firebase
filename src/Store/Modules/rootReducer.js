import { combineReducers } from 'redux';
import currentUser from './Reducers/CurrentUser';
import counter from './Reducers/Counter';
import auth from './Reducers/AuthReducers';


const rootReducer = combineReducers({
    currentUser,
    counter,
    auth
})

export default rootReducer;