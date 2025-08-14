import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Sunfelizas Suite
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                Tổng quan
              </a>
            </li>
            <li>
              <a href="#about2" className="page-scroll">
                Vị trí
              </a>
            </li>
            <li>
              <a href="#about3" className="page-scroll">
                Giao thông
              </a>
            </li>
            <li>
              <a href="#about4" className="page-scroll">
                Thiết kế
              </a>
            </li>
            <li>
              <a href="#about5" className="page-scroll">
                Quy mô
              </a>
            </li>
            <li>
              <a href="#about6" className="page-scroll">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="#about7" className="page-scroll">
                Chi tiết
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
