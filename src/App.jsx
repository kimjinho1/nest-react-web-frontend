import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Boards from "./pages/Boards";
import Board from "./components/boards/Board";
import BoardPost from "./components/boards/BoardPost";

function App() {
  const [loginState, setLoginState] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("JWT_TOKEN")) {
      setLoginState(true);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home loginState={loginState} />} />
        <Route path="/todo" element={<ToDo loginState={loginState} />} />
        <Route path="/boards" element={<Boards loginState={loginState} />} />
        <Route
          path="/boards-post"
          element={<BoardPost loginState={loginState} />}
        />
        <Route
          path="/boards/:boardId"
          element={<Board loginState={loginState} />}
        />
        <Route
          path="/signin"
          element={
            <SignIn loginState={loginState} setLoginState={setLoginState} />
          }
        />
        <Route path="/signup" element={<SignUp loginState={loginState} />} />
        {/* <Route
          path="/auth"
          element={
            <Authentication
              loginState={loginState}
              setLoginState={setLoginState}
            />
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
