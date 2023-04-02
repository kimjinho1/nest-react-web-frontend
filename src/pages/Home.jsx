import { useEffect } from "react";
import styled from "styled-components";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = ({ loginState }) => {
  return (
    <HomeDiv>
      {!loginState ? (
        <h1>로그인 안한 상태입니다</h1>
      ) : (
        <h1>로그인한 상태입니다</h1>
      )}
      <h1>트센 학습용 웹사이트</h1>
      <img src="logo192.png" alt="logo" />
    </HomeDiv>
  );
};

export default Home;
