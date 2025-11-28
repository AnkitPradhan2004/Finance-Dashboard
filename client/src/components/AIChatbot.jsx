import { useState } from 'react'

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const options = [
    {
      id: 1,
      text: "Want to know a 100% profit stock up to 3% return",
      response: "Based on current market analysis, consider TCS, Infosys, and HDFC Bank for stable 2-3% returns with lower risk."
    },
    {
      id: 2,
      text: "Show me high-growth potential stocks",
      response: "High-growth stocks to watch: Adani Green, Zomato, and Paytm. These have higher risk but potential for 5-10% returns."
    },
    {
      id: 3,
      text: "Best dividend-paying stocks",
      response: "Top dividend stocks: Coal India (8.5% yield), ONGC (7.2% yield), and ITC (5.8% yield) for steady income."
    },
    {
      id: 4,
      text: "Market analysis and trends",
      response: "Current market shows bullish trend in IT and pharma sectors. Banking sector is consolidating. Consider diversification."
    }
  ]

  const handleOptionClick = (option) => {
    setSelectedOption(option)
  }

  const resetChat = () => {
    setSelectedOption(null)
  }

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="chat-icon" onClick={() => setIsOpen(!isOpen)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="ai-chatbot-widget">
          <div className="chatbot-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            <span>AI Assistant</span>
            <button className="close-chat" onClick={() => setIsOpen(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        
        <div className="chatbot-content">
          {!selectedOption ? (
            <>
              <div className="chatbot-message">
                <p>Do you need any help? Please feel free to ask:</p>
              </div>
              <div className="chatbot-options">
                {options.map((option) => (
                  <button
                    key={option.id}
                    className="chatbot-option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="chatbot-response">
              <div className="user-question">
                <strong>You asked:</strong> {selectedOption.text}
              </div>
              <div className="ai-response">
                <strong>AI Response:</strong> {selectedOption.response}
              </div>
              <button className="reset-button" onClick={resetChat}>
                Ask Another Question
              </button>
            </div>
          )}
        </div>
        </div>
      )}
    </>
  )
}

export default AIChatbot