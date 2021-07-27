import React, {useState} from 'react';
import { useStateValue } from '../../context/StateProvider';


function ClassList({ id, name, location, date, time, duration, intensity, instructor, spots}) {
    const [{booked}, dispatch] = useStateValue();
    const [openSpots, setOpenSpots] = useState(spots);

    const bookClass = () => {
        setOpenSpots(spots - 1) 
        {/* Need to limit the booking to only once */}
        dispatch({
            type: 'BOOK_CLASS',
            class: {
                id, 
                name,
                location,
                date, 
                time,
                duration, 
                intensity,
                instructor, 
                spots
            }
        })
    };

    return (
        <div>
           <h2>{name}</h2> 
           <ol>
               <li> Location: {location} </li>
               <li> Date: {date} </li>
               <li> Time: {time} </li>
               <li> Duration: {duration} </li>
               <li> Intensity: {intensity} </li>
               <li> Instructor: {instructor} </li>
           </ol>
           <button onClick={bookClass}>Book Class</button> <span> </span>
           <button> Available Spots: {openSpots} </button>
        </div>
    )
}

export default ClassList
