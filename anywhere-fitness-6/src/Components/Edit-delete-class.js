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
        <div className='editClassDiv'>
            <h1 className='editClassHeader'>Edit and delete Class </h1>
        <form className="editClassForm" onSubmit={onSubmit}>
        <label htmlFor='Class Name' className='editClassLabel'>Class Name</label>
                    <input
                        className='editClassInput'
                        type='text'
                        name='class_name'
                        placeholder='Class Name'
                        value={classData.class_name}
                        onChange={onChange}    
                    /> 
                <label htmlFor='instructor_name' className='editClassLabel'>Instructor Name</label>
                    <input
                        className='editClassInput'
                        type='text'
                        name='instructor_name'
                        placeholder='Instructor Name'
                        value={classData.instructor_name}
                        onChange={onChange}    
                    />
                <label htmlFor='activity_name' className='editClassLabel'>Activity Name</label>
                    <input
                        className='editClassInput'
                        type='text'
                        name='activity_name'
                        placeholder='Type of Class'
                        value={classData.activity_name}
                        onChange={onChange}
                    />
                <label htmlFor='class_time' className='editClassLabel'>Class Time</label>
                   <input
                        className='editClassInput'
                        type='datetime-local'
                        name='class_time'
                        value={classData.class_time}
                        onChange={onChange}
                   />      
                <label htmlFor='duration' className='editClassLabel'>Duration</label>
                    <input
                        className='editClassInput'
                        type='number'
                        name='duration'
                        value={classData.duration}
                        onChange={onChange}
                    />    
                <label htmlFor='intensity' className='editClassLabel'>Intensity Level</label>
                    <select
                        className='editClassInput'
                        name='intensity'
                        value={classData.intensity}
                        onChange={onChange}
                    >
                        <option value=''>Select an Intensity</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                <label htmlFor='address' className='editClassLabel'>Address</label>
                    <input
                        className='editClassInput'
                        type='text'
                        name='address'
                        placeholder='Address of Class'
                        value={classData.address}
                        onChange={onChange}
                    />
                <label htmlFor='max_size' className='editClassLabel'>Max Class Size</label>
                    <input
                        className='editClassInput'
                        type='number'
                        name='max_size'
                        value={classData.max_size}
                        onChange={onChange}
                    />
                <label htmlFor='available_slots' className='editClassLabel'>Available Slots</label>
                    <input
                        className='editClassInput'
                        type='number'
                        name='available_slots'
                        value={classData.available_slots}
                        onChange={onChange}
                    />
                <button id='editClass'>Edit Class</button>
                <button id='deleteClass' onClick={onDelete}>Delete Class</button>
        </form>
        </div>
    )
};

export default EditDeleteClass