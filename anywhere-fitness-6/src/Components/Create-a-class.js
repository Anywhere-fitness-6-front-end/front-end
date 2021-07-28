//import axios from "axios";
import React, { useState } from "react";


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
        <div>
            <h1> Create a class</h1>
            <form className="createClassForm" onSubmit={onSubmit}>
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
                <button id='addClass'>Add Class</button>
            </form>
        </div>
    )
};

export default CreateAClass