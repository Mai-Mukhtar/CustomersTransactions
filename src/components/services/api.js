import axios from "axios";


const API_URL = 'http://localhost:3001';
export const getCustomers = () =>axios.get(`${API_URL}/customers`);
export const getTransactions = () => axios.get(`${API_URL}/transactions`);
