import Hello from 'componenst/Hello';
import { useRef, useState, useMemo, useCallback } from 'react';
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
  active: Boolean;
}

const countActiveUsers = (users: any) => {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user: any) => user.active).length; //active 값이 true 인 사용자의 수를 체크
};

const Page = () => {
  const [users, setUsers] = useState<usersDataModel[]>([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
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

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    }; // user 는 id , username , email 를 가진다.
    setUsers(users.concat(user)); // users.concat => users 의 기존 배열은 수정 x 새로운 배열을 추가한다. 무엇을? => user

    setInputs({
      username: '',
      email: '',
    }); /// 추가후 setInputs 은 초기화
    nextId.current += 1;
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
      // = user.id 가 id 인 것을 제거함
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  // const onRemove = id => {
  //   // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
  //   // = user.id 가 id 인 것을 제거함
  //   setUsers(users.filter(user => user.id !== id));
  // };

  // const onToggle = (id: number) => {
  //   setUsers(
  //     users.map(
  //       (user) => (user.id === id ? { ...user, active: !user.active } : user) // users 를 map 을 돌려서 해당 id 가 같을시에  user.active 는 현재의 !
  //       // : user => 아니면 현재 user 의 상태값을 유지한다는 뜻
  //     )
  //   );
  // };

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map(
          (user) => (user.id === id ? { ...user, active: !user.active } : user) // users 를 map 을 돌려서 해당 id 가 같을시에  user.active 는 현재의 !
          // : user => 아니면 현재 user 의 상태값을 유지한다는 뜻
        )
      );
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);
  //useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고
  // 두번째 파라미터에는 deps 배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면,
  // 우리가 등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용.

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
        <UserList2 users={users} onRemove={onRemove} onToggle={onToggle} />
        <div> 할성사용자 수 : {count}</div>
      </div>
    </div>
  );
};

export default Page;

// 1번 Hello 의 Props 의 모든 입력을 해주어 원하는 값을 출력
// 2번 Hello 의 경우 props의 모든 값을 생략하여 default 로 입력해놓은 데이터가 출력

// 컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 true 로 설정한 것으로 간주합니다.
// ex) <Hello name="react" color="red" isSpecial />

// //질문 ------
// onClick={() => onRemove(user.id)} 이 코드는 잘 동작하는데
// onClick={onRemove(user.id)} 이 코드는 왜 동작하지 않는건가요?

// 답변 ---
// onClick={someFunction()} 을 해버리면 해당 콤포넌트가 렌더링이 되는것과 동시에 someFunction함수를 실행시켜버립니다.

// 그래서 보통 onClick={someFunction} 으로 지정해서 () 를 제외하는 방법으로 함수가 즉시실행 되지 않게 하고, 클릭했을때 실행이 되도록 해주죠

// 그런데 예제와 같이 onRemove의 경우, 해당 함수가 실행될 떄 아이디 값도 받아와야 하잖아요.
// 이런 경우에 onClick = { onRemove(user.id) } 를 해버리면, 해당 콤포넌트가 렌더링됨가 동시에 이 함수 실행이 되어버려서 아마 아무것도 렌더링이 되어버리지 않을거에요. 콘솔에서도 오류메시지가 발생할거구요.

// 따라서 이런 문제들을 해결하기 위해 onClick에 콜백 함수를 넣어주고, 해당 함수가 실행될 때 user.id를 건네주어 실행시키는 방법으로 처리를 하는거에요
