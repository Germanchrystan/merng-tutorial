import React from 'react';
import { BrowserRputer as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import MenuBar from './components/MenuBar/MenuBar';
import Home from './components/pages/Home/Home';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';

import { AuthProvider } from './context/auth';
import AuthRoute from './utils/AuthRoute';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path='/' component={Home}/>
          <AuthRoute exact path='/login' component={Login}/>
          <AuthRoute exact path='/register' component={Register}/>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
