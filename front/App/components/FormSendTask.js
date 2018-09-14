import React, {Component} from "react";

class FormSendTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="task-wrapper">
        <form method="post" action="/" className="sendform">
          <input type="text" name="title" placeholder="Put some title here!" onChange={this.props.formInputChange} />
          <br/>
          <textarea name="text" placeholder="Put some text here here!" onChange={this.props.formTextareaChange}></textarea>
          <br/>
          <button type="submit" onClick={this.props.formSend} >Submit!</button>
        </form>
      </div>
    );
  }
}

export default FormSendTask
