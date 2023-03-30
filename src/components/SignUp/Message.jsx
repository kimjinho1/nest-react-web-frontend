import styled from "styled-components";

const MessageDiv = styled.div`
  margin: 4px 0px;
`;

const ErrorMessageDiv = styled.div`
  padding: 10px 10px 10px 50px;
  border: 1px solid;
  background-repeat: no-repeat;
  background-position: 10px;
  color: #d8000c;
  background-color: #ffbaba;
  background-image: url("https://i.imgur.com/GnyDvKN.png");
`;

const SuccessMessageDiv = styled.div`
  padding: 10px 10px 10px 50px;
  border: 1px solid;
  background-repeat: no-repeat;
  background-position: 10px;
  color: #4f8a10;
  background-color: #dff2bf;
  background-image: url("https://i.imgur.com/Q9BGTuy.png");
`;

const Message = ({ signUpFailed }) => {
  return (
    <MessageDiv>
      {signUpFailed === null ? null : signUpFailed === true ? (
        <ErrorMessageDiv>중복된 아이디입니다</ErrorMessageDiv>
      ) : (
        <SuccessMessageDiv>회원가입 성공</SuccessMessageDiv>
      )}
    </MessageDiv>
  );
};

export default Message;
