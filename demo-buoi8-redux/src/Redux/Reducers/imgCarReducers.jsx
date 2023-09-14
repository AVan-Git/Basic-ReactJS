const stateDefault = "./img/products/car_black.webp";

export const imgCarReducers = (
  state = stateDefault,
  action
) => {
  // buoc 3: nhận dât và cập nhật
  let { payload, type } = action;
  switch (type) {
    case "CHAGE_COLOR":
      state = payload;
      break;
    //   case "yellow":
    //     state = "./img/products/car_yellow.webp";
    //     break;
    //   case "blue":
    //     state = "./img/products/car_blue.webp";
    //     break;

    default:
      state = "./img/products/car_black.webp";
      break;
  }
  return state;
};
