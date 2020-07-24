export const globalReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BASE":
      return { ...state, base: action.payload };
    case "ADD_TOPPING":
      let newToppings;
      if (!state.toppings.includes(action.payload)) {
        newToppings = [...state.toppings, action.payload];
      } else {
        newToppings = state.toppings.filter((item) => item !== action.payload);
      }
      return { ...state, toppings: newToppings };
    default:
      return state;
  }
};
