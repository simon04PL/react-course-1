import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstApp from './components/01-FirstAppInReact';
import Functions from './components/02-Functions';
import MyInfo from './components/Practice/01-MyInfo';
import ParentChildComponent from './components/03-Parent-childComponent';
import ParentChildComponentPractice from './components/Practice/02-Parent-childComponentPractice'
import reportWebVitals from './reportWebVitals';
import ToDoList from './components/Practice/03-toDoList'
import Caveats from './components/04-Caveats';
import Variables from './components/05-Variables';
import InlineStyling from './components/06-InlineStyling';
import Props from './components/07-Props';
import PropStyle from './components/Practice/04-PropStyle';
import MappingComponents from './components/08-MappingComponents';
import MappingComponentPractise from './components/Practice/05-MappingComponent';
import ClassBasedComponents from './components/09-ClassBasedComponent';
import ClassBasedComponentPractise from './components/Practice/06-ClassBasedComponent';
import State from './components/10-State';
import StatePractice from './components/Practice/07-State';
import StatePractise2 from './components/Practice/08-State-2';
import ToDoList4 from './components/Practice/09-toDoList4'; 
import UserEvent from './components/11-UserEvent';  
import TodoList5 from './components/Practice/10-toDoList5';
import ChangingState from './components/12-ChangingState';


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
    <ToDoList4 /> 
    <UserEvent />
    <TodoList5 />
    <ChangingState />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
