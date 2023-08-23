import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DemmFunctionCom from './Components/DemoComponent/DemmFunctionCom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <h1>Hello wellcome to Project</h1>
  <App />
  // <DemmFunctionCom />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
