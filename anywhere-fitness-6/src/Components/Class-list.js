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
        {classListData.data.map((item) => {
          return (
            <ol>
          <li> Location: {item.location} </li>
          <li> Date: {item.date} </li>
          <li> Time: {item.time} </li>
          <li> Duration: {item.duration} </li>
          <li> Intensity: {item.intensity} </li>
          <li> Instructor: {item.instructor} </li>
        </ol>
          )
        })
    }   
        <button onClick={handleBookClass}>Book Class</button> <span> </span>
        <button> Available Spots: {classListData.data.openSpots} </button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    classListData: state.classListData,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getClassList })(ClassList);

