import axios from 'axios';

export const GET_ERRORS = 'errors:get';
export const RECORD_CREATED = 'records:recordAppended';
export const RECORD_SHOWED = 'records:recordShowed';
export const RECORD_DELETED = 'records:recordDeleted';
export const RECORD_EDITED = 'records:recordEdited';
export const RECORD_UPDATED = 'records:recordUpdate';
export const RECORD_FETCHED = 'records:fetchRecords';

export function fetchRecords() {
    return (dispatch) => {
        return axios.get('http://localhost:3001/api/records/list')
            .then(res => {
                dispatch({
                    type: RECORD_FETCHED,
                    payload: JSON.parse(res.data)
                });
            })
    }
}

export function appendRecord(newRecord) {
    return (dispatch) => {
        return axios.post('http://localhost:3001/api/records/', newRecord)
            .then(res => {
                dispatch({
                    type: RECORD_CREATED,
                    payload: {
                        record: JSON.parse(res.data)
                    }
                })
            }).catch((err) => {
                console.log(err);
                let errors = {};
                if (err.response.status === 400) {
                    errors.records = "Произошла ошибка"
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: errors
                })
            });
    }
}

export function updateRecord(record,record_id) {
    return (dispatch)=>{
        return axios.put(`http://localhost:3001/api/records/${record_id}`,record)
            .then(res => {
                dispatch({
                    type: RECORD_UPDATED,
                    payload: {
                        record: res.data
                    }
                })
            }).catch((err) => {
                console.log(err);
                let errors = {};
                if (err.response.status === 400) {
                    errors.records = "Произошла ошибка"
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: errors
                })
            });
    }
}

export function editRecord(recordId) {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/api/records/${recordId}`)
            .then(res => {
                dispatch({
                    type: RECORD_EDITED,
                    payload: {
                        record: res.data
                    }
                })
            }).catch((err) => {
                console.log(err);
                let errors = {};
                if (err.response.status === 400) {
                    errors.records = "Произошла ошибка"
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: errors
                })
            });
    }
}

export function showRecord(recordId) {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/api/records/${recordId}`)
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: RECORD_SHOWED,
                    payload: {
                        record: res.data
                    }
                })
            }).catch((err) => {
                console.log(err);
                let errors = {};
                if (err.response.status === 400) {
                    errors.records = "Произошла ошибка"
                }
                dispatch({
                    type: GET_ERRORS,
                    payload: errors
                })
            });
    }
}

export function deleteRecord(recordId) {
    return (dispatch) => {
        return axios.delete(`http://localhost:3001/api/records/${recordId}`)
            .then(res => {
                dispatch({
                    type: RECORD_DELETED,
                    payload: {
                        recordId: res.data._id
                    }
                })
            }).catch((err) => {
                console.log(err);
                let errors = {};
                // if (err.response.status === 400) {
                //     errors.records = "Произошла ошибка"
                // }
                dispatch({
                    type: GET_ERRORS,
                    payload: errors
                })
            });
    }
}