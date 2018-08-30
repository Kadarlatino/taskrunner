import React, {Component} from "react";
import ReactDOM from "react-dom";

let urlApi = window.location.href + 'api';

console.log('Im React App!');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(urlApi)
      .then(response => response.json())
      .then(data => this.setState(data))
      .catch(err => console.log(err));
  }

  render() {
    // let { id, title, text }= this.state.data;

    return (
      <div>
        <p>React here!</p>
        <p> {urlApi} </p>
        <div>
          вфывфывыф
        </div>
      </div>
    );
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
