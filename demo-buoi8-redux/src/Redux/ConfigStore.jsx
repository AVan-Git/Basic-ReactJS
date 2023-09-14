import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  // Nơi chứa các state của ứng dụng

  number: (state = 12, action) => {
    switch (action.type) {
      case "TANG_SL":
        //b1: lay gia tri tu  payload len
        const { payload } = action;
        // b2: thay doi state
        state += payload;
        // b3 return ve state moi
        return state;

      default:
        break;
    }
    return state;
  },
  stateCar: (state = "./img/products/car_black.webp", action) => {
    // buoc 3: nhận dât và cập nhật
    switch (action.type) {
      case "white":
        state = "./img/products/car_white.webp";
        break;
      case "yellow":
        state = "./img/products/car_yellow.webp";
        break;
      case "blue":
        state = "./img/products/car_blue.webp";
        break;

      default:
        state = "./img/products/car_black.webp";
        break;
    }
    return state;
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
