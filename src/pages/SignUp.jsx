import styled from "styled-components";
import { useState, useEffect } from "react";

import SignUpLabel from "../components/SignUp/SignUpLabel";
import SignUpInput from "../components/SignUp/SignUpInput";
import SignUpButton from "../components/SignUp/SignUpButton";

const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUpForm = styled.form`
  padding: 10px;
`;

const SignUp = ({ loginState }) => {
  const [inputs, setInputs] = useState({ id: "", password: "", nickname: "" });
  const { id, password, nickname } = inputs;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.id.value);
    console.log(event.target.password.value);
    console.log(event.target.nickname.value);
    setInputs({
      id: "",
      password: "",
      nickname: "",
    });
  };

  return (
    <SignUpDiv>
      <SignUpForm onSubmit={onSubmit}>
        <SignUpLabel text="아이디"></SignUpLabel>
        <SignUpInput
          props={{
            name: "id",
            placeholder: "4~20자리 / 영문, 숫자, 특수문자 조합",
            minLength: "4",
            maxLength: "20",
            inputs: inputs,
            setInputs: setInputs,
            value: id,
          }}
        />
        <SignUpLabel text="비밀번호"></SignUpLabel>
        <SignUpInput
          props={{
            name: "password",
            placeholder: "8~16자리 / 영문, 숫자, 특수문자 조합",
            minLength: "8",
            maxLength: "16",
            inputs: inputs,
            setInputs: setInputs,
            value: password,
          }}
        />
        <SignUpLabel text="이름"></SignUpLabel>
        <SignUpInput
          props={{
            name: "nickname",
            placeholder: "이름 입력",
            minLength: "1",
            maxLength: "20",
            inputs: inputs,
            setInputs: setInputs,
            value: nickname,
          }}
        />
        <SignUpButton type="submit" inputs={inputs} />
      </SignUpForm>
    </SignUpDiv>
  );
};

export default SignUp;
