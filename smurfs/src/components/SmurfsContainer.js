import React from 'react';
import {connect } from 'react-redux';

import Smurf from '../components/Smurf';

function SmurfsContainer(props) {
    console.log(props)

    return(
        <div>
            {props.smurfs.map((smurf) => {
                return <Smurf smurf={smurf} key={smurf.id} />;
                })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, {})(SmurfsContainer);