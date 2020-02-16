import React from "react";

const HeroSection = () => {
  return (
    <div className="page-header-home">
      <div className="page-header-hero-image">
        <div className="main-search">
          <div className="container">
            <span className="floating-title">Search & Find</span>
            <div className="inner-container">
              <p className="heading">What would you like to cook?</p>
              <form>
                <input
                  type="search"
                  placeholder="Recipes, ingredients, trends ..."
                />
                <button type="submit">
                  <i className="fa fa-search search-icon"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
