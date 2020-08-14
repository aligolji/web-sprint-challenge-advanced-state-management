import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/actions';

function Form(props) {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    console.log(props)

    const handleChange = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        });
    };


    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(smurf);
    };




    return (
        <form onSubmit={handleSubmit}>
            <input
                name='name'
                type='text'
                placeholder='smurf name'
                value={smurf.name}
                onChange={handleChange}
            />
            <input
                name='age'
                type='text'
                placeholder='age'
                value={smurf.age}
                onChange={handleChange}
            />
            <input
                name='height'
                type='text'
                placeholder='height in cm'
                value={smurf.height}
                onChange={handleChange}
            />
            <button type='submit'>Join The Village</button>
        </form>
    );
}

export default connect(null, { addSmurf })(Form);