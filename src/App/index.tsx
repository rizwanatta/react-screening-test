import React from "react";
import styled from 'styled-components';
import "./App.css";


const MyButton = styled.button`
background: transparent;
 border-radius: 3px;
 border: 2px solid palevioletred;
 color: palevioletred;
 margin: 0 1em;
 padding: 0.25em 1em;
`;
function App() {
  return <div>
    Hello World
    <MyButton> TEST BUTTON IS HERE</MyButton>
  </div>;
}

export default App;
