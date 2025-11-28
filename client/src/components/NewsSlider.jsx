import { useEffect, useState } from "react";
import { newsData } from "../data/newsData";
import AIChatbot from "./AIChatbot";

const NewsSlider = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % newsData.length);
        setIsTransitioning(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const news = newsData[index];

  return (
    <>
      <div className="news-slider-container">
        <h4 className="news-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{marginRight: '8px', verticalAlign: 'middle'}}>
            <path d="M3 3v18h18"/>
            <path d="m19 9-5 5-4-4-3 3"/>
          </svg>
          Trending News
        </h4>
        <div className={`news-slider ${isTransitioning ? 'transitioning' : ''}`} key={index}>
          <div className="news-image">
            <img
              src={news.image}
              alt="news"
              className="news-img"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x300/333/fff?text=News+Image'
              }}
            />
          </div>
          <div className="news-content">
            <h3 className="news-headline">
              {news.headline}
            </h3>
          </div>
        </div>
      </div>
      <AIChatbot />
    </>
  );
};

export default NewsSlider;