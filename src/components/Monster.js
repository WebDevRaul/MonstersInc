import React from 'react';
import PropTypes from 'prop-types';

export const Monster = ({ name, email }) => {
  return(
    <div className='col-10 col-sm-6 col-md-4 p-3 m-auto'>
      <div className='robo-container'>
        <img alt='monster' className='image' src={`https://robohash.org/${name}`} />
        <p className='text-uppercase font-weight-bold pt-2'>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  )
};

Monster.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}