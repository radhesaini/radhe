import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </Router>
  )
}
