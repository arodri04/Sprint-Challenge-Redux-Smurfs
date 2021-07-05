import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { Smurfs, addSmurf } from "../actions/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  componentDidMount() {
    this.props.Smurfs();
  }
  newSmurf = e => {
    this.props.addSmurf(this.state);
    this.setState({ name: "", age: "", height: "" });
  };
  // remove = id => {
  //   console.log(id);
  //   this.props.Remove(id);
  // };
  handleInputChange = e => {
    e.persist();
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <li>
                  {smurf.name} age: {smurf.age} height: {smurf.height}
                </li>

                {/* <button onClick={this.remove(smurf.id)}>remove</button> */}
              </div>
            );
          })}
        </div>
        <div className="smurfForm">
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button onClick={this.newSmurf}>Add to caught smurfs</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.smurfs);
  return {
    smurfs: state.smurfs,
    error: state.error,
    gathering: state.gathering
  };
};

export default connect(
  mapStateToProps,
  { Smurfs, addSmurf }
)(App);
