import React,{useEffet} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import NavBody from './components/navigation/navBody/navBody';
import Header from './components/header/header';
import Main from './components/main/main';
import News from './components/news/news';
import Convert from './components/convert/convert';
import {Route} from 'react-router-dom';
import compareTwoReducer from './actions/loadCurrency';

function App() {
  const dispatch = useDispatch();
  useEffet(()=>{
    dispatch(compareTwoReducer);
  },[]);



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
