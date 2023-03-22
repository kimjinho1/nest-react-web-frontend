import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
      <div>
        <NavComponent to="/">Home</NavComponent>
        <NavComponent to="/todo">ToDo</NavComponent>
        <NavComponent to="/music">Music</NavComponent>
        <NavComponent to="/about">About</NavComponent>
      </div>
      <div>
        <NavComponent to="/auth">Auth</NavComponent>
      </div>
    </TopNavBar>
  );
};

export default Navbar;
