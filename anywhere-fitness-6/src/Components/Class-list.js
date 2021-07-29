import React, { useEffect } from "react"
import { connect } from 'react-redux';
import { getClassList, addClass } from "../redux/actions/classActions";

  

const ClassList = (props) => {
  const { classListData, isFetching, error, spots } = props;
  useEffect(() => {
    props.getClassList();
    
  }, []) 

  const handleBookClass = () => {
    props.bookClass()
  }

  const decrease = () => {
    console.log(classListData.spots);
  }

  const addClassEvent = (e) => {
    e.preventDefault()
    props.addClass()
  }
    return (
      <div>
{console.log(classListData)}
        {/* {classListData.map(item => {
          return (
            <>
            <ol>
              <li> Location: {item.location} </li>
              <li> Date: {item.classDate} </li>
              <li> Time: {item.classTime} </li>
              <li> Duration: {item.duration} </li>
              <li> Intensity: {item.intensityLevel} </li>
              <li> Instructor: {item.instructor} </li>
              <li> Spots: {item.spots} </li>
            </ol>
            <button onClick={handleBookClass}>Book Class</button> 
            <button onClick={decrease}> dec</button>
            </>
          );
        })} */}
        <button onClick={addClassEvent}>Add</button>
      </div>
    );
}

const mapStateToProps = state => {
  return {
    classListData: state.classListData,
    isFetching: state.isFetching,
    error: state.error,
  }
}


export default connect(mapStateToProps, { getClassList, addClass })(ClassList);

