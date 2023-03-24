import { NavLink } from "react-router-dom";
import styled from "styled-components";

const RightNavBarDiv = styled.div`
  padding: 0px 3px;
`;

const RightNavLink = styled(NavLink)`
  color: white;
  padding: 0px 6px;
  font-size: 15px;
  &:link {
    text-decoration: none;
  }
  &:hover {
    color: #5dc4a1;
  }
  &.active {
    color: #2f8d8d;
  }
`;

const RightNavbar = ({ NavComponent }) => {
  return (
    <RightNavBarDiv>
      <RightNavLink to="/signin">Sign in</RightNavLink>
      <RightNavLink to="/signup">Sign up</RightNavLink>
    </RightNavBarDiv>
  );
};

export default RightNavbar;
