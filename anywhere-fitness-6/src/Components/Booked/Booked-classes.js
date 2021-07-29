// import React from 'react';
// import { useStateValue } from '../../context/StateProvider';


// function BookedClasses({ id, name, location, date, time, duration, intensity, instructor, spots}) {
//     const [{booked}, dispatch] = useStateValue();

//     const dropClass = () => {
//         dispatch({
//             type: 'DROP_CLASS',
//             id: id
//      })}
     
//     return (
//         <div>
//                 <div>
//                     <h1> {name} </h1> 
//                     <ol>
//                         <li> Location: {location} </li>
//                         <li> Date: {date} @ {time} </li>
//                         <li> Duration: {duration} </li>
//                         <li> Intensity: {intensity} </li>
//                         <li> Instructor: {instructor} </li>
//                     </ol>
//                     <button onClick={dropClass}> Cancel </button> {/* DROP_CLASS action */}
//                     <button> Reschedule </button>  {/* Some new action */}
//                 </div>
//         </div>
//     )
// }

// export default BookedClasses
