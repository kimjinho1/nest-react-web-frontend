import { NavLink } from "react-router-dom";
import styled from "styled-components";

import LeftNavbar from "../components/Navbar/LeftNavbar";
import RightNavbar from "../components/Navbar/RightNavbar";

const TopNavBar = styled.div`
  width: 100%;
  background: black;
  display: flex;
  padding: 15px 0px;
  justify-content: space-between;
`;

const NavComponent = styled(NavLink)`
  color: white;
  padding: 0px 15px;
  font-size: 20px;
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: aquamarine;
  }
  &.active {
    color: aqua;
  }
`;

const Navbar = () => {
  return (
    <TopNavBar>
      <LeftNavbar NavComponent={NavComponent}/>
      <RightNavbar NavComponent={NavComponent}/>
    </TopNavBar>
  );
};

export default Navbar;
