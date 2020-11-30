import React, { useState, useEffect } from 'react';
import CardMap from './CardMap'
import axios from 'axios';
import '../styles/Card.css'
function Card() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api = async () => {
      setLoading(true);
      const res = await axios.get('http://www.mocky.io/v2/5c2f6da1320000b52859082f');
      setAnimals(res.data.animais.sort((a,b)=>{
        if(a.nome>b.nome)
          return 1;
        if(a.nome<b.nome)
          return -1
        return 0
      }))
      setLoading(false);
    }
    api()
  },[])

// const api = () =>{
//     fetch('http://www.mocky.io/v2/5c2f6da1320000b52859082f')
//     .then(function(response){
//       return response.json()
//     })
//     .then(function(data){
//       setAnimals(data.animais.sort((a,b)=>{
//         if(a.nome>b.nome)
//           return 1;
//         if(a.nome<b.nome)
//           return -1
//         return
//       }))
//     })
//   }
  
  return (
    <div className='card-container'>
      <div className="card-header">
        <h1 style={{'marginRight': 'auto', 'padding':'0', 'fontSize':'16px'}}>ANIMAIS EM EXTINÇÃO</h1>
        <p style={{'color': 'grey', 'marginRight':'auto', 'fontWeight':'600', 'fontSize': '13px'}}>{animals.length} ANIMAIS NA LISTA</p>
      </div>
        {animals.map(animal=><CardMap key={animal.nome} imagem={animal.imagem} nome={animal.nome} nomeCientifico={animal.nomeCientifico} especie={animal.especie} bioma={animal.bioma} risco={animal.risco}/>)}
    </div>
  );
}

export default Card;
