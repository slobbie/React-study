//API 를 요청 할 때 파라미터가 필요한 경우

import React, { useEffect } from 'react';
import axios from 'axios';
import useAsync from './useAsync';

//id 값을 props 로 받아와서 https://jsonplaceholder.typicode.com/users/1 이런 식으로 맨 뒤에 id 를 넣어서 API 를 요청

const getUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}` // API URL 끝에 ID 정보를 받아준다.
  );
  return response.data;
};

const User = ({ id }) => {
  const [state] = useAsync(() => getUser(id), [id]); // id 를  파라미터로 받고 , [id]가 호출 될때마다 재 랜더링
  const { loading, data: user, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email</b> {user.emeil}
      </p>
    </div>
  );
};
export default User;
