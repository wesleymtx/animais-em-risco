import React, { useState } from 'react';
import '../styles/CardItem.css'
function CardItem(props) {
  const [imageNotFound, setImageNotFound] = useState(false)
  const [cutName, setCutName] = useState('lala')
  const fallBackImage = (e, nome)=>{
    setImageNotFound(true)
    setCutName(nome.substr(0,2))
    e.target.remove()
  }
  const biomaColor = (e)=>{
    console.log(e)
    if(e=='Pantanal')
      return pantanalStyle
    else if (e=='Caatinga')
      return caatingaStyle
    else if (e=='Aquático')
      return aquaticoStyle
    else if (e=='Amazônia')
      return amazoniaStyle
  }
  const pantanalStyle = {
    'backgroundColor': 'rgb(126, 23, 126)',
    'color':'rgb(151, 87, 13)'
  };
  const caatingaStyle = {
    'backgroundColor': 'rgb(214,142,58)',
    'color':'rgb(151, 87, 13)'
  };
  const aquaticoStyle = {
    'backgroundColor': 'rgb(79, 119, 238)',
    'color':'rgb(43, 66, 136)'
  }
  const amazoniaStyle = {
    'backgroundColor':'rgb(49, 143, 89)',
    'color': 'rgb(29, 85, 53)'
  }
return (
  <div className="card-item-container">
    <div className="pane-card">
      <div className="photo-card-shape">
        <img src={props.imagem} onError={(e)=>fallBackImage(e, props.nome)}></img>
        {imageNotFound && <div style={biomaColor(props.bioma)} className="cut-words">{cutName}</div>}
      </div>
      <div className="content-card">
        <h1>{props.nome}</h1>
        <h2>{props.nomeCientifico}</h2>
        <h3>{props.especie}</h3>
        <div className="text-bioma" style={biomaColor(props.bioma)}>{props.bioma}</div>
      </div>
        <div className="status-card"></div>
    </div>
  </div>
);
}

export default CardItem;