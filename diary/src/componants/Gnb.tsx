import styled from "styled-components";





let Nav = styled.div`
   background-color: #fff;
   height: 70px;
    box-shadow: 3px 5px 13px rgb(163 177 198 / 43%), -8px -9px 5px rgb(255 255 255 / 19%);
    z-index: 1;
`
let Logo = styled.h1`
   margin: 0;
   padding: 20px 50px;
   display: inline-block;
`

const Gnb = () => {
    
    return (
         <Nav>
           <Logo>Diary</Logo>
         </Nav>
    );
};

export default Gnb;