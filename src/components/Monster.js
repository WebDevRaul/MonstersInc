import React from 'react';

export const Monster = ({ name, id, email }) => {
  return(
    <div className='card-container'>
      <img alt='monster' src={`https://robohash.org/${id}?set=set2`} />
      <h1>{name}</h1>
      <h2>{email}</h2>
    </div>
  )
}