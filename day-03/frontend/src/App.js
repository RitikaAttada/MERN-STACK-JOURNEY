import {useState} from "react"
function Counter(){
  const [count, setCount]=useState(0);
  function inc(){
    setCount(count+1);
  }
  function dec(){
    setCount(count-1);
  }
  return(
    <>
      <h1>Counter: </h1>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
}

function Like(){

  const [like, setLike] = useState(false);
  function updateStatus(){
    setLike(prev=>!prev);
  }
  return(
    <>
      <h1>{like?"liked":"like"}</h1>
      <p>likes:{like?"1":"0"}</p>
      <button onClick={updateStatus}>❤️</button>
    </>
  );
}

function NameInput(){
  const [name, setName] = useState("");
  function changeName(event){
    var str=event.target.value;
    setName(str);
  }
  return(
    <>
      <p>Enter your name</p>
      <input onChange={changeName}/>
      <p>Hello!, {name}</p>
    </>
  )
}

function ProfileCard({children}){
  return(
    <>
    {children}
    </>
  );
}

function App(){
  return (
   <>
    <Counter/>
    <Like/>
    <NameInput/>
    <ProfileCard>
        <p>Ritika</p>
        <p>CSE Student</p>
    </ProfileCard>
    <ProfileCard>
        <p>React</p>
        <p>Learning MERN</p>
    </ProfileCard>
    <ProfileCard>
        <p>LeetCode</p>
        <p>DSA Practise</p>
    </ProfileCard>
  </>
  );
}

export default App;