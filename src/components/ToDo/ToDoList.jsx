import axios from "axios";
import styled from "styled-components";

const ToDoListUl = styled.ul`
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
          console.log(error);
        });
    };
    deleteTodo();

    toDos.splice(index, 1);
    const newToDos = [...toDos];
    setToDos(newToDos);
  };

  return (
    <ToDoListUl>
      {toDos.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          <ToDoFinishButton onClick={() => onClick(index)}>X</ToDoFinishButton>
        </li>
      ))}
    </ToDoListUl>
  );
};

export default ToDoList;
