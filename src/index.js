import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstApp from './components/1-FirstAppInReact';
import Functions from './components/2-Functions';
import MyInfo from './components/Practice/1-MyInfo';
import ParentChildComponent from './components/3-Parent-childComponent';
import ParentChildComponentPractice from './components/Practice/2-Parent-childComponentPractice'
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstApp />
    <Functions />
    <MyInfo />
    <ParentChildComponent />
    <ParentChildComponentPractice />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
