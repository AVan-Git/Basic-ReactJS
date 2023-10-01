import {combineReducers, createStore} from 'redux'


const rootReducer = combineReducers({

    number: (state=1, action) =>{
        switch (action.type) {
            
        
            default:
                break;
        }

        return state;
    }
})


export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())