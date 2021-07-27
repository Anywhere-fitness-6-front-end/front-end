import axios from "axios";
import React, { useState } from "react";


const createClassData = {
    name: '',
    type: '',
    location: '',
    start: '',
    duration: '',
    intensity: '',
    size: '',
};

const CreateAClass = () => {
    const [classData, setClassData] =useState(createClassData);
    

    //submit function needs to pass initial form data
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
                <label>Name
                    <input
                        type='text'
                        name='name'
                        placeholder='Class Name'
                        value={classData.name}
                        onChange={onChange}    
                    />
                </label>
                <label>Type
                    <input
                        type='text'
                        name='type'
                        placeholder='Type of Class'
                        value={classData.type}
                        onChange={onChange}
                    />
                </label>
                <label>Start Time
                   <input
                        type='datetime-local'
                        name='start'
                        value={classData.start}
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
                <label>Location
                    <input
                        type='text'
                        name='location'
                        placeholder='Location of Class'
                        value={classData.location}
                        onChange={onChange}
                    />
                </label>
                <label>Max Class Size
                    <input
                        type='number'
                        name='size'
                        value={classData.size}
                        onChange={onChange}
                    />
                </label>
                <button id='addClass'>Add Class</button>
            </form>
        </div>
    )
};

export default CreateAClass