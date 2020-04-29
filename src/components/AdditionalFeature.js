import React from 'react';
import {useDispatch} from 'react-redux'
import {buyFeature} from '../actions/action'


const AdditionalFeature = props => {

const dispatch = useDispatch();

const handleAdd = () => {
  buyFeature(props.feature);
  dispatch(buyFeature(props.feature));
};

  return (
    <li>
      <button className="button" type = 'submit' value={props.feature.id} onClick={handleAdd}>Add Car</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
