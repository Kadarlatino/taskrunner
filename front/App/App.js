import React, {Component} from "react";
import ReactDOM from "react-dom";
import SomeTitle from "./components/SomeTitle";
import FormSendTask from "./components/FormSendTask";

let loc = window.location.href;
let urlApi = loc + 'api';

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

  delData(e) {
    e.preventDefault();

    let request = new XMLHttpRequest();
    let json = JSON.stringify({
      id: this.id
    });

    request.open('POST', urlApi, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(json);

    this.that.fetchData();
  }

  componentDidMount() {
    this.fetchData();
  }

  getRowsContent() {
    let obj = this.state,
        size = Object.keys(obj).length,
        elem = [],
        { id, title, text } = obj;

    if(size > 0) {
      id.forEach((item, i)=>{
        if(id[i] != 0) {
          elem.push(
            <div className="task-wrapper" id="{ id }">
              <SomeTitle title={title[i]} />
              <p> {text[i]}</p>
              <a href="#" onClick={ this.delData.bind({id: id[i], that: this}) } >Delete it!</a>
            </div>);
        } else {
          elem.push(
            <div className="task-wrapper" id="{ id }">
              <SomeTitle title={title[i]} />
              <p> {text[i]}</p>
            </div>);
        }
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
          <FormSendTask />
        </div>
      </div>
    );
  }
};

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
