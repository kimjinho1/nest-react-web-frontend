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
  const deleteToDo = () => {
    const newToDos = toDos.slice(1);
    setToDos(newToDos);
  };

  return (
    <ToDoListUl>
      {toDos.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          <ToDoFinishButton onClick={deleteToDo}>X</ToDoFinishButton>
        </li>
      ))}
    </ToDoListUl>
  )
}

export default ToDoList;