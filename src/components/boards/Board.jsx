import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const BoardDiv = styled.div`
  max-width: 600px;
  padding-left: 20px;
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

  return (
    <BoardDiv>
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
