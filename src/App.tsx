import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import { useEffect } from "react";

function App() {
  // TODO: Check here if the user is logged, also store the login state
  const navigate = useNavigate();
  useEffect(() => {
    console.log("test");
    if (true) {
      return navigate("/login");
    }
  }, [true]);

  return (
    <Routes>
      <Route path="/login" Component={Login}></Route>
    </Routes>
  );
}

export default App;
