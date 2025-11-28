import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import StockDetails from './pages/StockDetails'

function App() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Set SEO meta description on app load
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Track NIFTY50 stocks with real-time prices, percentage changes, volume data, and detailed analytics. Professional stock market dashboard for investors and traders.')
    }
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.profile-section')) {
        setIsMenuOpen(false)
      }
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  return (
    <Router>
      <div className="app-container">
        <header className="header" role="banner">
          <div className="header-content">
            {/* App Logo */}
            <div className="logo" aria-label="Stock Dashboard Logo">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22,6 13.5,15.5 8.5,10.5 2,17"/>
                <polyline points="16,6 22,6 22,12"/>
              </svg>
              Discvr Dash
            </div>
            
            {/* Main Navigation */}
            <nav className="header-nav desktop-nav" role="navigation" aria-label="Main navigation">
              <Link to="/" className="nav-link" aria-label="Go to Home">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
                Home
              </Link>
              <Link to="/dashboard" className="nav-link" aria-label="Go to Dashboard">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                  <path d="m22 12-10-10v10z"/>
                </svg>
                Dashboard
              </Link>
            </nav>
            
            {/* User Profile Section */}
            <div className="profile-section">
              <div className="user-name desktop-only">Ankit Kumar Pradhan</div>
              <div className="profile-icon" aria-label="User profile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="8" r="4"/>
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                </svg>
              </div>
              
              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="mobile-menu">
                  <div className="mobile-user-name">Ankit Kumar Pradhan</div>
                  <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9,22 9,12 15,12 15,22"/>
                    </svg>
                    Home
                  </Link>
                  <Link to="/dashboard" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                      <path d="m22 12-10-10v10z"/>
                    </svg>
                    Dashboard
                  </Link>
                  <div className="mobile-nav-link logout" onClick={() => setIsMenuOpen(false)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16,17 21,12 16,7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Logout
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/stocks/:symbol" element={<StockDetails />} />
          </Routes>
        </main>
        
        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-sections">
              <div className="footer-section">
                <h4>Contact Us</h4>
                <p>📧 support@stockdash.in</p>
                <p>📞 +91 98765 43210</p>
                <p>💬 Live Chat Support</p>
              </div>
              <div className="footer-section">
                <h4>Location</h4>
                <p>🏢 StockDash India Pvt Ltd</p>
                <p>📍 Bandra Kurla Complex</p>
                <p>Mumbai, Maharashtra 400051</p>
              </div>
              <div className="footer-section">
                <h4>Help & Support</h4>
                <p>❓ FAQ</p>
                <p>📚 NIFTY Trading Guide</p>
                <p>🛠️ Technical Support</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <p>📊 NSE Market Analysis</p>
                <p>📈 Portfolio Tools</p>
                <p>🔔 Price Alerts</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 StockDash India Pvt Ltd. All rights reserved. | Privacy Policy | Terms of Service | SEBI Registered</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App