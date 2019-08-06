import React from 'react';

export const Monster = ({ name, email }) => {
  return(
    <div className='col col-sm-6 col-md-4 p-3'>
      <div className='robo-container'>
        <img alt='monster' src={`https://robohash.org/${name}`} />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  )
}