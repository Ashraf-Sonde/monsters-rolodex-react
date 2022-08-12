import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.monster.id}.svg`}
      width="180px"
      alt='Monster'/>
    <h3>{ props.monster.name }</h3>
    <p>{ props.monster.website }</p>
  </div>
)
