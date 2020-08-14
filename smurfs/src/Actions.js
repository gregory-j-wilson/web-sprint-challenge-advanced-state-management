import axios from 'axios';
// import e from 'express';
export const GET_SMURFS = 'GET_SMURFS'
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE'
export const POST_SMURF = 'POST_SMURF'

export const getSmurfs = () => dispatch => {
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_SMURFS, payload: res.data})
        })
        .catch(err => {
            dispatch({
                type: GET_SMURFS_FAILURE,
                payload: 'Could not get smurfs.'
            })
        })
}



