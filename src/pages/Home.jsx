import styled from "styled-components";

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = ({ loginState }) => {
  const f = async () => {
    const res = await fetch("http://localhost:3000", {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    const text = await res.text()
    console.log(text);
  };
  f();

  return (
    <HomeDiv>
      {!loginState ? (
        <h1>로그인 안한 상태입니다</h1>
      ) : (
        <h1>로그인한 상태입니다</h1>
      )}
      <h1>React 생각보다 재미있다</h1>
      <img src="logo192.png" alt="logo" />
    </HomeDiv>
  );
};

export default Home;
