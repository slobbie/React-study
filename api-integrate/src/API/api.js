import axios from 'axios';

export const getUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

export const getUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data; // user id 를 url 로 받아서 사용하는 코드
};
