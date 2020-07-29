import React, { Component } from "react";

//Navbar component does not have any event handlers or helper methods for calculation; no state, as data is updated by refering to props. It just has a render method. In this case, we can convert Navbar component to Stateless Functional Component i.e instead of class, define a function.

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {" "}
          {/* {this.props.totalCounters}{" "}  'this' works only in class. In SFC, we have to pass props as a parameter of arrow function and modify the reference accordingly*/}
          {props.totalCounters}{" "}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
