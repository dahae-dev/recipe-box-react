import React, { useState, useEffect } from "react";
import jsonp from "jsonp";

import { Header, HeroSection, CategorySection } from "../components";
import { getUrl } from "../utils";
import "../styles";

const Home = () => {
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    jsonp(getUrl("trend", 3), null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        setTrendData(data.hits);
      }
    })
  }, [])

  return (
    <div className="home">
      <Header />
      <HeroSection />
      <CategorySection
        heading="On trend right now"
        data={trendData}
      />
    </div>
  );
};

export default Home;
