import React from "react";
import Sliders from "./component/Sliders/Sliders";
import Hotproduct from "./component/Hotproducts/Hotproducts";
import Newproduct from "./component/Newproducts/Newproduct";
import Products from "./component/Products";
import QC from "./component/QC/QC";
export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 col-sm-12 col-lg-8 my-4">
            <Sliders />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4 my-4">
            <QC />
          </div>
          <div className="col-md-12 col-sm-12 col-lg-12">
            <Hotproduct />
          </div>
          <hr className="my-4" />
          <div className="col-md-12 col-sm-12 col-lg-12">
            <Newproduct />
          </div>
          <hr className="my-4" />
          <div className="col-md-12 col-sm-12 col-lg-12">
            <Products />
          </div>
        </div>
      </div>
    </>
  );
}
