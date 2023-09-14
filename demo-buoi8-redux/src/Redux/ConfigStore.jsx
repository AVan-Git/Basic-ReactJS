import {createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
    // Nơi chứa các state của ứng dụng

    number: (state = 12, action) => {
        switch (action.type) {
            case "TANG_SL":
                //b1: lay gia tri tu  payload len
                const {payload} = action;
                // b2: thay doi state
                state += payload;
                // b3 return ve state moi
                return state;
        
            default:
                break;
        }
        return state;
    },
    stateA: (state = "https://picsum.photos/200/200", action) => {
        return state;
    }


})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
