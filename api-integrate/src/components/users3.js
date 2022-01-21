import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import User from './user';

const getUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
};

const Users3 = () => {
  const [userId, setUserId] = useState(null); // userid 상태관리
  const [state, refetch] = useAsync(getUsers, [], true); // callback 함수 getUsers , [] 최초 처음 랜더링만

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: 'pointer' }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {/* useEffect를 이용하여 재랜더링 하여 api 를 통해 유저 정보를 다시 받아오게 하는 이벤트 */}
      {userId && <User id={userId} />}
      {/* 컴포넌트가 랜더링 되면 user 컴포넌트에 userid props 를 건네준다. */}
    </>
  );
};

export default Users3;
