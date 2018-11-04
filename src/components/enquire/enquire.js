import React from 'react';

class Enquire extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      contact: '',
      isValid: true
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler(e) {
    this.setState({[e.target.name]: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    const request = new XMLHttpRequest();
    request.open('POST', '/email/email.php', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(this.state);
  }

  render() {
    return <form onSubmit={this.submitHandler}>
      <input type="text"
        name="name"
        onChange={this.changeHandler}
        id="name"
        required
        value={this.state.name}
        placeholder="Name" />
      <input type="Email"
        name="email"
        id="email"
        required
        onChange={this.changeHandler}
        value={this.state.email}
        placeholder="Email" />
      <input type="text"
        name="contact"
        id="contact"
        required
        onChange={this.changeHandler}
        value={this.state.contact}
        placeholder="Contact No" />
      <input type="submit"
        name="enquire"
        id="enquire"
        value="Enquire" />
    </form>
  }

}

export default Enquire;