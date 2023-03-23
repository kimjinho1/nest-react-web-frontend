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

  useEffect(() => {
    const savedToDos = window.localStorage.getItem(TODOS_KEY);
    if (savedToDos) {
      const parsedToDos = JSON.parse(savedToDos);
      setToDos(parsedToDos);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }, [toDos]);

  return (
    <ToDoDiv>
      <Clock />
      <Greeting loginState={loginState} toDos={toDos}/>
      <ToDoForm toDo={toDo} setToDo={setToDo} setToDos={setToDos}/>
      <ToDoList toDos={toDos} setToDos={setToDos}/>
      <Footer />
    </ToDoDiv>
  );
};

export default ToDo;
