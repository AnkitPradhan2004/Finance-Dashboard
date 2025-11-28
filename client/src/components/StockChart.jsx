import { useMemo } from 'react'
export default function StockChart({ stock }) {
  // Generate mock chart data based on stock price
  const chartData = useMemo(() => {
    const basePrice = stock.price
    const data = []
    
    for (let i = 0; i < 30; i++) {
      const variation = (Math.random() - 0.5) * 0.1 // ±5% variation
      const price = basePrice * (1 + variation)
      data.push({
        day: i + 1,
        price: price,
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString()
      })
    }
    
    return data
  }, [stock.price])

  const maxPrice = Math.max(...chartData.map(d => d.price))
  const minPrice = Math.min(...chartData.map(d => d.price))
  const priceRange = maxPrice - minPrice
  
  const isPositive = stock.change > 0

  return (
    <div className="stock-chart-container">
      <h3 className="chart-title">30-Day Price Activity</h3>
      <div className="chart-wrapper">
        <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="none">
          {/* Grid lines */}
          {[0, 1, 2, 3].map(i => (
            <line
              key={i}
              x1="10"
              y1={10 + i * 20}
              x2="390"
              y2={10 + i * 20}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="0.5"
            />
          ))}
          
          {/* Price line */}
          <polyline
            fill="none"
            stroke={isPositive ? "#10b981" : "#ef4444"}
            strokeWidth="2"
            points={chartData.map((point, index) => {
              const x = 10 + (index / (chartData.length - 1)) * 380
              const y = 70 - ((point.price - minPrice) / priceRange) * 50
              return `${x},${y}`
            }).join(' ')}
          />
          
          {/* Data points */}
          {chartData.map((point, index) => {
            const x = 10 + (index / (chartData.length - 1)) * 380
            const y = 70 - ((point.price - minPrice) / priceRange) * 50
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="1.5"
                fill={isPositive ? "#10b981" : "#ef4444"}
                className="chart-point"
              />
            )
          })}
        </svg>
      </div>
      <div className="chart-info">
        <div className="chart-stat">
          <span className="chart-label">High</span>
          <span className="chart-value">₹{maxPrice.toFixed(2)}</span>
        </div>
        <div className="chart-stat">
          <span className="chart-label">Low</span>
          <span className="chart-value">₹{minPrice.toFixed(2)}</span>
        </div>
        <div className="chart-stat">
          <span className="chart-label">Range</span>
          <span className="chart-value">₹{priceRange.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}