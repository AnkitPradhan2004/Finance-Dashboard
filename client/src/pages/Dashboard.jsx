import { useState, useMemo } from 'react'
import { useStocks } from '../hooks/useStocks'
import useDebounce from '../hooks/useDebounce'
import SearchBar from '../components/Searchbar'
import StockCard from '../components/Card'
import LoadingSpinner from '../components/Loading'
import StockTable from '../components/StockTable'
import MetricBox from '../components/MetricBox'
import NewsSlider from '../components/NewsSlider'

export default function Dashboard() {
  // Get stocks data and loading state
  const { stocks, loading } = useStocks()
  const [searchTerm, setSearchTerm] = useState('')
  
  // Debounce search to avoid too many filter operations
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  // Filter stocks based on search term
  const filteredStocks = useMemo(() => {
    if (!debouncedSearchTerm) return stocks
    
    return stocks.filter(stock => 
      stock.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      stock.symbol.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    )
  }, [stocks, debouncedSearchTerm])

  if (loading) {
    return <LoadingSpinner />
  }

  // Get first 5 stocks for bottom cards display
  const bottomCards = stocks.slice(0, 5)

  return (
    <div className="dashboard-layout">
      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <div className="dashboard-main">
          {/* Left Side - Welcome & Metrics */}
          <div className="dashboard-left">
            {/* Welcome Message */}
            <div className="welcome-box">
              <h1 className="welcome-title">Hi sir, Welcome</h1>
              <p className="welcome-subtitle">Invest your money with small risk!</p>
            </div>
            
            {/* Balance & Revenue Metrics */}
            <div className="metrics-row">
              <div className="balance-container">
                <MetricBox 
                  label="Balance" 
                  amount="₹14,032.56" 
                  className="balance-box"
                  gradient="linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)"
                />
                <div className="balance-percentage">+5.63%</div>
              </div>
              <MetricBox 
                label="Revenue Return" 
                amount="₹52345" 
                className="revenue-return-box"
                gradient="linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)"
              />
            </div>
          </div>

          {/* Right Side - Search & Stock List */}
          <div className="dashboard-right">
            {/* Search Bar */}
            <div className="search-section">
              <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>
            
            {/* Stock Table with Search Results */}
            <div className="stocks-list-container">
              <StockTable stocks={filteredStocks} />
              {filteredStocks.length === 0 && (
                <div className="no-results">
                  <h3>No stocks found</h3>
                  <p>Try adjusting your search terms</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Stock Cards */}
      <div className="cards-section-wrapper">
        <h2 className="cards-section-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="bell-icon">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          Latest Stock Updates
        </h2>
        <div className="bottom-cards-section">
        {bottomCards.map((stock) => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
        </div>
      </div>

      {/* News & AI Chat Section */}
      <NewsSlider />
    </div>
  )
}