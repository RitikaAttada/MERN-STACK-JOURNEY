import { useState, useEffect } from "react";

// // FIRST REACT COMPONENT:
// function Welcome(){
//   //JSX
//   const name="Ritika"
//   return (
//     <>
//       hello {name}
//     </>
//   );
// }

function Header(){
  return (
    <>
    <>My React App</>
    <br/>
    </>
  );
}

function Welcome(){
  return(
    <>Welcome to react</>
  );
}

//PROPS
function Student({name, branch, year}){
  return(
    <>
      <br/>
      <>Name: {name}</>
      <br/>
      <>Branch: {branch}</>
      <br/>
      <>year: {year}</>
      <br/>
    </>
  );
}

//COMPONENTS CAN CONTAIN OTHER COMPONENTS
function App(){
  return(
    <>
    <Header/>
    <Welcome/>
    <Student name="Ritika" branch="CSE" year={4}/>
    <Student name="Khyathi" branch="CSD" year={3}/>
    <Student name="Lalitha" branch="CSM" year={3}/>
    </>
  )
  
}

export default App;