import React, { useEffect } from "react"
import { connect } from 'react-redux';
import { getClassList } from "../redux/actions/classActions";
import { bookClass} from "../redux/actions/classActions"
  

const ClassList = (props) => {
  const { classListData, isFetching, error } = props;
  useEffect(() => {
    props.getClassList();
  }, []) 

  const handleBookClass = () => {
    props.bookClass()
  }
  
    return (
      <div>
        <h2>{classListData.name}</h2>
        <ol>
          <li> Location: {classListData.location} </li>
          <li> Date: {classListData.date} </li>
          <li> Time: {classListData.time} </li>
          <li> Duration: {classListData.duration} </li>
          <li> Intensity: {classListData.intensity} </li>
          <li> Instructor: {classListData.instructor} </li>
        </ol>
        <button onClick={handleBookClass}>Book Class</button> <span> </span>
        <button> Available Spots: {classListData.openSpots} </button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    ClassListData: state.ClassListData,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getClassList })(ClassList);

