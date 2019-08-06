import React from 'react';
import PropTypes from 'prop-types';

export const SearchMonster = ({
  onChange
}) => {
  return (
    <div className='row no-gutters d-flex mt-3 mb-3'>
      <div className='col-10 col-sm-6 col-md-3 m-auto'>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="search monster" onChange={onChange} />
        </div>
      </div>
    </div>
  )
}

SearchMonster.propTypes = {
  onChange:  PropTypes.func.isRequired
}