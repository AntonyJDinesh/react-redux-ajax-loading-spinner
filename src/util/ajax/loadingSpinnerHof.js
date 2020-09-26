import {LOADING_SPINNER_HIDE, LOADING_SPINNER_SHOW} from '../../redux/actionTypes';


export const doAjaxWithLoadingSpinner = async (request, config) => {
    try {
        // dispatchEvent({type: LOADING_SPINNER_SHOW});
        return await request(config);
    } catch(err) {
        throw err;
    } finally {
        // dispatchEvent({type: LOADING_SPINNER_HIDE});
    }
};