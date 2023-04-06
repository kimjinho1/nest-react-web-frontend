import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BoardListDiv = styled.div`
  padding: 15px;
`;

const BoardCard = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  &:hover {
    transform: scale(1.04);
  }
`;

const BoardThumbnail = styled.img`
  width: 150px;
  height: 100px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const BoardContentWrapper = styled.div`
  padding: 20px;
`;

const BoardTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const BoardMeta = styled.div`
  margin-top: 5px;
  font-size: 14px;
`;

const BoardNickname = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const BoardDate = styled.div`
  color: #777;
`;

const BoardList = ({ loginState }) => {
  const [boards, setBoards] = useState([]);

  const getBoards = async () => {
    await axios
      .get("http://localhost:3000/boards", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      })
      .then((res) => {
        setBoards(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setBoards([]);
      });
  };

  useEffect(() => {
    if (loginState === true) {
      getBoards();
    }
  }, []);

  const movePage = useNavigate();
  const getDate = (timestamp) => {
    const time = new Date(+timestamp)
    time.setHours(time.getHours() + 9);
    return time.toISOString().replace('T', ' ').substring(0, 19);
  }

  return (
    <BoardListDiv>
      {boards.map((board) => (
        <BoardCard key={board.boardId}>
          <BoardThumbnail src={board.thumbnail} />
          <BoardContentWrapper>
            <BoardTitle
              onClick={() => {
                movePage(`/boards/${board.boardId}`);
              }}
            >
              {board.title}
            </BoardTitle>
            <BoardMeta>
              <BoardNickname>{board.userName}</BoardNickname>
              <BoardDate>{getDate(board.date)}</BoardDate>
            </BoardMeta>
          </BoardContentWrapper>
        </BoardCard>
      ))}
    </BoardListDiv>
  );
};

export default BoardList;
