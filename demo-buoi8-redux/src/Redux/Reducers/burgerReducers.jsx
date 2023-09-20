const initialState = {
    burger:[
        {id:'salad',price: 15, quantity: 2},
        {id:'cheese',price: 5, quantity: 2},
        {id:'beef',price: 25, quantity: 2}
    ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

//   case typeName:
//     return { ...state, ...payload }

  default:
    return state
  }
}
