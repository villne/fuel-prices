import axios from "axios";

const url = "http://localhost:5000/prices";

export const fetchPrices = () => axios.get(url);
