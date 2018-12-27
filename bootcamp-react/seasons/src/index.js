//Import libraries
import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   //To call React.Component constructor, else overriding
  //   super(props);
  //   //Only exception, direct assignment only while declaration
  //   // this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("My component was rendered");
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // var that = this;
        //To update our state we can only use setState, this.state.lat wrong
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("My component was updated");
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.last} />;
    } else {
      return <Spinner message="Please Accept the location request" />;
    }
  }

  //Render is requirement of React
  render = () => {
    return <div className="border red">{this.renderContent()}</div>;
  };
}

//Render components
ReactDOM.render(<App />, document.querySelector("#root"));
