import React from 'react';
import PropTypes from 'prop-types';

// Components
import { Monster } from './Monster';

export const MonsterCard = ({ monsters }) => {
  return(
    <div className='row no-gutters'>
      {monsters.map(({ id, ...rest }) => (
        <Monster key={id} { ...rest } />
      ))}
    </div>
  )
}

MonsterCard.propTypes = {
  monsters: PropTypes.array.isRequired
}