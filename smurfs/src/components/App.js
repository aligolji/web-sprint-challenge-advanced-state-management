import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { getSmurfs } from '../actions/actions';
import SmurfsContainer from '../components/SmurfsContainer';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getSmurfs();
    console.log('inside CDM')
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div className='smurfs-container'>
          <h2>smurfs container - inside App</h2>
          <SmurfsContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { getSmurfs })(App);
