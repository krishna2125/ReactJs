import React, { Component } from "react";
class Counter extends Component {
  /* state = {
    value: this.props.counter.Value,
  }; */
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */
  sytles = {
    fontSize: 10,
    fontWeight: "bold",
  };
  /*  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  }; */

  /* doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  }; */
  /*  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  } */
  //handleIncrement=()=>{console.log("Increment Clicked",this);}; here no need constructor
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgedMethod()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  getBadgedMethod() {
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
