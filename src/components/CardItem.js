import React, { useState } from 'react';
import '../styles/CardItem.css'
function CardItem(props) {
return (
  <div className="card-item-container">
    <div className="pane-card">
      <div className="photo-card">
        <img src={props.imagem}></img>
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
