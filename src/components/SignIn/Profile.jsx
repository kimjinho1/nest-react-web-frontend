import axios from "axios";
import SignOutButton from "./SignOutButton";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Profile = ({ setLoginState }) => {
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    console.log(localStorage.getItem("JWT_TOKEN"));
    await axios
      .get("http://localhost:3000/auth/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
        },
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((error) => {
        setProfile(null);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <ProfileDiv>
      <h1>아이디: {profile ? profile.userId : null}</h1>
      <h1>닉네임: {profile ? profile.userName : null}</h1>
      <SignOutButton setLoginState={setLoginState}></SignOutButton>
    </ProfileDiv>
  );
};

export default Profile;
