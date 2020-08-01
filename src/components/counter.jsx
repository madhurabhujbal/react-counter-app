import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   //state includes data that is local or private to a component
  //   value: this.props.counter.value, //props include data that we give to a component. They are read-only and we cannot set values for props. They have to be set through state.
  // };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this); //part after '=' will return an instance of handleIncrement method. Methods in javascript are objects; bind is built in method in js. handleIncrement method is reset to function returned from bind method.
  // }

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div className="container flex-row">
        <div className="row">
          <div className="col-md-2">
            <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
              {this.formatCount()}
            </span>
          </div>

          <div className="col-md-2">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)} //For passing argument to event handler, define an arrow function, in body of function call the event handler, and pass argument to the event handler i.e product
              className="btn btn-secondary btn-md"
            >
              Increment
            </button>
          </div>

          <div className="col-md-2">
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
