import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
}
from 'react-router-dom';
import Create from './signup/create';
import Plan from './plan';
import Login from './signup/login';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path='/' element={<Create />}/>
          <Route path ='/login' element={<Login/>}/>
          <Route path ='/plan' element={<Plan/>}/>
      </Routes>
    </Router>
  );
}

export default App;
