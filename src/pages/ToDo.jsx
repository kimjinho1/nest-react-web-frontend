import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";

import Clock from "../components/ToDo/Clock";
import Greeting from "../components/ToDo/Greeting";
import ToDoForm from "../components/ToDo/ToDoForm";
import ToDoList from "../components/ToDo/ToDoList";
import Footer from "../components/ToDo/Footer";

const ToDoDiv = styled.div`
  background-image: url(todo_background.png);
  background-size: cover;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TODOS_KEY = "TODOS";

const ToDo = ({ loginState }) => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const getTodos = async () => {
    await axios
      .get("http://localhost:3000/todos", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setToDos(res.data);
      })
      .catch((error) => {
        setToDos([]);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <ToDoDiv>
      <Clock />
      <Greeting loginState={loginState} toDos={toDos} />
      {loginState ? (
        <ToDoForm toDo={toDo} setToDo={setToDo} setToDos={setToDos} />
      ) : null}
      {loginState ? <ToDoList toDos={toDos} setToDos={setToDos} /> : null}
      <Footer />
    </ToDoDiv>
  );
};

export default ToDo;
