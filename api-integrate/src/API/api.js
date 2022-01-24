import axios from 'axios';

const getUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data; // users 데이터를 받는 코드
};

export const getUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data; // user id 를 url 로 받아서 사용하는 코드
};
