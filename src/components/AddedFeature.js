import React from 'react';
import { removeFeature } from '../actions/action';
import { useDispatch } from 'react';

const AddedFeature = props => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFeature(props.feature));
  };
  return (
    <li>
      <button onClick={handleRemove} className='removeButton'>Remove Part</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
