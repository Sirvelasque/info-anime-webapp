import axios from 'axios';

const ONEDETAILS = 'ONEDETAILS';

const detailsReducer = (state = [], action) => {
  switch (action.type) {
    case ONEDETAILS:
      return action.payload;
    default:
      return state;
  }
};

const getDetails = (id = 1) => async (dispatch) => {
  const details = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
  dispatch({
    type: ONEDETAILS,
    payload: details,
  });
};

export default detailsReducer;
export { getDetails };
