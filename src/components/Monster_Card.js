import React from 'react';

// Components
import { Monster } from './Monster';

export const MonsterCard = ({ monsters }) => {
  return(
    <div className='card-list'>
      {monsters.map(({ id, name }) => (
        <Monster key={id} name={name} />
      ))}
    </div>
  )
}