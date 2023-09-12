import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home';
import Page404 from './Page/Page404/Page404';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import ReactLifeCycle from './ReactLifeCycle/ReactLifeCycle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />} >
        <Route path='' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/reactLifeCycle' element={<ReactLifeCycle />} />
        <Route path='*' element={<Page404 />} />
        {/* <Route path='*' element={<Navigate to="" />} /> */}

      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
