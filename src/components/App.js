import { useState } from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  let [text, setText] = useState('');
  let textTemp = "";
  function textAdd(){
    textTemp = document.getElementById('a').value;
    setText(textTemp);
  }
  return (
    <div>
        <p>Enter your name: </p>
        <input onInput={textAdd} id="a"></input>
        <p id="p">Hello {textTemp}!</p>
    </div>
  )
}
export default App
