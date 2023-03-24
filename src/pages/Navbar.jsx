import styled from "styled-components";

import LeftNavbar from "../components/Navbar/LeftNavbar";
import RightNavbar from "../components/Navbar/RightNavbar";

const TopNavBarDiv = styled.div`
  width: 100%;
  background: black;
  display: flex;
  padding: 10px 0px;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <TopNavBarDiv>
      <LeftNavbar />
      <RightNavbar />
    </TopNavBarDiv>
  );
};

export default Navbar;
