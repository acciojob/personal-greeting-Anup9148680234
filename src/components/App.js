
import React from "react";
import './../styles/App.css';

const App = () => {
  let text ="";
  function textAdd(){
    text = document.getElementById('a').value;
  }
  return (
    <div>
        <p>Enter your name: </p>
        <input onInput={textAdd} id="a"></input>
        <p id="p">Hello {text}!</p>
    </div>
  )
}

export default App
