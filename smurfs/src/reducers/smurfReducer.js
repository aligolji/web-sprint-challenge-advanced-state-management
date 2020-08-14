import { SMURFS_LOADING, SUCCESS, FAIL, ADD_SMURF } from '../actions/actions';

export const initialState = {
    smurfs: [],
    error: '',
    loading: false
};

export const smurfReducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch (action.type) {
        case SMURFS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                loading: false
            };
        case SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                loading: false,
                error: ''

            };
        case FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}