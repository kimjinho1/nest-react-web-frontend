import styled from "styled-components";

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

const ToDoForm = ({toDo, setToDo, setToDos}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const onChange = (event) => setToDo(event.target.value);

  return (
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
  )
}

export default ToDoForm;