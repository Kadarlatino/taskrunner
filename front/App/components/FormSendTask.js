import React, {Component} from "react";

class FormSendTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    
  }

  handleTitleChange() {
    //this.setState({title: e.target.value });
    console.log("Fetched: " + this);
  }

  handleTextChange() {
    //this.setState({text: e.target.value });
    console.log("Fetched: " + this);
  }


  formSend(e) {
    e.preventDefault();

    // fetch('/users', {
    //   method: 'POST',
    //   body: new FormData(form)
    // });
    console.log("Fetched: " + this);
  }

  render() {
    return(
      <form method="post" action="/">
        <input type="text" name="title" placeholder="Put some title here!"/>
        <br/>
        <textarea name="text" placeholder="Put some text here here!"></textarea>
        <br/>
        <button type="submit" onClick={this.formSend} >Submit!</button>
      </form>
    );
  }
}

export default FormSendTask
