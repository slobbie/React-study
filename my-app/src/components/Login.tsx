import React from "react";
import styled from "styled-components";


const Container = styled.div`
    position: absolute;
    background-color: #fff;
    top: 50%;
    left: 50%;
    text-align: center;
    margin-left: -266px;
    margin-top: -190px;
    width: 532px;
    h2 {
        font-size: 35px;
        font-weight: bold;
    }
`;
const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 99%;
  height: 40px;
  margin: 0 0 10px 0;
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #707070 ;
  opacity: 0.3;

 


 
`;

const InputBox = styled.div`
   margin-top: 108px;
   h3 {
       margin: 0;
       margin: 10px 0;
       text-align: left;
   }
`;

const ButtonBox = styled.div`
   position: relative;
   padding: 0;
   width: 100%;
   margin-top: 70px;
`;

const Button = styled.button`
   width: 100%;
   height: 70px;
   margin-bottom: 10px;
   background-color: #fff;
   font-weight: bold;
   font-size: 20px;
   border: 1px #f0f0f0;
   border-radius: 10px;
   box-shadow: 3px 9px 13px rgb(163 177 198 / 43%), -8px -9px 5px rgb(255 255 255 / 19%);

`;

const Ul = styled.ul`
  list-style: none;
  display: flex;

  li:nth-child(3) {
      border: none;
  }
  
`;
const Li = styled.li`
  width: 170px;
  height: 22px;
  border-right: 1px solid;
  font-weight: 400;
  font-size: 15px;
  
`;




const Login = () => {
    return(
        <div className="LoginPage">
            <Container>
                <h2>FromBy</h2>
                <InputBox>
                    <h3>아이디</h3>
                    <Input id="id" name="id" placeholder="예) fromby@gamil.com" />
                    <h3>비밀번호</h3>
                    <Input id="password" name="password" placeholder="예) 비밀번호를 입력해주세요." />
                </InputBox>
                <ButtonBox>
                    <Button>로그인</Button>
                    <Button>네이버 로그인</Button>
                    <Button>카카오 로그인</Button>
                    <Button>구글 로그인</Button>
                </ButtonBox>
                <Ul>
                    <Li><a>회원 가입</a></Li>
                    <Li><a>이메일 찾기</a></Li>
                    <Li><a>비밀번호 찾기</a></Li>
                </Ul>
               
            </Container>
            
        </div>
    );
};

export default Login;