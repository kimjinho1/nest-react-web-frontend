import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LeftNavBarDiv = styled.div`
  padding: 0px 3px;
`;

const LeftNavLink = styled(NavLink)`
  color: white;
  padding: 0px 6px;
  font-size: 16px;
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

const LeftNavbar = ({ NavComponent }) => {
  return (
    <LeftNavBarDiv>
      <LeftNavLink to="/">Home</LeftNavLink>
      <LeftNavLink to="/todo">ToDo</LeftNavLink>
      <LeftNavLink to="/music">Music</LeftNavLink>
    </LeftNavBarDiv>
  );
};

export default LeftNavbar;
