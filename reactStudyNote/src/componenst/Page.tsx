import Hello from 'componenst/Hello';
import Count from './count';
import InputSample from './InputSample';
import MarginTop from './MarginTop';

export default function Page() {
  return (
    <div className='page'>
      <div className='pageBox'>
        <Hello name='Sloobie' color='pink' isSpecial='true' />
        <Hello />
        <Count />
        <MarginTop margin={50} />
        <InputSample />
      </div>
    </div>
  );
}

// 1번 Hello 의 Props 의 모든 입력을 해주어 원하는 값을 출력
// 2번 Hello 의 경우 props의 모든 값을 생략하여 default 로 입력해놓은 데이터가 출력

// 컴포넌트의 props 값을 설정하게 될 때 만약 props 이름만 작성하고 값 설정을 생략한다면, 이를 true 로 설정한 것으로 간주합니다.
// ex) <Hello name="react" color="red" isSpecial />
