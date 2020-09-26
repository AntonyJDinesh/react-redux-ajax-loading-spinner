import {LOADING_SPINNER_SHOW, LOADING_SPINNER_HIDE} from '../actionTypes';

const initialState = {
    showSpinner: false
};

export default function ajaxLoadingSpinnerReducer(state = initialState, action) {
    switch(action.type) {
        case LOADING_SPINNER_SHOW: {
            console.log("LOADING_SPINNER_SHOW Fired")
            let new_state = Object.assign({}, state, {showSpinner: true});
            return new_state;
        }
        case LOADING_SPINNER_HIDE: {
            let new_state = Object.assign({}, state, {showSpinner: false});
            return new_state;
        }
        default: {
            return state;
        }
    }
};