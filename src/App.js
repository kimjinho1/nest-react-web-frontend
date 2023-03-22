import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import MusicDisplay from "./Music/Music";
import About from "./About/About";
import ToDo from "./ToDo/ToDo";
import Authentication from "./Authentication/Authentication";

const USER_TOKEN = "USER_TOKEN";

function App() {
  const [loginState, setLoginState] = useState(false);
  // 로그인 되어 있는 상태인지 확인
  useEffect(() => {
    if (localStorage.getItem(USER_TOKEN)) {
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
        <Route path="/about" element={<About loginState={loginState} />} />
        <Route
          path="/auth"
          element={
            <Authentication
              loginState={loginState}
              setLoginState={setLoginState}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
