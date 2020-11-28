import React, { useState, useEffect } from 'react';
import CardItem from './components/CardItem'
import './styles/Card.css'
function Card() {
  const [animals, setAnimals] = useState([]);
  useEffect(() => {
    api();
  }, []);

const api = () =>{
    fetch('http://www.mocky.io/v2/5c2f6da1320000b52859082f')
    .then(function(response){
      return response.json()
    })
    .then(function(data){
      setAnimals(data.animais)
    })
    .then(()=>{console.dir(animals)})
  }
  return (
    <div className='card-container'>
      <div className="card-header">
        <h1 style={{'margin-right': 'auto'}}>ANIMAIS EM EXTINÇÃO</h1>
        <p style={{'color': 'rgb(215,213,213)', 'margin-right':'auto', 'fontWeight':'600'}}>02 ANIMAIS NA LISTA</p>
      </div>
        {animals.map(animal=><CardItem imagem={animal.imagem} nome={animal.nome} nomeCientifico={animal.nomeCientifico} especie={animal.especie} bioma={animal.bioma} />)}
    </div>
  );
}

export default Card;
