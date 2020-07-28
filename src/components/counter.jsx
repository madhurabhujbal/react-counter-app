import React, { Component } from "react";

class Counter extends Component {
  state = {
    //state includes data that is local or private to a component
    value: this.props.value, //props include data that we give to a component. They are read-only and we cannot set values for props. They have to be set through state.
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); //part after '=' will return an instance of handleIncrement method. Methods in javascript are objects; bind is built in method in js. handleIncrement method is reset to function returned from bind method.
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} //For passing argument to event handler, define an arrow function, in body of function call the event handler, and pass argument to the event handler i.e product
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={this.handleDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
