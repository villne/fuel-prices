import { FETCH_ALL, CREATE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getPrices = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPrices();

    console.log(data);

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
