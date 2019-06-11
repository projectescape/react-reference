import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

class App extends React.Component {
  state = { lang: "eng" };

  onLanguageChange = lang => {
    this.setState({ lang });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select Language:
          <i className="flag us" onClick={() => this.onLanguageChange("eng")} />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("dutch")}
          />
        </div>
        <LanguageContext.Provider value={this.state.lang}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
