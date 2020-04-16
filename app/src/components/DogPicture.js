import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchDog } from '../actions/DogActions';

const DogPicture = props => {


     const useFetchDog = e => {
        e.preventDefault();
        props.fetchDog();
    };


 
  
    return (
    
      
         <div>
             {props.isFetching && (
          <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        )}
            {props.isFetching ? (
                <div className="dogButton"></div>
            ) : (
              <button onClick={useFetchDog}>Fetch A Dog Image</button>
            )}
        </div>
    
    );
  };
  
  const mapStateToProps = state => {
    console.log(state);
    return {
      message: state.message,
      isFetching: state.isFetching,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchDog }
  )(DogPicture);
  