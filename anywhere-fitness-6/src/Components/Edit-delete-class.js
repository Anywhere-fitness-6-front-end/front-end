import React, { useState } from "react";


const dummyData = [{
        class_name:'Spin Class',
        instructor_name:'Jenny', 
        activity_name:'cycling', 
        address:'123 workout way',
        class_time:'2021-07-31T01:00:00.000',
        duration: 30, 
        intensity: 'easy',
        max_size: 15,
        available_slots: 5,
        id: 1
    },
    {
        class_name:'Yoga Class',
        instructor_name:'John', 
        activity_name:'Yoga', 
        address:'123 workout way',
        class_time:'2021-07-31T01:00:00.000',
        duration: 30, 
        intensity: 'easy',
        max_size: 15,
        available_slots: 5,
        id: 2
    }
]


const EditDeleteClass = (id) => {
const [classData, setClassData] = useState(dummyData)


//function needs params id to work properly 
const onDelete = (id) => {
    console.log(dummyData[0].id)
    const newSet = dummyData.filter(item => {return item.id !== 1})
    setClassData(newSet)
//     setClassData({
//       classData: dummyData.filter(item => item.id !== id)
    // const setClassData = classData.splice(classData.indexOf(value), 1);  
       
// })
console.log("this is the result", newSet)
}


const onSubmit = evt => {
    evt.preventDefault()
    //console.log("this is the result", classData)
}

const onChange = evt => {
    const { name, value } = evt.target;
    setClassData({...classData, [name]:value });
    // console.log(classData)
}
   
    return (
        <div>
            <h1>Edit and delete Class </h1>
        <form onSubmit={onSubmit}>
        <label>Class Name
                    <input
                        type='text'
                        name='class_name'
                        placeholder='Class Name'
                        value={classData.class_name}
                        onChange={onChange}    
                    />
                </label>
                <label>Instructor Name
                    <input
                        type='text'
                        name='instructor_name'
                        placeholder='Instructor Name'
                        value={classData.instructor_name}
                        onChange={onChange}    
                    />
                </label>
                <label>Activity Name
                    <input
                        type='text'
                        name='activity_name'
                        placeholder='Type of Class'
                        value={classData.activity_name}
                        onChange={onChange}
                    />
                </label>
                <label>Class Time
                   <input
                        type='datetime-local'
                        name='class_time'
                        value={classData.class_time}
                        onChange={onChange}
                   />      
                </label>
                <label>Duration
                    <input
                        type='number'
                        name='duration'
                        value={classData.duration}
                        onChange={onChange}
                    />
                </label>    
                <label>Intensity Level
                    <select
                        name='intensity'
                        value={classData.intensity}
                        onChange={onChange}
                    >
                        <option value=''>Select an Intensity</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </label>
                <label>Address
                    <input
                        type='text'
                        name='address'
                        placeholder='Address of Class'
                        value={classData.address}
                        onChange={onChange}
                    />
                </label>
                <label>Max Class Size
                    <input
                        type='number'
                        name='max_size'
                        value={classData.max_size}
                        onChange={onChange}
                    />
                </label>
                <label>Available Slots
                    <input
                        type='number'
                        name='available_slots'
                        value={classData.available_slots}
                        onChange={onChange}
                    />
                </label>
                <button id='editClass'>Edit Class</button>
                <button id='deleteClass' onClick={onDelete}>Delete Class</button>
        </form>
        </div>
    )
};

export default EditDeleteClass