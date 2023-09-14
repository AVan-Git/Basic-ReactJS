
const stateDefault = 12

export const numberReducers = (state = stateDefault, action) => {
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
  }