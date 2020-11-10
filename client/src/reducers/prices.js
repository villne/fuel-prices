import { FETCH_ALL, CREATE } from "../constants/actionTypes";

const reducer = (prices = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...prices, action.payload];
    default:
      return prices;
  }
};

export default reducer;
