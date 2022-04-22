import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/Knowledges' element={<Knowledges/>}/>
              <Route path='/Portfolio' element={<Portfolio/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route  path='*' element={<Home/>}/>
          </Routes>
       </BrowserRouter>
    );
};

export default App;