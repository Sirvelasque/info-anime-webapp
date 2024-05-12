const CATEGORIECHANGE = 'CATEGORIECHANGE';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('category');
    if (serializedState === null) {
      return 'Action'; // Return your default state if nothing is in localStorage
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return 'Action'; // Return default state if any errors
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('category', serializedState);
  } catch (err) {
    // Log errors or handle as you see fit
    console.log('Could not save state', err);
  }
};
const initialState = loadState(); // Load the state from localStorage

const categorieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CATEGORIECHANGE':
      // Immediately save the new state to localStorage whenever it changes
      saveState(action.payload);
      return action.payload;
    default:
      return state;
  }
};

const getCategorie = (cat) => (dispatch) => {
  dispatch({
    type: CATEGORIECHANGE,
    payload: cat,
  });
};

export default categorieReducer;
export { getCategorie };
