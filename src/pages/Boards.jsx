import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoardList from "../components/boards/BoardList";

const BoardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GoCreateButton = styled.div`
  margin-top: 15px;
  display: inline-block;
  font-size: 20px;
  color: #fff;
  background-color: #5f8ebe;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #025ab2;
  }
`;

const Boards = ({ loginState }) => {
  const movePage = useNavigate();

  return (
    <div>
      {!loginState ? (
        <h1>로그인하고 오세요</h1>
      ) : (
        <BoardsDiv>
          <GoCreateButton
            onClick={() => {
              movePage(`/boards-post`);
            }}
          >
            글 작성하기
          </GoCreateButton>
          <BoardList loginState={loginState}></BoardList>
        </BoardsDiv>
      )}
    </div>
  );
};

export default Boards;
