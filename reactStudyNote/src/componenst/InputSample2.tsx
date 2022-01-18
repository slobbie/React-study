//  여러개의 input 상태관리

import { useState } from 'react';

const InputSample2 = () => {
  const [inputs, setInpus] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs; // 할당을 통해 값 추출

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target; // e.target = input 의 DOM => name 과 value 를 추출
    setInpus({
      ...inputs, // 나머지매개변수 => 기존 input 객체를 복사 (const { name, nickname } = inputs;)
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInpus({
      name: '',
      nickname: '',
    });
  };

  return (
    <div>
      <input name='name' placeholder='이름' onChange={onChange} value={name} />
      <input
        name='nickname'
        placeholder='닉네임'
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
};
export default InputSample2;
