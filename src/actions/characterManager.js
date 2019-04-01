const updateMcuCharacter = (characters) => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_MCU_CHARACTERS',
      payload: characters
    });
  }
};

const characterManager = {
  updateMcuCharacter
};

export default characterManager;
