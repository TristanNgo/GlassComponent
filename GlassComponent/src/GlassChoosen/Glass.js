import React, { Component } from "react";
import LoaiGlass from "./LoaiGlass";

/**
 * Các bước thực hiện
 * 1/ dàn layout ( html css ) =>>
   2/ xác định data thay đổi và lưu vào state
   3/ lấy data trong state đi binding ra jsx
   4/ bắt sự kiện click cho các cái kính ( có tham số )
   5/ cập nhật lại trạng thái của state 
 */
export default class Glass extends Component {
  MauGlass = [
    {
      img: "./img/glassesImage/v1.png",
      price: "$30",
      name: "GUCCI G8850U",
    },
    {
      img: "./img/glassesImage/v2.png",
      price: "$50",
      name: "GUCCI G8759H",
    },
    {
      img: "./img/glassesImage/v3.png",
      price: "$30",
      name: "DIOR D6700HQ",
    },
    {
      img: "./img/glassesImage/v4.png",
      price: "$30",
      name: "DIOR D6005U",
    },
    {
      img: "./img/glassesImage/v5.png",
      price: "$30",
      name: "PRADA P8750",
    },
    {
      img: "./img/glassesImage/v6.png",
      price: "$30",
      name: "PRADA P9700",
    },
    {
      img: "./img/glassesImage/v7.png",
      price: "$30",
      name: "FENDI F8750",
    },
    {
      img: "./img/glassesImage/v8.png",
      price: "$30",
      name: "GUCCI G8850U",
    },
    {
      img: "./img/glassesImage/v9.png",
      price: "$30",
      name: "FENDI F4300",
    },
  ];
  state = {
    glassDetail: {
      img: "./img/glassesImage/v1.png",
      price: "$30",
      name: "GUCCI G8850U",
    },
  };
  renderListGlass = () => {
    return this.MauGlass.map((glass, index) => {
      return (
        <div className="col-3">
          <LoaiGlass glass={glass} handleChangeGlass={this.handleChangeGlass} />
        </div>
      );
    });
  };
  handleChangeGlass = (glassDetail) => {
    this.setState({
      glassDetail,
    });
  };
  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <div
                  className="card text-left"
                  style={{ width: 300, position: "relative" }}
                >
                  <img
                    className="card-img-top"
                    src="./img/glassesImage/model.jpg"
                    alt="hinh model"
                  />
                  <img
                    src={this.state.glassDetail.img}
                    alt="kinh"
                    style={{
                      width: 170,
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "16%",
                    }}
                  />
                  <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                      {this.state.glassDetail.price}
                    </span>
                    <p className="card-text mt-2">
                      {this.state.glassDetail.name}
                    </p>
                  </div>
                </div>
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                {this.renderListGlass()}
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
