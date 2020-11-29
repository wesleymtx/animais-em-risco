import './styles/App.css'
import React, { useState } from 'react';
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
return (
  <div className="app-container">
    <Header/>
    <Card/>
    <Footer/>
  </div>
);
}
export default App;
