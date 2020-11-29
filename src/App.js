import './styles/App.css'
import React, { useState } from 'react';
import Card from './components/Card'
import Header from './components/Header'
function App() {
return (
  <div className="app-container">
    <Header/>
    <Card/>
  </div>
);
}
export default App;
