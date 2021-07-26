import React, { useState } from "react";

const BookClasses = () => {
  const [isActive, setIsActive] = useState(false)
  const [selected, setSelected] = useState("")
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
        <h2> Class List </h2> 
          <div>
            <input 
            type="text"
            placeholder="Search"
            />
            <div>
              <div onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <span> ~ </span>
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
          <ClassNames /> 
      </div> 
  );
};

const classes = [
  {
  'name': 'Cardio',
  'location': 'New York',
  'time': '3pm EST',
  'intensity': 'Medium',
  'instructor': 'Jessica',
  'type': 'cardio'
    },
  {
    'name': 'Power Lifting',
    'location': 'New Jersey',
    'time': '5pm EST',
    'intensity': 'High',
    'instructor': 'Jacob',
    'type': 'weights'
    },
    {
      'name': 'Beginner',
      'location': 'Ohio',
      'time': '2pm EST',
      'intensity': 'Low',
      'instructor': 'Kyle',
      'type': 'mix'
      },
    ]

export const ClassNames = () => {
  return (
    <div> 
    {/* Here is where we could map out the classes that were searched/filtered
    by the user but I used some dummy data for now */}
          {classes.map((obj) => {
            return (
              <div> 
                <div> 
                  <h3> Class: {obj.name} </h3>
                  <p> Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p> 
                  <span> Instructor: {obj.instructor} </span>
                  <ul>
                    <li> Location: {obj.location} </li>
                    <li> Time: {obj.time} </li>
                    <li> Intensity: {obj.intensity} </li>
                  </ul>
                </div> 
                <button> Book class </button>
                <button> Spaces Available </button>
              </div>
            )
          })}
    </div>
  )
}

export default BookClasses;
