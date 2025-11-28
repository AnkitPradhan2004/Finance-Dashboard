import { Link } from 'react-router-dom'

export default function StockCard({ stock }) {
  const isPositive = stock.change > 0
  const formatCurrency = (amount) => `₹${amount.toLocaleString()}`
  const formatVolume = (vol) => {
    if (vol >= 10000000) return `${(vol / 10000000).toFixed(1)}Cr`
    if (vol >= 100000) return `${(vol / 100000).toFixed(1)}L`
    return vol.toLocaleString()
  }
  
  return (
    <Link to={`/stocks/${stock.symbol}`}>
      <div className={`stock-card ${isPositive ? 'profit-card' : 'loss-card'}`}>
        <div className="stock-header">
          <img 
            src={stock.logo} 
            alt={stock.name}
            className="company-logo"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/40x40/ffffff/000000?text=${stock.symbol.charAt(0)}`
            }}
          />
          <div className="stock-info">
            <div className="stock-name">{stock.name}</div>
            <div className="stock-symbol">{stock.symbol}</div>
          </div>
        </div>
        
        <div className="stock-price">{formatCurrency(stock.price)}</div>
        <div className={`stock-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '+' : ''}{stock.change.toFixed(2)}%
        </div>
        
        <div className="stock-metrics">
          <div className="metric-row">
            <span className="metric-label">Volume</span>
            <span className="metric-value">{formatVolume(stock.volume)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}