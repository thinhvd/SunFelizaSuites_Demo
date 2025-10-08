import React from "react";

export const About4 = (props) => {
  return (
    <div id="about4">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>THIẾT KẾ CỦA SUN FELIZA SUITES</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3> */}
              
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/10.-Anh-vuon-Phuc-Tho-1.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};


