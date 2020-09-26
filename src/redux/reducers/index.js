import {combineReducers} from 'redux';
import ajaxLoadingSpinnerReducer from './ajaxLoadingSpinnerReducer';

export default combineReducers({ajaxLoadingSpinner: ajaxLoadingSpinnerReducer});