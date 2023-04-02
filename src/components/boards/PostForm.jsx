import styled from "styled-components";

const BoardsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreateBoard = () => {
  return (
    <div>
      <h1>게시글 작성 페이지</h1>
      <form>
        <input placeholder="제목"></input>
        <input placeholder="제목"></input>
      </form>
    </div>
  );
};

export default CreateBoard;
