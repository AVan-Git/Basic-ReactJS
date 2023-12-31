import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// cau hinh react router 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Page/Contact/Contact';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import ReactForm from './Page/ReactForm/ReactForm';
import Page404 from './Page/Page404/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<App />} >
        <Route path='' element={<Home />} ></Route>
        <Route path='contact' element={<Contact />} ></Route>
        <Route path='about' element={<About />} ></Route>
        <Route path='reactForm' element={<ReactForm />} ></Route>
        <Route path='*' element={<Page404/>} ></Route>
      </Route>
      {/* <Route path='contact' element={<Contact />} >
          
        </Route> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
