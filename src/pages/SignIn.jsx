import styled from "styled-components";
import { useState, useEffect } from "react";
import SignInLabel from "../components/SignIn/SignInLabel";
import SignInInput from "../components/SignIn/SignInInput";
import SignInButton from "../components/SignIn/SignInButton";
import Message from "../components/SignIn/Message";
import axios from "axios";
import SignOutButton from "../components/SignIn/SignOutButton";
import Profile from "../components/SignIn/Profile";

const SignInDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignInForm = styled.form`
  padding: 10px;
`;

const SignIn = ({ loginState, setLoginState }) => {
  const [inputs, setInputs] = useState({ id: "", password: "" });
  const { id, password } = inputs;
  const [signInFailed, setSignInFailed] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    const password = event.target.password.value;

    const signIn = async () => {
      await axios
        .post(
          "http://localhost:3000/auth/login",
          {
            userId: `${id}`,
            userPassword: `${password}`,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          alert("로그인 성공!");
          setSignInFailed(false);
          setLoginState(true);
          localStorage.setItem("JWT_TOKEN", `${res.data.access_token}`);
        })
        .catch((error) => {
          alert("로그인 실패!");
          setSignInFailed(true);
          setLoginState(false);
        });
    };
    signIn();

    setInputs({
      id: "",
      password: "",
      nickname: "",
    });
  };

  return (
    <SignInDiv>
      {loginState === true ? (
        <Profile setLoginState={setLoginState}></Profile>
      ) : (
        <SignInForm onSubmit={onSubmit}>
          <SignInLabel text="아이디"></SignInLabel>
          <SignInInput
            props={{
              inputs: inputs,
              setInputs: setInputs,
              name: "id",
              placeholder: "영문, 숫자 조합",
              value: id,
            }}
          ></SignInInput>
          <SignInLabel text="비밀번호"></SignInLabel>
          <SignInInput
            props={{
              inputs: inputs,
              setInputs: setInputs,
              name: "password",
              placeholder: "영문, 숫자 조합",
              value: password,
            }}
          ></SignInInput>
          <SignInButton type="submit" inputs={inputs} />
        </SignInForm>
      )}
      <Message signInFailed={signInFailed}></Message>
    </SignInDiv>
  );
};

export default SignIn;
