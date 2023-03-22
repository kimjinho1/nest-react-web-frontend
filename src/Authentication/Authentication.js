import styled from "styled-components";

import GoogleAuthLogin from "./components/GoogleAuthLogin";
import GoogleAuthLogout from "./components/GoogleAuthLogout";

const API_ID = process.env.REACT_APP_GOOGLE_OAUTH_API_ID;
const USER_TOKEN = "USER_TOKEN";

const AuthDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Authentication = ({ loginState, setLoginState }) => {
  return (
    // 로그인 되어 있는 상태면 로그아웃, 아니면 로그인 버튼을 보여줌
    <AuthDiv>
      {loginState ? (
        <GoogleAuthLogout
          loginState={loginState}
          USER_TOKEN={USER_TOKEN}
          setLoginState={setLoginState}
        />
      ) : (
        <GoogleAuthLogin
          API_ID={API_ID}
          USER_TOKEN={USER_TOKEN}
          setLoginState={setLoginState}
        />
      )}
    </AuthDiv>
  );
};

export default Authentication;
