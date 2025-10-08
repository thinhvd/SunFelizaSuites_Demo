import React from "react";

export const About3 = (props) => {
  return (
    <div id="about3">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/9.-Anh-tang-38-thap-F6-1.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>KẾT NỐI GIAO THÔNG THUẬN TIỆN</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3> */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
