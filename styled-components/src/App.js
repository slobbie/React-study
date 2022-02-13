import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  // styled(Box) box 컴포넌트의 속성을 계승 시키는 개념
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ minlength: 10 })`
  // 컴포넌트에 속성값 주어줄수도 있다.
  background-color: tomato;
`;

const rotation = keyframes`
  0% {
   transform:  rotate(0deg);
   border-radius: 0px;
  }
  50% {
    transform:  rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform:  rotate(0deg);
    border-radius: 0px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const BoxTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotation} 2s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

const BoxThree = styled.div`
  display: flex;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    // <Father as='header'>
    //   {/* <Box bgColor='teal'></Box>
    //   <Circle bgColor='tomato' /> */}
    //   <Btn>log in</Btn>
    //   <Btn as='a' href='/'>
    //     log in
    //   </Btn>
    //   {/* as => 기능은 유지하면서 html 태그를 원하는 태그로 바꿔준다 */}
    //   <Input />
    // </Father>

    <Wrapper>
      <BoxTwo>
        <Emoji>😇</Emoji>
      </BoxTwo>
      <Emoji>🍎</Emoji>

      <BoxThree>
        <Title>Hi darkTheme</Title>
      </BoxThree>
    </Wrapper>
  );
}

export default App;
