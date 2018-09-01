import React, {Component} from "react";
import ReactDOM from "react-dom";

let urlApi = window.location.href + 'api';

console.log('Im React App!');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  fetchData() {
    fetch(urlApi)
    .then(response => response.json())
    .then(data => this.setState(data))
    .catch(err => console.log(err));

  }

  componentDidMount() {
    this.fetchData();
  }

  getRowsContent() {
    let obj = this.state,
        size = Object.keys(obj).length,
        elem = [],
        { id, title, text }= obj;

    if(size > 0) {
      id.forEach((item, i)=>{
        elem.push(<div class="task-wrapper"> <h5> { title[i] } </h5> <p> {text[i]} </p> </div>);
      });
    }

    return elem;
  }

  render() {
    return (
      <div>
        <h2>React here!</h2>
        <div>
          { this.getRowsContent() }
        </div>
      </div>
    );
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
