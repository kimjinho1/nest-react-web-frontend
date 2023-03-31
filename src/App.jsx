import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";
import MusicDisplay from "./pages/Music";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  const [loginState, setLoginState] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("JWT_TOKEN")) {
      console.log("Login O");
      setLoginState(true);
    } else {
      console.log("Login X");
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home loginState={loginState} />} />
        <Route path="/todo" element={<ToDo loginState={loginState} />} />
        <Route
          path="/music"
          element={<MusicDisplay loginState={loginState} />}
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
