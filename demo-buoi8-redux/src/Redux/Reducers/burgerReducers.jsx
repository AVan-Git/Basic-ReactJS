const initialState = {
    burger:[
        {id:'salad',price: 15, quantity: 2},
        {id:'cheese',price: 5, quantity: 2},
        {id:'beef',price: 25, quantity: 2}
    ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "CHANGE_TOPPING":
    let {id,quantity} = payload
    let newBurger = [...state.burger];

    //di tim burger nao thay doi
    let item = newBurger.find(item => {
        return item.id == id
    })
    
    if (item) {
        if (item.quantity > 1 || item.quantity == 1 && quantity != -1) {
            item.quantity += quantity;
        }
        
    }

    //update lai state
    state.burger = newBurger

    return { ...state, ...payload }

  default:
    return state
  }
}
