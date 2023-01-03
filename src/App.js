import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import SideBar from './component/SideBar';




function App() {
  return (
    <BrowserRouter>
      <Header/>
         <Routes>
            <Route path="/"  element = {<Home/>}/>
            <Route path="Home"  element = {<Home/>}/>
            <Route path='sideNav' element = {<SideBar/>}/>
         </Routes>
         <Footer/>
    </BrowserRouter>
  )
}

export default App