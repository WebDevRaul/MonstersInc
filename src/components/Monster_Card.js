import React from 'react';

// Components
import { Monster } from './Monster';

export const MonsterCard = ({ monsters }) => {
  return(
    <div className='card-list'>
      {monsters.map(({ id, name, email }) => (
        <Monster key={id} name={name} id={id} email={email} />
      ))}
    </div>
  )
}