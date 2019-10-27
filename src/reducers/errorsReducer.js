import {GET_ERRORS} from "../actions/records-actions";

const initialState = {
    errors: [],
};

export default  function  postsReducer(state = initialState,{type,payload}) {
    switch(type){

        case GET_ERRORS:
            state={
                ...state,
                errors:payload.errors
            };
            return state;
        default:
            return state;
    }
}