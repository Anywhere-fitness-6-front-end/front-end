import React, { useEffect } from "react"
import { connect } from 'react-redux';
import { getClassList, addClass } from "../redux/actions/classActions";

  

const ClassList = (props) => {
  const { classListData, isFetching, error, spots } = props;
  useEffect(() => {
    props.getClassList();
  }, []) 

  // const handleBookClass = () => {
  //   props.bookClass()
  // }

  const decrease = () => {
    console.log(classListData);

  }


    return (
      <div>
        {console.log("classlist", classListData)}
        {classListData.map((item) => {
          return (
            <>
              <ol>
                <li> Location: {item.address} </li>
                <li> Date: {item.classDate} </li>
                <li> Time: {item.class_time} </li>
                <li> Duration: {item.duration} </li>
                <li> Intensity: {item.intensity} </li>
                <li> Instructor: {item.instructor} </li>
                <li> Spots: {item.max_size} </li>
                <button onClick={decrease}> dec</button>
              </ol>
            </>
          );
        })}
        {/* <button onClick={handleBookClass}>Book Class</button>
         */}
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

