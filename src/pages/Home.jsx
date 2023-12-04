import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import styled from "styled-components";
import { Navigate } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <StDiv>
        <StBtn onClick={() => {
          <Navigate to = '/login'/>
        }}>로그인</StBtn>
        <StBtn onClick={() => {
          <Navigate to = '/signup'/>
        }}>회원가입</StBtn>
      </StDiv>
      <Header />
      <AddForm />
      <LetterList />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StDiv = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const StBtn = styled.button`
  border-style: none;
  background-color: #525252;
  color: white;
  font-weight: 500;
  border-radius: 10px;
  margin: 10px 10px 0px 5px;
  width: 70px;
  height: 30px;
`