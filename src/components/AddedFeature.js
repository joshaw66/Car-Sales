import React from 'react';
import {useDispatch} from 'react-redux'
import {removeFeature} from '../actions/action'

const AddedFeature = props => {

  const dispatch = useDispatch();
  
  const handleRemove = () => {
    dispatch(removeFeature(props.feature));
  };

  return (
    <li>
      <button
        onClick={handleRemove} className="button">Remove</button>{props.feature.name}
    </li>
  );
};

export default AddedFeature;