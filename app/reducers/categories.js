import createReducer from '../libs/createReducer'
import * as types from '../actions/types'

export const getCategories = createReducer({},{

});

export const reactCount = createReducer (0, {
    [types.ADD_CATEGORY](state,action){
        return state + 10;
    }
});