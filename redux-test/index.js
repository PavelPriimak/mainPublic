import {configureStore} from 'redux';

const counter = document.querySelector('.output');
const addButton = document.querySelector('.addBtn');
const minButton = document.querySelector('.minBtn');

const initialState = {
    count: 0,
};

function reducer(state = initialState, action) {
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
const store = configureStore(reducer);

addButton.addEventListener('click', () => {
    store.dispatch({
        type: 'PLUS',
    })
})

minButton.addEventListener('click', () => {
    store.dispatch({
        type: 'MINUS',
    })
})

store.subscribe(() => {
    console.log(store.getState());

    counter.innerHTML = store.getState().count;
})