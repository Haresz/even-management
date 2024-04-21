import Axios from 'axios';

export function registerUser(
  username: string,
  email: string,
  password: string,
) {
  return Axios.post(`http://localhost:8000/user/register`, {
    username,
    email,
    password,
  });
}

export function loginRegister(email: string, password: string) {
  return Axios.post(`http://localhost:8000/user/login`, {
    email,
    password,
  });
}

export function switchRole(id_user: number) {
  return Axios.post(`http://localhost:8000/user/switch/${id_user}`);
}
