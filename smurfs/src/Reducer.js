import { GET_SMURFS, GET_SMURFS_FAILURE } from "./Actions";

const initialState = {
    smurfs: [],
    error: ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_SMURFS:
            return {
                ...state,
                smurfs: action.payload
            }

        case GET_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        
        
        default:
            return state;


    }

}