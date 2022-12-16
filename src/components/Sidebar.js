import React from "react";
import Card from "./Card";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <a className="active text-center" href="#home">
          Related Category
        </a>
        <a href="#">Paracetamol Tablets</a>
        <a href="#">Paracetamol Syrup</a>
        <a href="#">Paracetamol Powder</a>
        <a href="#">Mefenamic Paracetamol Syrup</a>

        <a className="active mt-4 text-center" href="#home">
          Related Brands
        </a>
        <a href="#">Cipmol Paracetamol</a>
        <a href="#">Pandal Paracetamol Tablets</a>
        <a href="#">Combiflam</a>
        <a href="#">Calpol Paracetamol Tablets</a>
        <a href="#">Sumo Tablets</a>

        <a className="active mt-4 text-center" href="#home">
          Business Type
        </a>
        <a href="#">Wholesaler</a>
        <a href="#">Manufacturer</a>
        <a href="#">Retailer</a>
        <a href="#">Exporter</a>

        <a className="active mt-4 text-center" href="#home">
          Strength
        </a>
        <a href="#">500mg</a>
        <a href="#">600mg</a>

        <a className="active mt-4 text-center" href="#home">
          Manufacturer
        </a>
        <a href="#">Intas Pharmaceutical Ltd</a>
        <a href="#">Alkem Laboratories Ltd</a>
      </div>

      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Sidebar;
