import React from 'react';
import './App.css';
import NavBody from './components/navigation/navBody/navBody';
import Header from './components/header/header';
import Main from './components/main/main';
import News from './components/news/news';
import Convert from './components/convert/convert';
import {Route} from 'react-router-dom';

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
      <Route exact path='/' component = {Main}/>
      <Route exact path='/news' component = {News}/>
      <Route exact path='/convert' component = {Convert}/>
      </div>  
    </div>
  );
}

export default App;
