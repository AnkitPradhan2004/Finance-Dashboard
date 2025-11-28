import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useStocks } from '../hooks/useStocks'
import LoadingSpinner from '../components/Loading'
import StockChart from '../components/StockChart'

export default function StockDetails() {
  // Get stock symbol from URL and navigation function
  const { symbol } = useParams()
  const navigate = useNavigate()
  
  // Get stock data and loading state
  const { getStockBySymbol, loading } = useStocks()
  const [stock, setStock] = useState(null)

  // Load stock data and update SEO when component mounts
  useEffect(() => {
    if (!loading && symbol) {
      const stockData = getStockBySymbol(symbol)
      if (stockData) {
        setStock(stockData)
        
        // Update page title and meta tags for SEO
        document.title = `${stockData.symbol} - ${stockData.name} | Stock Dashboard`
        
        const metaDescription = document.querySelector('meta[name="description"]')
        if (metaDescription) {
          metaDescription.setAttribute('content', `View detailed information for ${stockData.name} (${stockData.symbol}). Current price: ₹${stockData.price.toFixed(2)}, Change: ${stockData.change > 0 ? '+' : ''}${stockData.change.toFixed(2)}%. Real-time stock data and analytics.`)
        }
        
        const ogTitle = document.querySelector('meta[property="og:title"]')
        if (ogTitle) {
          ogTitle.setAttribute('content', `${stockData.symbol} - ${stockData.name} | Stock Dashboard`)
        }
        
        const ogDescription = document.querySelector('meta[property="og:description"]')
        if (ogDescription) {
          ogDescription.setAttribute('content', `View detailed information for ${stockData.name} (${stockData.symbol}). Current price: ₹${stockData.price.toFixed(2)}, Change: ${stockData.change > 0 ? '+' : ''}${stockData.change.toFixed(2)}%.`)
        }
        
        // Add JSON-LD structured data
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": stockData.name,
          "tickerSymbol": stockData.symbol,
          "exchange": "NSE",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Stock Information",
            "itemListElement": [{
              "@type": "Offer",
              "price": stockData.price,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": new Date(Date.now() + 24*60*60*1000).toISOString().split('T')[0]
            }]
          },
          "marketCapitalization": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": stockData.marketCap
          }
        }
        
        let jsonLdScript = document.querySelector('#stock-structured-data')
        if (!jsonLdScript) {
          jsonLdScript = document.createElement('script')
          jsonLdScript.id = 'stock-structured-data'
          jsonLdScript.type = 'application/ld+json'
          document.head.appendChild(jsonLdScript)
        }
        jsonLdScript.textContent = JSON.stringify(structuredData)
      }
    }
    
    // Cleanup on unmount
    return () => {
      document.title = 'Stock Dashboard - NIFTY50 Tracker | Real-time Stock Market Data'
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Track NIFTY50 stocks with real-time prices, percentage changes, volume data, and detailed analytics. Professional stock market dashboard for investors and traders.')
      }
      
      // Remove JSON-LD structured data
      const jsonLdScript = document.querySelector('#stock-structured-data')
      if (jsonLdScript) {
        jsonLdScript.remove()
      }
    }
  }, [symbol, loading, getStockBySymbol])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!stock) {
    return (
      <div className="dashboard-container">
        <div className="no-results">
          <h3>Stock Not Found</h3>
          <p>The stock symbol "{symbol}" was not found.</p>
          <button onClick={() => navigate('/dashboard')} style={{marginTop: '20px', padding: '10px 20px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>
            Back to Dashboard
          </button>
        </div>
      </div>
    )
  }

  // Helper functions for formatting
  const isPositive = stock.change > 0
  const formatCurrency = (amount) => `₹${amount.toLocaleString()}`
  const formatMarketCap = (cap) => `₹${(cap / 10000000000).toFixed(2)}K Cr`

  return (
    <div className="dashboard-container">
      <div className="stock-details">
        {/* Back Navigation Button */}
        <button onClick={() => navigate('/dashboard')} className="back-button-inline">
          ← Back
        </button>
        
        {/* Stock Header Info */}
        <div className="stock-details-header">
          {/* Company Logo & Name */}
          <div className="stock-logo-section">
            <img 
              src={stock.logo} 
              alt={stock.name}
              className="stock-details-logo"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/80x80/ffffff/000000?text=${stock.symbol.charAt(0)}`
              }}
            />
            <div>
              <div className="stock-details-title">{stock.symbol}</div>
              <div className="stock-details-name">{stock.name}</div>
            </div>
          </div>
          
          {/* Current Price & Change */}
          <div className="price-section">
            <div className="current-price">{formatCurrency(stock.price)}</div>
            <div className={`price-change ${isPositive ? 'positive' : 'negative'}`}>
              <span style={{fontSize: '28px'}}>{isPositive ? '↗' : '↘'}</span>
              {isPositive ? '+' : ''}{stock.change.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Stock Chart */}
        <StockChart stock={stock} />

        {/* Stock Metrics Grid */}
        <div className="details-grid">
          <div className="detail-card">
            <div className="detail-label">Day Range</div>
            <div className="detail-value purple">
              {formatCurrency(stock.dayLow)} - {formatCurrency(stock.dayHigh)}
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-label">52 Week Range</div>
            <div className="detail-value blue">
              {formatCurrency(stock.weekLow52)} - {formatCurrency(stock.weekHigh52)}
            </div>
          </div>

          <div className="detail-card">
            <div className="detail-label">Volume</div>
            <div className="detail-value yellow">{stock.volume.toLocaleString()}</div>
          </div>

          <div className="detail-card">
            <div className="detail-label">Market Cap</div>
            <div className="detail-value purple">{formatMarketCap(stock.marketCap)}</div>
          </div>

          <div className="detail-card">
            <div className="detail-label">Day High</div>
            <div className="detail-value high">{formatCurrency(stock.dayHigh)}</div>
          </div>

          <div className="detail-card">
            <div className="detail-label">Day Low</div>
            <div className="detail-value low">{formatCurrency(stock.dayLow)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}