import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  renderSubmit(val) {
    let text = val === "eng" ? "Submit" : "Voorlegen";
    return text;
  }

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {val => this.renderSubmit(val)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
