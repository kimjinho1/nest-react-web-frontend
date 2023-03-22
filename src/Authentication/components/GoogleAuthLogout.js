import { googleLogout } from "@react-oauth/google";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  font-size: 20px;
  border: 2px solid grey;
  border-radius: 3px;
  cursor: pointer;
  max-width: 400px;
  min-width: 200px;

  &:hover {
    background-color: palevioletred;
  }
`;

const TODOS_KEY = "TODOS";

const GoogleAuthLogout = ({ loginState, USER_TOKEN, setLoginState }) => {
  const handleLogout = async () => {
    try {
      if (loginState === true) {
        googleLogout();
        localStorage.removeItem(USER_TOKEN);
        localStorage.removeItem(TODOS_KEY);
        setLoginState(false);
        alert("로그아웃 성공");
      }
    } catch (error) {
      console.error("로그아웃 실패:", error);
    }
  };
  return <Button onClick={handleLogout}>LogOut</Button>;
};

export default GoogleAuthLogout;
