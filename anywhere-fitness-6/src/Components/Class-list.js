import React, { useEffect } from "react"
import { connect } from 'react-redux';
import {
  getClassList,
  addClass,
  bookClass,
} from "../redux/actions/classActions";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import Booked from "./Booked/Booked";


const ClassList = (props) => {
  const { classListData } = props;
  // if time add these to above and link up bookedClasses, isFetching, error, spots
  useEffect(() => {
    props.getClassList();
    console.log("class list id", classListData);
  }, []);

  const { push } = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    console.log(id);
    push(`/edit-class/${id}`);
  };

  const handleBook = (id) => {
    dispatch(bookClass(id));
    // console.log(id);
  };

  return (
    <div>
      {classListData.length > 0
        ? classListData.map((item) => {
            return (
              <>
                <ol>
                  <li> Location: {item.address} </li>
                  <li> Date: {item.classDate} </li>
                  <li> Time: {item.class_time} </li>
                  <li> Duration: {item.duration} </li>
                  <li> Intensity: {item.intensity} </li>
                  <li> Instructor: {item.instructor} </li>
                  <li> Spots: {item.available_slots} </li>
                  <button onClick={() => handleEdit(item.class_id)}>
                    Update
                  </button>
                  <button onClick={() => handleBook(item.class_id)}>
                    Book
                  </button>
                </ol>
              </>
            );
          })
        : null}
      <Booked />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bookedClasses: state.bookedClasses,
    classListData: state.classListData,
    isFetching: state.isFetching,
    error: state.error,
  }
}


export default connect(mapStateToProps, { getClassList, addClass, bookClass })(
  ClassList
);

