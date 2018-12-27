//Import libraries
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    //To call React.Component constructor, else overriding
    super(props);
    //Only exception, direct assignment only while declaration
    this.state = { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // var that = this;
        //To update our state we can only use setState, this.state.lat wrong
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );
  }

  //Render is requirement of React
  render = () => {
    return <div>Latitude: {this.state.lat}</div>;
  };
}

//Render components
ReactDOM.render(<App />, document.querySelector("#root"));
