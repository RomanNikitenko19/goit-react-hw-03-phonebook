import React, { Component } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (e) => {
    //     console.log(e.target.name);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact({
      name: this.state.name,
      number: this.state.number,
    });
       this.setState({
         name: "",
         number: "",
       });
  };
  render() {
    // console.log('this.props :>> ', this.props);
    return (
      <>
        <SectionTitle title="PhoneBook">
          <h2 className="title">PhoneBook</h2>
        </SectionTitle>
        <form  onSubmit={this.onHandleSubmit}>
          <label>
            Name
            <input
              className="input"
              onChange={this.onHandleChange}
              name="name"
              type="text"
              value={this.state.name}
              placeholder="enter name"
            />
          </label>
          <label>
            Number
            <input
              className="input"
              onChange={this.onHandleChange}
              name="number"
              type="text"
              value={this.state.number}
              placeholder="enter number"
            />
          </label>
          <button className="btn" type="submit">
            ADD CONTACT
          </button>
        </form>
      </>
    );
  }
}

export default Form;

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
