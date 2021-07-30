import React from 'react';
import { connect } from "react-redux";

const Booked = (props) => {
const { bookedClasses } = props;
console.log("bookedclasses booked", bookedClasses)
    return (
        <div>
            <h1> 
              Booked list
            </h1>
            {bookedClasses.map((item) => {
              return (
                <p>{item.name}</p>
              )
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
      bookedClasses: state.bookedClasses,
    };
}

export default connect(mapStateToProps)(Booked);