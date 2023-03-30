import styled from "styled-components";
import { useState, useEffect } from "react";

const ButtonDiv = styled.div`
  padding: 4px 0px;
`;

const DeactivatedButton = styled.button`
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

const ActivatedButton = styled.button`
  width: 340px;
  height: 40px;
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #2f52e0;
`;

const SignInButton = ({ inputs }) => {
  const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {
    const { id, password } = inputs;
    if (id.length && password.length) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [inputs]);

  return (
    <ButtonDiv>
      {btnActive ? (
        <ActivatedButton>로그인</ActivatedButton>
      ) : (
        <DeactivatedButton>로그인</DeactivatedButton>
      )}
    </ButtonDiv>
  );
};

export default SignInButton;
