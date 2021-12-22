import React from 'react';
import styled from 'styled-components';
import { Editor } from './pages/editor';
import { History } from './pages/history';
import { createGlobalStyle } from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`


function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Route exact path="/editor">
          <Editor />
        </Route>
        <Route exact path="/history">
          <History />
        </Route>
        <Redirect to="/editor" path="*" />
      </Router>
    </>
  );
}

export default App;
