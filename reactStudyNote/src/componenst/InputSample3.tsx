//  ref 사용 이유
// 사용하고자 하는 DOM을 직접 포커스 해야 할시에 사용된다.

// javascript에서 특정 Dom을 선택하는 역할 ex) getElementById, querySelector
// 특정 DOM에 접근할 때 사용한다.
// 외부 라이브러리 사용할때 유용하다.
// 원하는 위치에 ref={} 의 형태로 작성하면 된다.
// 포커스를 잡으려면 nameInput.current.focus() 형태로 작성하면 된다.

import { useState, useRef } from 'react';

const InputSample3 = () => {
  const [inputs, setInpus] = useState({
    name: '',
    nickname: '',
  });

  const nameRef: any = useRef<HTMLInputElement>(null);

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
    nameRef.current.focus();
  };

  return (
    <div>
      <input
        name='name'
        placeholder='이름'
        onChange={onChange}
        value={name}
        ref={nameRef}
      />
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
export default InputSample3;
