import { useState, useEffect} from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(()=>{
    fetch("http://localhost:5000/")
      .then(res=>res.text())
      .then(data=>setMessage(data));
  }, []);
  return (
    <>
      <p>{message}</p>
    </>
  );
}

export default App;
