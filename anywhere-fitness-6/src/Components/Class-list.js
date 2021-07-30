import React, { useEffect } from "react"
import { connect } from 'react-redux';
import { getClassList, addClass } from "../redux/actions/classActions";
import { useHistory } from "react-router";

  

const ClassList = (props) => {
  const { classListData, isFetching, error, spots } = props;
  useEffect(() => {
    props.getClassList();
  }, []) 

 const { push } = useHistory();

 const handleEdit = (id) => {
   push(`/edit-class/${id}`);
 };
 
    return (
      <div>
        {console.log("class list data", classListData)}
        {classListData.length > 0 ? classListData.map((item)  => {
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
                <button onClick={() => handleEdit(item.class_id)}>Update</button>
              </ol>
            </>
          );
        }) : null} 
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

