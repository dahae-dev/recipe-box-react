import React from "react";

import ImageCard from "./ImageCard";

const CategorySection = ({ heading, data }) => {
  return (
    <div className="section-category">
      <h2 className="section-heading">{heading}</h2>
      <div className="row">
        {data.map(({ recipe }) => (
          <ImageCard
          key={recipe.label}
          href={recipe.url}
          src={recipe.image}
          alt={recipe.label}
          label={recipe.healthLabels[0]}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
