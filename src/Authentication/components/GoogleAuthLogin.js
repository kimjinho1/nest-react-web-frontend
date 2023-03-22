import { GoogleLogin } from "@react-oauth/google";

const GoogleAuthLogin = ({ API_ID, USER_TOKEN, setLoginState }) => {
  return (
    <GoogleLogin
      clientId={`${API_ID}`}
      onSuccess={(res) => {
        alert("로그인 성공");
        localStorage.setItem(USER_TOKEN, res.credential);
        // console.log(res);
        setLoginState(true);
      }}
      onFailure={(res) => alert("로그인 실패")}
    />
  );
};

export default GoogleAuthLogin;
