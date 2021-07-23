import React from 'react'
import {
  BrowserRouter as Router,
  } from "react-router-dom";
import Routes from '../../routes/routes';
import style from './App.module.css';


function App():JSX.Element {
  return (
    <>
    <div className={style.app}>
      <header>
      <h1 className={style.title}>Card App</h1>
      </header>
      <main>      
       <Router>
        <Routes/>
      </Router>
     </main>
     </div>
   </>
  );
}

export default App;
