import { combineReducers } from 'redux';

const mcuCharacters = (state=null, data) => {
  switch(data.type){
    case 'UPDATE_MCU_CHARACTERS':
     return data.payload;
    default:
      return state;
  }
};

export default combineReducers({
  mcuCharacters
});
