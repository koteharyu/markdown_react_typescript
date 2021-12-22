import React from 'react';
import styled from 'styled-components';
import { Editor } from './pages/editor';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`


function App() {
  return (
    <>
      <GlobalStyle />
      <Editor />
    </>
  );
}

export default App;
