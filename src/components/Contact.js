import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  render() {
    const { name, email, language } = this.props;
    return (
      <div className="hero">
        <h4>John Doe</h4>
        <ul>
          <li>My name is</li>
          <li>Austin Ogiza</li>
          <li> {name}</li>
          <li> {email}</li>
          <li> {language}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
