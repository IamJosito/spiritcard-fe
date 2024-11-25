import React, { useEffect, useState } from "react";
import apiClient from "./axios/axios";

function App() {
  const [foo, setFoo] = useState("");

  useEffect(() => {
    apiClient
      .get("/")
      .then((response) => setFoo(response.data))
      .catch((e) => console.error(e));
  }, []);

  return <div className="App"> {foo} </div>;
}

export default App;
