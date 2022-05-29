import axios from 'axios';

const DETAILS = 'DETAILS';

const companiesReducer = (state = [], action) => {
  switch (action.type) {
    case DETAILS:
      return action.payload;
    default:
      return state;
  }
};

const getAnimes = () => async (dispatch) => {
  const ids = ['1', '22319', '30831', '32937', '37450', '7054', '40591', '10165', '40902', '32282'];
  const info = [];
  await Promise.all(ids.map((e) => axios.get(`https://api.jikan.moe/v4/anime/${e}`).then((response) => {
    if (response.status === 200) {
      setTimeout(info.push(response), 100000);
    }
  })));
  dispatch({
    type: DETAILS,
    payload: info,
  });
};

export default companiesReducer;
export { getAnimes };
