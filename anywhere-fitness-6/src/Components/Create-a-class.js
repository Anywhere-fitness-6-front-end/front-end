import React, { useState } from "react";

const createClass = {
    name: '',
    type: '',
    location: '',
    start: '',
    duration: '',
    intensity: '',
    size: '',
    value:'',
};

const CreateAClass = (/*need props for submit function*/) => {
    const [classData, setClassData] =useState(createClass);

    //submit function needs to pass initial form data
    const onSubmit = evt => { 
        evt.preventDefault()
    };

    const onChange = evt => {
        const {type, name, value} = evt.target;
        setClassData(type, name, value);
        console.log(evt.target)
    }

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