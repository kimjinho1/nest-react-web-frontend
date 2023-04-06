import axios from "axios";
import styled from "styled-components";

const ToDoListUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    padding-top: 8px;
    font-size: 22px;
  }
`;

const ToDoFinishButton = styled.button`
  font-size: 20px;
  color: red;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: grey;
`;

const ToDoList = ({ toDos, setToDos }) => {
  const onClick = (index) => {
    const deleteTodo = async () => {
      await axios
        .delete("http://localhost:3000/todos", {
          data: { todo: toDos[index] },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
          },
        })
        .catch((error) => {
          alert(error);
        });
    };
    deleteTodo();

    toDos.splice(index, 1);
    const newToDos = [...toDos];
    setToDos(newToDos);
  };

  return (
    <ToDoListUl>
      {toDos.length !== 0 ? toDos.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          <ToDoFinishButton onClick={() => onClick(index)}>X</ToDoFinishButton>
        </li>
      )) : 
        <h1>할 일이 없어요</h1>
      }
    </ToDoListUl>
  );
};

export default ToDoList;
