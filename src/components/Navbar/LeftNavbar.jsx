const LeftNavbar = ({NavComponent}) => {
  return (
    <div>
    <NavComponent to="/">Home</NavComponent>
    <NavComponent to="/todo">ToDo</NavComponent>
    <NavComponent to="/music">Music</NavComponent>
    <NavComponent to="/about">About</NavComponent>
    </div>
  );
};

export default LeftNavbar;