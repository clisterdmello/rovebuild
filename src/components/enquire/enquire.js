import React from 'react';

class Enquire extends React.Component {
  constructor(props) {
    super();

    this.state = {
      name: '',
      email: '',
      contact: '',
      url: '',
      isValid: true,
      ismailSent: null,
      group: props.group,
      pkgid: props.pkgid
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    
  }
  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  submitHandler(e) {
    e.preventDefault();
    const { name, email, contact, group, pkgid} = this.state;
    const request = new XMLHttpRequest();
    const url = `/email/email.php?name=${name}&email=${email}&contact=${contact}&group=${group}&pkgid=${pkgid}`;
    request.open('GET', url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send();
    this.setState({ ismailSent: true });
  }

  render() {
    return <React.Fragment>
      {this.state.ismailSent && <span className="colorGreen feedback">Thanks for contacting us, we will get back to you shortly</span>}
      <form onSubmit={this.submitHandler}>
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
        <input type="hidden"
          readOnly
          value={window.location.url} />
        <input type="submit"
          name="enquire"
          id="enquire"
          value="Enquire" />
      </form></React.Fragment>
  }

}

export default Enquire;