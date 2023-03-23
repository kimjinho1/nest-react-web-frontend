import styled from "styled-components";

const GreetingDiv = styled.div`
  h1 {
    font-size: 50px;
  }
`;

const Greeting = ({loginState, toDos}) => {
    return (
        !loginState === false ? (
          <GreetingDiv><h1>로그인하고 오세요</h1></GreetingDiv>
        ) : (
          <GreetingDiv>
            <h1>어서오세요!</h1>
            {toDos.length === 0 ? (
                <h1>할 일이 없으시네요? 그럴리가 없는데?</h1>
            ) : (
                <h1>할 일이 {toDos.length}개 남았어요</h1>
            )}
          </GreetingDiv>
        )
    );
}

export default Greeting;