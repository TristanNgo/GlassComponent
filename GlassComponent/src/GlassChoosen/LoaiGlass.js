import React, { Component } from "react";

export default class LoaiGlass extends Component {
  render() {
    return (
      <button
        className="btn btn-outline-secondary"
        onClick={() => this.handleChangeGlass(MauGlass)}
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
