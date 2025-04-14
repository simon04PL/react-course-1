import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstApp from './components/1-FirstAppInReact';
import Functions from './components/2-Functions';
import MyInfo from './components/Practice/1-MyInfo';
import ParentChildComponent from './components/3-Parent-childComponent';
import ParentChildComponentPractice from './components/Practice/2-Parent-childComponentPractice'
import reportWebVitals from './reportWebVitals';
import ToDoList from './components/Practice/3-toDoList'
import Caveats from './components/4-Caveats';
import Variables from './components/5-Variables';
import InlineStyling from './components/6-InlineStyling';
import Props from './components/7-Props';
import PropStyle from './components/Practice/4-PropStyle';
import MappingComponents from './components/8-MappingComponents';
import MappingComponentPractise from './components/Practice/5-MappingComponent';
import ClassBasedComponents from './components/9-ClassBasedComponent';
import ClassBasedComponentPractise from './components/Practice/6-ClassBasedComponent';
import State from './components/10-State';
import StatePractice from './components/Practice/7-State';
import StatePractise2 from './components/Practice/8-State-2';
import toDoList4 from './components/Practice/9-toDoList4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstApp />
    <Functions />
    <MyInfo />
    <ParentChildComponent />
    <ParentChildComponentPractice />
    <ToDoList />
    <Caveats />
    <Variables />
    <InlineStyling />
    <Props />
    <PropStyle />
    <MappingComponents />
    <MappingComponentPractise />
    <ClassBasedComponents />
    <ClassBasedComponentPractise />
    <State />
    <StatePractice />
    <StatePractise2 />
    <toDoList4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
