
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <p>Enter your name: </p>
        <input onInput={text = this.value}></input>
        <p id="p">Hello {text}!</p>
    </div>
  )
}

export default App
