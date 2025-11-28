import { useState, useEffect } from 'react'
import NIFTY_STOCKS from '../data/niftyStocks'

export function useStocks() {
  const [stocks, setStocks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // simulate API call
    const loadStocks = () => {
      setTimeout(() => {
        setStocks(NIFTY_STOCKS)
        setLoading(false)
      }, 500)
    }

    loadStocks()
  }, [])

  const getStockBySymbol = (symbol) => {
    return stocks.find(stock => stock.symbol === symbol)
  }

  return { stocks, loading, getStockBySymbol }
}