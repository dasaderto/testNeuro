import {
    RECORD_CREATED,
    RECORD_DELETED,
    RECORD_EDITED,
    RECORD_FETCHED, RECORD_SHOWED,
    RECORD_UPDATED
} from "../actions/records-actions";

const initialState = {
    records: [],
    editedRecord:{},
    showingRecord:{}
};

export default function recordsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case RECORD_FETCHED:
            state = {
                ...state,
                records: payload
            };
            return state;
        case RECORD_DELETED:
            let newRecords = state.records.filter((el) => el._id !== payload.recordId);
            state = {
                ...state,
                records: newRecords
            };
            return state;
        case RECORD_CREATED:
            state = {
                ...state,
                records: [
                    ...state.records,
                    payload.record
                ]
            };
            return state;
        case RECORD_UPDATED:
            let updatedRecords  = state.records.map(el=> {return (el._id === payload.record._id) ? payload.record : el; });
            console.log(updatedRecords,payload);
            state = {
                ...state,
                records: updatedRecords,
                editedRecord: {}
            };
            return state;
        case RECORD_SHOWED:
            state = {
                ...state,
                showingRecord: payload.record
            };
            return state;
        case RECORD_EDITED:
            state = {
                ...state,
                editedRecord: payload.record
            };
            return state;
        default:
            return state;
    }
}