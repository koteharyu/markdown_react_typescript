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
import { useStateWithStorage } from './hooks/use_state_with_storage';


const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

const StorageKey = '/editor:text'

function App() {
  const [text, setText] = useStateWithStorage("", StorageKey)
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/editor">
            <Editor text={text} setText={setText} />
          </Route>
          <Route exact path="/history">
            <History setText={setText} />
          </Route>
          <Redirect to="/editor" path="*" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
