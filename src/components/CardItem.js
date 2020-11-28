import React, { useState } from 'react';
import '../styles/CardItem.css'
function CardItem(props) {
  const [imageNotFound, setImageNotFound] = useState(false)
  const fallBackImage = (e, n)=>{
    setImageNotFound(true)
    e.target.remove()
  }
return (
  <div className="card-item-container">
    <div className="pane-card">
      <div className="photo-card-shape">
        <img src={props.imagem} onError={(e)=>fallBackImage(e, props.nome)}></img>
        {imageNotFound && <div style={{'width': '200%'}}>ok</div>}
      </div>
      <div className="content-card">
        <h1>{props.nome}</h1>
        <h2>{props.nomeCientifico}</h2>
        <h3>{props.especie}</h3>
        <div className="text-bioma">{props.bioma}</div>
      </div>
        <div className="status-card"></div>
    </div>
  </div>
);
}

export default CardItem;
