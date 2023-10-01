import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        number :(state = 1, action) => {
            let {type, payload} = action;
            switch (type) {
                case "CHANGE_NUMBER":
                    state = payload;
                    break;
            
                default:
                    break;
            }
            return state;
        }
    }
})