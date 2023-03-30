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

const Message = ({ signInFailed }) => {
  return (
    <MessageDiv>
      {signInFailed === null ? null : signInFailed === true ? (
        <ErrorMessageDiv>잘못된 아이디, 비밀번호입니다</ErrorMessageDiv>
      ) : null}
    </MessageDiv>
  );
};

export default Message;
