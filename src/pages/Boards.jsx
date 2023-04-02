import styled from "styled-components";

const BoardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Boards = ({ loginState }) => {
  return (
    <BoardsDiv>
      {!loginState ? (
        <h1>로그인하고 오세요</h1>
      ) : (
        <h1>게시판111111111111111</h1>
      )}
    </BoardsDiv>
  );
};

export default Boards;
