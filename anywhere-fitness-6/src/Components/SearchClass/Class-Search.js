import React, { useState } from "react";
import ClassList from "./Class-List";
import { useStateValue } from "../../context/StateProvider";

const ClassSearch = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState("")
  const [{booked}] = useStateValue();
  console.log(booked)
  const options = [
    'Class Time', 
    'Class Date', 
    'Duration', 
    'Class Type', 
    'Intensity Level',
    'Location',
    'Instructor'
  ]
  return (
      <div>
      {/* This is where the user can search for classes, not sure how to implement the searching/filtering yet */}
        <h2> Class List </h2> 
          <div>
            <input 
            type="text"
            placeholder="Search"
            key="key"
            />
            <button> Enter </button>
            <div>
              <div onClick={(e) => setIsActive(!isActive)}>
                Filter By: {selected}
                <span> ~ </span>  {/* I need a dropdown arrow here, just click the ~ to see drop down list and click to set active */}
              </div>
              {isActive && (
                <div> 
                  {options.map((option) => {
                    return (
                    <div onClick={(e) => {
                      setSelected(option) 
                      setIsActive(false) 
                    }}> {option} </div>
                  )})}
                </div>
              )}
            </div>
          </div> 
          {/* Here Is Some Dummy Data for testing purposes (client booking, dropping classes) */}
          <ClassList
            id={1234} 
            name={'Beginners Circuit'} 
            time={"6PM EST"}
            date={'December 11th, 2016'}
            duration={'2Hr'}
            location={'Chicago, Illinois'}
            instructor={'Craig'}
            intensity={'Low'}
            spots={15}
            />
            <ClassList
            id={1235} 
            name={'Cardio Blast'} 
            time={"3PM EST"}
            date={'January 27th, 2017'}
            duration={'1Hr'}
            location={'Detroit, Michigan'}
            instructor={'Jen'}
            intensity={'High'}
            spots={10}
            />
            <ClassList
            id={1234} 
            name={'Advanced Aerobics'} 
            time={"3PM EST"}
            date={'March 11th, 2016'}
            duration={'3Hr'}
            location={'Cleveland, Ohio'}
            instructor={'Todd'}
            intensity={'High'}
            spots={12}
            />
      </div> 
  );
};

export default ClassSearch