import { useNavigate } from 'react-router-dom'

export default function StockTable({ stocks }) {
  const navigate = useNavigate()
  return (
    <div className="stock-table-wrapper">
      <table className="stock-table">
        <thead>
          <tr>
            <th className="sticky-col">Symbol</th>
            <th className="sticky-col-2">Company</th>
            <th className="sticky-col-3">Price</th>
            <th>Change %</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => {
            const isPositive = stock.change > 0
            return (
              <tr 
                key={stock.symbol} 
                className="clickable-row"
                onClick={() => navigate(`/stocks/${stock.symbol}`)}
              >
                <td className="sticky-col">{stock.symbol}</td>
                <td className="sticky-col-2">{stock.name}</td>
                <td className="sticky-col-3 text-right">₹{stock.price.toFixed(2)}</td>
                <td className={`text-right ${isPositive ? 'positive' : 'negative'}`}>
                  {isPositive ? '+' : ''}{stock.change.toFixed(2)}%
                </td>
                <td className="text-right">{stock.volume.toLocaleString()}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}