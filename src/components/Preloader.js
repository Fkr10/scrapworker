import React from "react";

const Preloader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div id="preloader" className="preloader">
      <div className="spinner"></div>
    </div>
  );
};

export default Preloader;
