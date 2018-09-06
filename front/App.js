import React, {Component} from "react";
import ReactDOM from "react-dom";

let loc = window.location.href;
let urlApi = loc + 'api';


class SomeTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {title: props.title};
  }

  render() {
    return(<h5>{this.state.title}</h5>);
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  formSend() {
    return (
      <form >
        <input type="text" name="title"/>
        <textarea name="text"></textarea>
        <button type="submit" value="Submit!"/>
      </form>
    );
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

    let rend = this.rend;

    request.open('POST', urlApi, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(json);
  }

  reRender() {
    this.render();
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
        elem.push(
          <div className="task-wrapper" id="{ id }">
            <SomeTitle title={title[i]} />
            <p> {text[i]}</p>
            <a href="#" onClick={ this.delData.bind({id: id[i], rend: this.reRender}) } >Delete it!</a>
          </div>);
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
