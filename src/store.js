import { createStore } from "redux";


const initialState = {
    count: 0,
};
function reducer (state = initialState, action) {
    switch(action.type) {
        case 'PLUS' : {
            return {
                ...state,
                count: +state.count + 1,
            }
        }
        case 'MINUS': {
            return {
                ...state,
                count: +state.count - 1,
            }
        }
        default: {
            return state;
        }
    }
}

export const store = createStore(reducer);