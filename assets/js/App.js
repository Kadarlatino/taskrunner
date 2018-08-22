import React, {Component} from "react";
import ReactDOM from "react-dom";

let url = __dirname+'api';




class App extends Component {
  render() {
    return (
      <div>
        <p>React here!</p>
        <p> {url} </p>
      </div>
    );
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
