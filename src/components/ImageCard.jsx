import React from "react";

const ImageCard = ({ href, label, src, alt }) => {
  return (
    <div className="card">
      <a href={href}>
        <img src={src} alt={alt} />
        <div className="overlay">
          <p className="label">{label}</p>
        </div>
      </a>
    </div>
  );
};

export default ImageCard;
