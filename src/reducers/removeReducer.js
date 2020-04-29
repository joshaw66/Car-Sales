
// Reducer to implement remove action //

import {REMOVE_FEATURE} from '../actions/action'

export const removeFeature = (state, action) =>{
    switch(action.type){
      case REMOVE_FEATURE:{
        return state
    };
      default:
        return state;
  }
}