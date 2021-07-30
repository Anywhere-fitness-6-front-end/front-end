import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { editClass } from "../redux/actions/classActions";

const initialValues = 
  [
    {class_name: "",
    instructor_name: "",
    activity_name: "",
    address: "",
    class_time: "",
    duration: "",
    intensity: "",
    max_size: "",
    available_slots: "",
    id: "",
    }];

const ClassSingle = () => {
  const [formData, setformData] = useState(initialValues);

  const { id } = useParams();
  const { push } = useHistory();
   const dispatch = useDispatch();

   useEffect(() => {
     axiosWithAuth()
       .get(`classes/${id}`)
       .then((res) => {
         setformData(res.data);
         console.log(res);
       })
       .catch((err) => {
         console.log(err);
       });
   }, [id]); 

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editClass(id, formData));
    push("/class-list");
  };

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setformData({ ...formData, [name]: value });
  };





  return (
    <div>
      <h1>Edit and delete Class </h1>
      <form onSubmit={onSubmit}>
        <label>
          Class Name
          <input
            type="text"
            name="class_name"
            placeholder="Class Name"
            value={formData.class_name}
            onChange={onChange}
          />
        </label>
        <label>
          Instructor Name
          <input
            type="text"
            name="instructor_name"
            placeholder="Instructor Name"
            value={formData.instructor_name}
            onChange={onChange}
          />
        </label>
        <label>
          Activity Name
          <input
            type="text"
            name="activity_name"
            placeholder="Type of Class"
            value={formData.activity_name}
            onChange={onChange}
          />
        </label>
        <label>
          Class Time
          <input
            type="datetime"
            name="class_time"
            value={formData.class_time}
            onChange={onChange}
          />
        </label>
        <label>
          Duration
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={onChange}
          />
        </label>
        <label>
          Intensity Level
          <select
            name="intensity"
            value={formData.intensity}
            onChange={onChange}
          >
            <option value="">Select an Intensity</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <label>
          Address
          <input
            type="text"
            name="address"
            placeholder="Address of Class"
            value={formData.address}
            onChange={onChange}
          />
        </label>
        <label>
          Max Class Size
          <input
            type="number"
            name="max_size"
            value={formData.max_size}
            onChange={onChange}
          />
        </label>
        <label>
          Available Slots
          <input
            type="number"
            name="available_slots"
            value={formData.available_slots}
            onChange={onChange}
          />
        </label>
        <button id="editClass">Edit Class</button>
      </form>
    </div>
  );
};

export default ClassSingle;
