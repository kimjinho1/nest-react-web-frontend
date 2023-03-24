import styled from "styled-components";

const ButtonDiv = styled.div`
  padding: 4px 0px;
`;

const StyledButton = styled.button`
  width: 340px;
  height: 40px;
  font-size: 16px;
  color: #b6bec0;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #e4e6ee;
`;

const SignUpButton = () => {
  return (
    <ButtonDiv>
      <StyledButton>회원가입 완료</StyledButton>
    </ButtonDiv>
  );
};

export default SignUpButton;
