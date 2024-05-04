import Axios from 'axios';

export function createTransaction(data: [], id_user: number) {
  return Axios.post(`http://localhost:8000/transaction/${id_user}`, {
    data,
  });
}

export function getAllTransactionUser(id_user: number) {
  return Axios.get(`http://localhost:8000/transaction/${id_user}`);
}

export function getDetailTrasaction(id: number) {
  return Axios.get(`http://localhost:8000/transaction/detail/${id}`);
}

export function getDashboard(id_user: number) {
  return Axios.get(`http://localhost:8000/dashboard/${id_user}`);
}
