import axios from 'axios';



export const fetchDog = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_DOG_DATA' });
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        dispatch({ type: 'FETCH_DOG', payload: res.data});
      })
      .catch(err => {
    
        dispatch({
          type: 'FETCH_DOG_FAILURE',
          payload: `Error ${err.response.status}: ${err.response.data}`
        });
      });
  };
};


