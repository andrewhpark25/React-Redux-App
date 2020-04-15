import React from "react";
import { connect } from "react-redux";

const DogPage = props => {


  return (
    <div>
      {props.message === "" ? (
        <div class="dog"></div>
      ) : (
         <img src={props.message.message} alt="DogImage" />
      )}     
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.message,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(DogPage);