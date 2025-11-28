# 📈 Stock Dashboard - NIFTY50 Tracker

A modern, responsive stock market dashboard built with React for tracking NIFTY50 stocks with real-time data visualization and analytics.

## 🚀 Features

### Core Functionality
- **Real-time Stock Data**: Live NIFTY50 stock prices and market data
- **Interactive Dashboard**: Clean, modern interface with metric cards and charts
- **Stock Search**: Real-time search with debounced filtering
- **Detailed Stock View**: Individual stock pages with comprehensive analytics
- **Responsive Design**: Mobile-first approach with breakpoints at 1000px, 768px, and 480px

### UI/UX Features
- **Glass Morphism Design**: Modern translucent cards with backdrop blur effects
- **Smooth Animations**: Hover effects, transitions, and loading animations
- **News Slider**: Auto-rotating news with scroll-left animation (3-second intervals)
- **AI Chatbot**: Floating chat widget with stock advice options
- **Color-coded Metrics**: Green/red indicators for profit/loss with visual borders

### Technical Features
- **SEO Optimized**: Meta tags, JSON-LD structured data, and accessibility features
- **Performance**: Debounced search, memoized filtering, and optimized rendering
- **Navigation**: React Router with dynamic routing and back navigation
- **Data Management**: Custom hooks for state management and API integration

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Routing**: React Router DOM v6
- **Styling**: Pure CSS with CSS Grid and Flexbox
- **Charts**: Custom SVG-based stock charts
- **Icons**: Custom SVG icons and components
- **Build Tool**: Vite for fast development and building

## 📱 Responsive Breakpoints

- **Desktop**: > 1000px - Full grid layout with 5-column stock cards
- **Tablet**: 768px - 1000px - 4-column layout with adjusted spacing
- **Mobile**: < 768px - Single column layout with hamburger menu
- **Small Mobile**: < 480px - Optimized for small screens

## 🎨 Design System

### Color Palette
- **Primary Background**: Linear gradients (#0D0907 to #212122)
- **Profit Indicators**: Green (#10b981) with borders and backgrounds
- **Loss Indicators**: Red (#ef4444) with borders and backgrounds
- **Accent Colors**: Purple (#a855f7), Blue (#3b82f6), Yellow (#fbbf24)
- **Chat Theme**: Ocean Green (#009688) for AI chatbot

### Typography
- **Font Family**: Inter, system fonts fallback
- **Headings**: 900 weight for emphasis
- **Body Text**: 500-600 weight for readability
- **Metric Labels**: Uppercase with letter spacing

## 📊 Key Components

1. **Dashboard**: Main landing page with metrics and stock table
2. **StockDetails**: Individual stock analysis page
3. **StockTable**: Sortable table with sticky columns
4. **StockCard**: Animated cards with hover effects
5. **NewsSlider**: Auto-rotating news component
6. **AIChatbot**: Floating chat widget
7. **SearchBar**: Real-time search with debouncing

## 🔧 Installation & Setup

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd client1/client

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📈 Performance Features

- **Debounced Search**: 300ms delay to prevent excessive filtering
- **Memoized Components**: React.memo for expensive calculations
- **Lazy Loading**: Dynamic imports for code splitting
- **Optimized Images**: Placeholder fallbacks for missing logos
- **Efficient Animations**: CSS transforms

## 🌐 SEO & Accessibility

- **Meta Tags**: Dynamic title and description updates
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **ARIA Labels**: Screen reader accessibility
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 📱 Mobile Features

- **Touch-friendly**: Large tap targets and swipe gestures
- **Hamburger Menu**: Collapsible navigation for mobile
- **Responsive Tables**: Horizontal scroll with sticky columns
- **Optimized Layout**: Single-column design for small screens
<img width="1895" height="875" alt="Screenshot 2025-11-28 083836" src="https://github.com/user-attachments/assets/c8b3b896-6741-4793-b2d3-09fd91f47e9a" />
<img width="1894" height="875" alt="Screenshot 2025-11-28 083859" src="https://github.com/user-attachments/assets/b56fe0b4-d658-4193-873b-c2be957736ca" />
<img width="1894" height="875" alt="Screenshot 2025-11-28 083912" src="https://github.com/user-attachments/assets/b174ee91-df91-420f-a91e-dedc46c31ba0" />
