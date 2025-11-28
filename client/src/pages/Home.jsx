import { Link } from 'react-router-dom'
import { useStocks } from '../hooks/useStocks'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  const { stocks } = useStocks()
  
  // Get top 3 performers
  const topPerformers = stocks
    .filter(stock => stock.change > 0)
    .sort((a, b) => b.change - a.change)
    .slice(0, 3)

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-title-container">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/009/663/927/original/gold-coin-icon-3d-render-illustration-free-png.png" 
              alt="Gold Coin" 
              className="gold-coin-image"
              onError={(e) => {
                e.target.src = 'https://cdn-icons-png.flaticon.com/512/1611/1611179.png'
              }}
            />
            <h1 className="hero-title">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="hero-icon">
                <polyline points="22,6 13.5,15.5 8.5,10.5 2,17"/>
                <polyline points="16,6 22,6 22,12"/>
              </svg>
              Welcome to Discvr Dash
            </h1>
          </div>
          <p className="hero-subtitle">
            Your gateway to NIFTY50 stock market insights. Track, analyze, and discover investment opportunities with real-time data.
          </p>
          <Link to="/dashboard" className="cta-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="9" y1="9" x2="15" y2="15"/>
              <line x1="15" y1="9" x2="9" y2="15"/>
            </svg>
            Explore Dashboard
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Discvr Dash?</h2>
        <Slider {...{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        }} className="features-slider">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3>Real-time Data</h3>
            <p>Live NIFTY50 stock prices with instant updates and market movements.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <h3>Smart Search</h3>
            <p>Quickly find stocks with our intelligent search and filtering system.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <h3>Interactive Charts</h3>
            <p>Visualize stock performance with dynamic charts and analytics.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3>Top Performers</h3>
            <p>Discover trending stocks and market leaders with detailed insights.</p>
          </div>
        </Slider>
      </section>

      {/* Top Performers Section */}
      <section className="performers-section">
        <h2 className="section-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="section-icon">
            <polyline points="22,6 13.5,15.5 8.5,10.5 2,17"/>
            <polyline points="16,6 22,6 22,12"/>
          </svg>
          Today's Top Performers
        </h2>
        <div className="performers-grid">
          {topPerformers.map((stock, index) => (
            <div key={stock.symbol} className="performer-card">
              <div className="performer-rank">#{index + 1}</div>
              <img 
                src={stock.logo} 
                alt={stock.name}
                className="performer-logo"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/40x40/ffffff/000000?text=${stock.symbol.charAt(0)}`
                }}
              />
              <div className="performer-info">
                <h4>{stock.symbol}</h4>
                <p>{stock.name}</p>
                <div className="performer-price">₹{stock.price.toLocaleString()}</div>
                <div className="performer-change positive">+{stock.change.toFixed(2)}%</div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/dashboard" className="view-all-button">
          View All Stocks
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9,18 15,12 9,6"/>
          </svg>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">50</div>
            <div className="stat-label">NIFTY Stocks</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Market Tracking</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">Real-time</div>
            <div className="stat-label">Data Updates</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">100%</div>
            <div className="stat-label">Accuracy</div>
          </div>
        </div>
      </section>
    </div>
  )
}