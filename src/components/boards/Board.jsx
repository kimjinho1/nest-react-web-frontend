import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
    <div>
      <h1>... 코드좀 짜주라</h1>
    </div>
  );
};

export default Board;
