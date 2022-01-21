import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState(null); // 유저 정보 상태 관리  => 초기에는 유저 데이터가 없기때문에 null
  const [loding, setLoding] = useState(false); // 정보가 들어오기전까지 보여줄 로딩
  const [error, setError] = useState(null); // 에러 => 에러 상황이 아니기에 null

  useEffect(() => {
    //useEffect 를 사용하여 컴포넌트가 렌더링되는 시점에 요청
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할시 error 와 users 를 초기화
        setError(null);
        setUsers(null);
        // loding 상태를 true
        setLoding(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        ); // axios.get 을 사용해 api 정보를 받는다 정보 조회
        setUsers(response.data); // 받아온 api 정보를 setUsers안에 (response.data)  담아 준다
      } catch (e) {
        setError(e); // 수신 실패시 보내는 경고
      }
      setLoding(false); // 모든 동작이 끝난후에는 loding false
    };
    fetchUsers(); // cleanup 초기화
  }, []); // [deps] 가 비면  함수가 처음 렌더링 될때만 호출 그후 cleaup 함수 호출

  if (loding) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
};

export default Users;
