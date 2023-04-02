import { GoogleLogin } from "@react-oauth/google";

const GoogleAuthLogin = ({ API_ID, USER_TOKEN, setLoginState }) => {
  return (
    <GoogleLogin
      clientId={`${API_ID}`}
      onSuccess={(res) => {
        alert("로그인 성공");
        window.localStorage.setItem(USER_TOKEN, res.credential);
        setLoginState(true);
      }}
      onFailure={(res) => alert("로그인 실패")}
    />
  );
};

export default GoogleAuthLogin;
