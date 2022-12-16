import React from "react";

const Search = () => {
  return (
    <div className="searchbar">
    <p>Medical Darpan > Search > <b>FabiFlu Tablet</b></p>
    <input type="text"  placeholder="Paracetamol"/>
    <button type="submit" className="searchBtn">Search</button>
    <h5>Paracetamol (128 products)</h5>
    </div>
  );
};

export default Search;
