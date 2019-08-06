import React from 'react';

// Components
import { Monster } from './Monster';

export const MonsterCard = ({ monsters }) => {
  return(
    <div className='row no-gutters'>
      {monsters.map(({ id, name, email }) => (
        <Monster key={id} name={name} email={email} />
      ))}
    </div>
  )
}