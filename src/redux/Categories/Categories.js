const CATEGORIECHANGE = 'CATEGORIECHANGE';

const categorieReducer = (state = 'Action', action) => {
  switch (action.type) {
    case CATEGORIECHANGE:
      return action.payload;
    default:
      return state;
  }
};

const getCategorie = (cat) => async (dispatch) => {
  dispatch({
    type: CATEGORIECHANGE,
    payload: cat,
  });
};

export default categorieReducer;
export { getCategorie };
