import styled from "styled-components";
import BoardList from "../components/boards/BoardList";
import CreateBoard from "./BoardPost";

const BoardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Boards = ({ loginState }) => {
  return (
    <div>
      {!loginState ? (
        <h1>로그인하고 오세요</h1>
      ) : (
        <BoardsDiv>
          <button>게시글 작성하기</button>
          <BoardList loginState={loginState}></BoardList>
        </BoardsDiv>
      )}
    </div>
  );
};

export default Boards;
