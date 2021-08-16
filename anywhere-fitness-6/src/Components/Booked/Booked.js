import React from 'react';
import { connect } from "react-redux";

const Booked = (props) => {
const { bookedClasses } = props;

const removeHandler = (evt) => {
  evt.preventDefault()
  console.log("clicked", bookedClasses)
}
    return (
        <div>
            <h1> 
              Booked list
            </h1>
            {/* {props.bookedClasses.map((item) => {
              return (
                <p>{item}</p>
              )
            })} */}
            <button onClick={removeHandler}>Remove class</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      bookedClasses: state.bookedClasses,
    };
}

export default connect(mapStateToProps)(Booked);