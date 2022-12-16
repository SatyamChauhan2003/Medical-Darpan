import React from "react";
import { BsFillCursorFill } from "react-icons/bs";

const Card = () => {
  return (
    <div>
      <div className="card" style={{ width: "20rem" }}>
        <img
          className="card-img-top"
          src="img.jpg"
          alt="Medicine Name"
          style={{ width: "280px", marginLeft: "18px", marginTop: "10px" }}
        />
        <div className="card-body">
          <p className="card-title text-center">
            <b>Favipiravir 400mg (Fabiflu) Tablets</b>
          </p>
          <p className="card-subtitle text-center ">
            <b className="text-danger">Rs 1,775 </b>/stripe
          </p>
          <p className="card-text mb-0 mt-3 text-center">
            <b>Glenmark Pharmaceutical Limited</b>
          </p>
          <p className="text-center">PARVAT PATIYA, SURAT, GUJRAT</p>
          <hr />
          <h5
            className="text-center text-success"
            style={{ cursor: "pointer" }}
          >
            <BsFillCursorFill /> Contact Supplier
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
