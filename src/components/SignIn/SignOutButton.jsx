import styled from "styled-components";

const SignOutForm = styled.form`
  padding: 4px 0px;
`;

const Button = styled.button`
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

const SignOutButton = ({ setLoginState }) => {
  const signOut = () => {
    alert("Sign Out");
    setLoginState(false);
    localStorage.removeItem("JWT_TOKEN");
  };
  return (
    <SignOutForm onSubmit={signOut}>
      <Button>로그아웃</Button>
    </SignOutForm>
  );
};

export default SignOutButton;
