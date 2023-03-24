import styled from "styled-components";

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
  const idInputCheck = (obj) => {
    // const regExp = "{}[]/?.,;:|)*~`!^-_+┼<>@#$%&'\"\\(=]";
    const regExp = "{}[]/?.,;:|)*~`!^-+┼<>@#$%&'\"\\(=]";
    if (regExp.test(obj.value)) {
      alert("특수문자는 입력하실수 없습니다.");
      obj.value = obj.value.substring(0, obj.value.length - 1);
    }
  };

  return (
    <SignUpDiv>
      <SignUpForm>
        <SignUpLabel text="아이디"></SignUpLabel>
        <SignUpInput
          placeholder="4~20자리 / 영문, 숫자, 특수문자 '_' 사용가능"
          minLength="4"
          maxLength="20"
        />
        <SignUpLabel text="비밀번호"></SignUpLabel>
        <SignUpInput
          placeholder="8~16자리 / 영문 대소문자, 숫자, 특수문자 조합"
          minLength="8"
          maxLength="16"
        />
        <SignUpLabel text="이름"></SignUpLabel>
        <SignUpInput placeholder="이름 입력" minLength="0" maxLength="20" />
        <SignUpButton />
      </SignUpForm>
    </SignUpDiv>
  );
};

export default SignUp;
