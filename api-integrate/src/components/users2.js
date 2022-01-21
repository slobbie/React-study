import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        loding: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loding: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loding: false,
        data: null,
        error: true,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const Users2 = () => {
  const [state, dispetch] = useReducer(reducer, {
    loding: false,
    data: null,
    error: null,
  }); // state  앞으로 컴포넌트에서 사용 할 수 있는 상태
  // dispetch  action 을 일으킬 함수

  const fetchUsers = async () => {
    dispetch({ type: 'LOADING' });
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      dispetch({ type: 'SUCCES', data: response.data });
    } catch (e) {
      dispetch({ type: 'ERROR' });
    }
  };

  useEffect(() => {
    //useEffect 를 사용하여 컴포넌트가 렌더링되는 시점에 요청
    fetchUsers(); // cleanup 초기화
  }, []); // [deps] 가 비면  함수가 처음 렌더링 될때만 호출 그후 cleaup 함수 호출

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
      {/* useEffect를 이용하여 재랜더링 하여 api 를 통해 유저 정보를 다시 받아오게 하는 이벤트 */}
    </>
  );
};

export default Users2;
