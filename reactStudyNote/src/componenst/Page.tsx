import Hello from 'componenst/Hello';
import { useRef, useState } from 'react';
import { idText } from 'typescript';
import Count from './count';
import CreateUser from './CreateUser';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import MarginTop from './MarginTop';
import UserList2 from './UserList2';

interface usersDataModel {
  id: Number;
  username: string;
  email: string;
}

const Page = () => {
  const [users, setUsers] = useState<usersDataModel[]>([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    }; // user 는 id , username , email 를 가진다.
    setUsers(users.concat(user)); // users.concat => users 의 기존 배열은 수정 x 새로운 배열을 추가한다. 무엇을? => user

    setInputs({
      username: '',
      email: '',
    }); /// 추가후 setInputs 은 초기화
    nextId.current += 1;
  };
  return (
    <div className='page'>
      <div className='pageBox'>
        <Hello name='Sloobie' color='pink' isSpecial='true' />
        <Hello />
        <Count />
        <MarginTop margin={50} />
        <InputSample />
        <MarginTop margin={50} />
        <InputSample2 />
        <MarginTop margin={50} />
        <CreateUser
          username={username}
          email={email}
          onChange={onChange}
          onCreate={onCreate}
        />
        <UserList2 users={users} />
      </div>
    </div>
  );
};

export default Page;

// 1번 Hello 의 Props 의 모든 입력을 해주어 원하는 값을 출력
// 2번 Hello 의 경우 props의 모든 값을 생략하여 default 로 입력해놓은 데이터가 출력

// 컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 true 로 설정한 것으로 간주합니다.
// ex) <Hello name="react" color="red" isSpecial />
