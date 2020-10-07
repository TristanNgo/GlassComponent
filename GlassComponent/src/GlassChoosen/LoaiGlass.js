import React, { Component } from "react";

export default class LoaiGlass extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-secondary"
        onClick={() => this.props.handleChangeGlass(this.props.glass)}
      >
        <img
          src={this.props.glass.img}
          alt="hinh"
          style={{ width: 100, borderRadius: 20 }}
        />
      </button>
    );
  }
}
