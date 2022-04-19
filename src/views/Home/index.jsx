import React from "react";
import Sliders from "./component/Sliders/Sliders";
import Hotproduct from "./component/Hotproducts/Hotproducts";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-sm-12 col-lg-8">
            <Sliders />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <Hotproduct />
          </div>
        </div>
      </div>
    </>
  );
}
