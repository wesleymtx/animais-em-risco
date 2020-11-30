import React, { useState, useEffect } from 'react';
import CardMap from './CardMap'
import axios from 'axios';
import '../styles/Card.css'
function Card({ posts, loading, totalPosts }) {
  
  return (
    <div className='card-container'>
      <div className="card-header">
        <h1 style={{'marginRight': 'auto', 'padding':'0', 'fontSize':'16px'}}>ANIMAIS EM EXTINÇÃO</h1>
        <p style={{'color': 'grey', 'marginRight':'auto', 'fontWeight':'600', 'fontSize': '13px'}}>{totalPosts} ANIMAIS NA LISTA</p>
      </div>
        {loading?<h1>Loading...</h1>:posts.map(animal=><CardMap key={animal.nome} imagem={animal.imagem} nome={animal.nome} nomeCientifico={animal.nomeCientifico} especie={animal.especie} bioma={animal.bioma} risco={animal.risco}/>)}
    </div>
  );
}

export default Card;
