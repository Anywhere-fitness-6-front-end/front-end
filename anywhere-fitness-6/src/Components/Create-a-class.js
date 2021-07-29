//import axios from "axios";
import React, { useState } from "react";
import '../App.css';
import '../index.css';


const createClassData = {
    class_name: '',
    instructor_name: '',
    activity_name: '',
    address: '',
    class_time: '',
    duration: 0,
    intensity: '',
    max_size: 0,
    available_slots:0,
};

const CreateAClass = () => {
    const [classData, setClassData] =useState(createClassData);
    

    
    const onSubmit = evt => { 
        evt.preventDefault()
        // axios.post('', classData)
        //     .then(res =>  {
        //       console.log(res)  
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    };

    const onChange = evt => {
        const { name, value } = evt.target;
        setClassData({...classData,[name]:value});
        console.log(classData)
    };
    return (
        <div className='createClassDiv'>
            <h1 className='createClassHeader'> Create a class</h1>
            <form className="createClassForm" onSubmit={onSubmit}>
                <label htmlFor='class_name' className='createClassLabel'>Class Name</label>
                    <input
                        className='createClassInput'
                        type='text'
                        name='class_name'
                        placeholder='Class Name'
                        value={classData.class_name}
                        onChange={onChange}    
                    />
                <label htmlFor='instructor_name' className='createClassLabel'>Instructor Name</label>
                    <input
                        className='createClassInput'
                        type='text'
                        name='instructor_name'
                        placeholder='Instructor Name'
                        value={classData.instructor_name}
                        onChange={onChange}    
                    />
                <label htmlFor='activity_name' className='createClassLabel'>Activity Name</label>
                    <input
                        className='createClassInput'
                        type='text'
                        name='activity_name'
                        placeholder='Type of Class'
                        value={classData.activity_name}
                        onChange={onChange}
                    />
                <label htmlFor='class_time' className='createClassLabel'>Class Time</label>
                   <input
                        className='createClassInput'
                        type='datetime-local'
                        name='class_time'
                        value={classData.class_time}
                        onChange={onChange}
                   />      
                <label htmlFor='duration' className='createClassLabel'>Duration</label> 
                    <input
                        className='createClassInput'
                        type='number'
                        name='duration'
                        value={classData.duration}
                        onChange={onChange}
                    />   
                <label htmlFor='intensity' className='createClassLabel'>Intensity Level</label>
                    <select
                        className='createClassInput'
                        name='intensity'
                        value={classData.intensity}
                        onChange={onChange}
                    >
                        <option value=''>Select an Intensity</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                <label htmlFor='address' className='createClassLabel'>Address</label>
                    <input
                        className='createClassInput'
                        type='text'
                        name='address'
                        placeholder='Address of Class'
                        value={classData.address}
                        onChange={onChange}
                    />
                <label htmlFor='max_size' className='createClassLabel'>Max Class Size</label>
                    <input
                        className='createClassInput'
                        type='number'
                        name='max_size'
                        value={classData.max_size}
                        onChange={onChange}
                    />
                <label htmlFor='available_slots' className='createClassLabel'>Available Slots</label>
                    <input
                        className='createClassInput'
                        type='number'
                        name='available_slots'
                        value={classData.available_slots}
                        onChange={onChange}
                    />
                <button id='addClass'>Add Class</button>
            </form>
        </div>
    )
};

export default CreateAClass