import Axios from 'axios';

export function registerUser(
  username: string,
  email: string,
  password: string,
) {
  console.log(username + ' ' + email + ' ' + password);
  return Axios.post(`http://localhost:8000/user/register`, {
    username,
    email,
    password,
  });
}

export function loginUser(email: string, password: string) {
  return Axios.post(`http://localhost:8000/user/login`, {
    email,
    password,
  });
}

export function detailUser(id: number) {
  return Axios.get(`http://localhost:8000/user/detail/${id}`);
}

export function switchRole(id_user: number, token: any) {
  console.log(token);
  return Axios.post(
    `http://localhost:8000/user/switch/${id_user}`,
    {},
    {
      headers: { Authorization: token },
    },
  );
}
