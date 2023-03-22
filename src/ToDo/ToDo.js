import { useState, useEffect } from "react";
import styled from "styled-components";

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

const ClockDiv = styled.div`
  font-size: 100px;
`;

const LoginToDoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.h1`
  font-size: 50px;
`;

const ToDoInput = styled.input`
  color: white;
  font-size: 25px;
  width: 350px;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid white;

  ::placeholder {
    color: whitesmoke;
  }
  :focus {
    outline: none;
  }
`;

const ToDoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin-right: 30px;
    font-size: 25px;
  }
`;

const ToDoFinishButton = styled.button`
  font-size: 23px;
  color: red;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  background-color: grey;
`;

const Footer = styled.p`
  position: fixed;
  color: white;
  font-size: 20px;
  bottom: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TODOS_KEY = "TODOS";

const getTime = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const ToDo = ({ loginState }) => {
  const [toDo, setToDo] = useState("");
  const [time, setTime] = useState(getTime());
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);

  const updateTime = () => {
    setTime(getTime());
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const deleteToDo = () => {
    const newToDos = toDos.slice(1);
    setToDos(newToDos);
  };

  useEffect(() => {
    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos) {
      const parsedToDos = JSON.parse(savedToDos);
      setToDos(parsedToDos);
    }

    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }, [toDos]);

  return (
    <div>
      <ToDoDiv>
        <ClockDiv>{time}</ClockDiv>
        {!loginState ? (
          <Greeting>로그인하고 오세요</Greeting>
        ) : (
          <LoginToDoDiv>
            <Greeting>어서오세요!</Greeting>
            {toDos.length === 0 ? (
              <Greeting>할 일이 없으시네요? 그럴리가 없는데?</Greeting>
            ) : (
              <Greeting>할 일이 {toDos.length}개 남았어요</Greeting>
            )}
            <form onSubmit={onSubmit}>
              <ToDoInput
                type="text"
                placeholder="Write a To Do and Press Enter"
                maxLength="30"
                required
                value={toDo}
                onChange={onChange}
              />
            </form>
            <ToDoList>
              {toDos.map((item, index) => (
                <li key={index}>
                  <span>{item}</span>
                  <ToDoFinishButton onClick={deleteToDo}>X</ToDoFinishButton>
                </li>
              ))}
            </ToDoList>
          </LoginToDoDiv>
        )}
      </ToDoDiv>
      <Footer>Create by Jinho Kim © 2023</Footer>
    </div>
  );
};

export default ToDo;
