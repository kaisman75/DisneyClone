import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {
  return (



<div className="App">
    <Router>
      
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/Detail' element={<Detail />} />


        </Routes>
     
    </Router>

 </div>
  );
}

export default App;
