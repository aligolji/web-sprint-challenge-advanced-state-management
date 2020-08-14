import axios from 'axios';

export const SMURFS_LOADING = 'SMURFS_LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';
export const ADD_SMURF = 'ADD_SMURF';


export const getSmurfs = () => dispatch => {
    dispatch({ type: SMURFS_LOADING });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res =>
            dispatch({ type: SUCCESS, payload: res.data }),
        )
        .catch(err => dispatch({ type: FAIL, payload: err }));

    console.log('inside ACTIONS first dispatch');

};

export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: SMURFS_LOADING });
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF, payload: res.data });
            console.log(res);
        })
        .catch((err) => dispatch({ type: FAIL, payload: err }));

    console.log('inside ACTIONS second dispatch')

}