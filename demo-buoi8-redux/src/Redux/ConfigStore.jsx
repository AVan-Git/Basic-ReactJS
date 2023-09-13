import {createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
    // Nơi chứa các state của ứng dụng

    number: (state = 1) => {
        return state;
    },
    stateA: (state = "https://picsum.photos/200/200") => {
        return state;
    }
    

})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
