import React from "react";
import CartBtn from "./buttons/CartBtn";
import Product from "./Product";

function Home() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" height="500px">
          <div className="carousel-item active">
            <img
              src="https://i.ytimg.com/vi/5bgWxMGnlvc/maxresdefault.jpg"
              className="carusel-image d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://3dnews.ru/assets/external/illustrations/2021/01/28/1031307/ai1.jpg"
              className="carusel-image d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://media.wired.com/photos/5d77f7218827100009bfebfc/master/w_2400,h_1350,c_limit/iPhone-11-Pro-Inline.jpg"
              className="carusel-image d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </>
  );
}

export default Home;
