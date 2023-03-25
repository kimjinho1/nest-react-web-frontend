import styled from "styled-components";

const InputDiv = styled.div`
  padding: 4px 0px;
`;

const StyledInput = styled.input`
  width: 320px;
  height: 30px;
  font-size: 15px;
  border: 1px solid grey;
  border-radius: 5px;
  padding-left: 8px;
  margin-bottom: 12px;

  :hover {
    background-color: #e9f8fc;
  }
  :focus {
    outline: none;
  }
`;

const SignUpInput = ({ props }) => {
  const onChange = (event) => {
    const { name, value } = event.target;
    const nextInputs = {
      ...props.inputs,
      [name]: value,
    };
    props.setInputs(nextInputs);
  };

  return (
    <InputDiv>
      <StyledInput
        type="text"
        onChange={onChange}
        name={props.name}
        placeholder={props.placeholder}
        minLength={props.minLength}
        maxLength={props.maxLength}
        value={props.value}
        required
        autoCapitalize="off"
        autoComplete="off"
      />
    </InputDiv>
  );
};

export default SignUpInput;
