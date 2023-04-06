import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BoardDiv = styled.div`
  max-width: 600px;
  padding: 0px 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 0;
`;

const Meta = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 0;
`;

const Thumbnail = styled.img`
  display: block;
  max-width: 100%;
  margin-bottom: 10px;
`;

const Content = styled.div`
  font-size: 18px;
`;

const GoUpdateButton = styled.div`
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

const Board = ({ loginState }) => {
  const { boardId } = useParams();
  let [board, setBoard] = useState({});

  const getBoard = async () => {
    await axios
      .get(`http://localhost:3000/boards/${boardId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      })
      .then((res) => {
        setBoard(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        setBoard([]);
        console.log(error);
      });
  };

  useEffect(() => {
    if (loginState === true) {
      getBoard();
    }
  }, []);

  const getDate = (timestamp) => {
    const time = new Date(+timestamp)
    time.setHours(time.getHours() + 9);
    return time.toISOString().replace('T', ' ').substring(0, 19);
  }

  return (
    <BoardDiv>
      <GoUpdateButton>글 수정하기</GoUpdateButton>
      <Title>{board.title}</Title>
      <Meta>
        {board.userName} | {board.date}
      </Meta>
      <Thumbnail src={board.thumbnail} alt={board.title} />
      <Content>{board.content}</Content>
    </BoardDiv>
  );
};

export default Board;
