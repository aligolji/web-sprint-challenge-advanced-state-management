import React from 'react';

export default function Smurf(props) {
    const { name, age, height } = props.smurf
    return (
        <div>
            <h3>{name} Smurf</h3>
            <h4>Age: {age}</h4>
            <h4>Height: {height}cm</h4>
        </div>
    )
}