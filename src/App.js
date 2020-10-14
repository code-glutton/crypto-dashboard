import React from 'react';
import './App.css';
import NavBody from './components/navigation/navBody/navBody';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <div className="App">
      <div  className='appHeader'>
        <Header/>
      </div>
      <div  className='appNav'>
        <NavBody/>
      </div>
      <div className='appMain'>
        <Main/>
      </div>  
    </div>
  );
}

export default App;
