import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

const BoardListUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    padding-top: 8px;
    font-size: 25px;
  }
`;

const BoardList = ({ loginState }) => {
  let [boards, setBoards] = useState([]);

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

  return (
    <BoardListUl>
      {boards.map((board, index) => (
        <li key={index}>
          <span>{board.title}</span>
          <span> | {board.userName}</span>
          <span> | {board.content}</span>
        </li>
      ))}
    </BoardListUl>
  );
};

export default BoardList;
