📈 Stock Dashboard - NIFTY50 Tracker

A modern and responsive stock dashboard built with React.
This project uses mock data to display NIFTY50 stock information, charts, and UI components for demo and learning purposes.

🚀 Features
Core Functionality
Home page :Show the overview and motive of the app.
Mock Stock Data: All stock prices and market details are shown using mock JSON data.

Interactive Dashboard: Clean layout with metric cards and small charts.

Search Stock: Real-time search using debounced filtering.

Stock Details Page: Individual stock info (from mock data).

Fully Responsive: Breakpoints at 1000px, 768px, and 480px.

🎨 UI / UX Features

Glassmorphism Design (blurred cards, gradient background)

Smooth Animations (hover effects, transitions)

News Slider (auto-scroll using mock headlines)

AI Chatbot UI (static UI for design preview)

Colour-coded Metrics for gain/loss

🛠️ Technical Features

Mock Data Source: All values (price, percentage, charts, news) are mock-generated.

React Router for navigation

Custom hooks for search and filtering

Optimised Rendering using React.memo & debounce

Vite for fast build and development

🧰 Tech Stack

React 18 (Hooks)

React Router DOM v6

Pure CSS (Flexbox + Grid)

Vite

Custom SVG icons

Mock JSON files instead of APIs

📱 Responsive Breakpoints

Desktop (>1000px) → 5-column stock grid

Tablet (768px–1000px) → 3–4 column layout

Mobile (<768px) → Single column

Small Mobile (<480px) → Fully simplified layout

🎨 Design System
Colors

Background: #0D0907 → #212122 gradient

Profit: #10b981

Loss: #ef4444

Accent Purple: #a855f7

Accent Blue: #3b82f6

Accent Yellow: #fbbf24

Typography

Font: Inter

Heading weight: 900

Body: 500–600

Labels: uppercase with tight spacing

📊 Key Components

Dashboard – main page using mock stock data

StockDetails – shows data of a single mock stock

StockTable – sortable list (mock rows)

StockCard – animated cards

NewsSlider – rotates mock news items

AIChatbot – static UI widget

SearchBar – debounced search

🔧 Installation & Setup
# Clone the repository
git clone https://github.com/AnkitPradhan2004/Finance-Dashboard

cd client

npm install

npm run dev      # Start development
npm run build    # Production build

📈 Performance Features

Debounced search (300ms)

Memoized components

Lazy-loaded routes

Optimised images and placeholders

Smooth CSS animations

🌐 SEO & Accessibility

(SEO is basic here because the project uses mock data)

Proper meta tags

Semantic HTML

ARIA labels

Clean heading structure

📱 Mobile Features

Touch-friendly UI

Hamburger menu

Horizontal scrollable tables

Single-column layout for easy reading
<img width="1895" height="875" alt="Screenshot 2025-11-28 083836" src="https://github.com/user-attachments/assets/c8b3b896-6741-4793-b2d3-09fd91f47e9a" />
<img width="1894" height="875" alt="Screenshot 2025-11-28 083859" src="https://github.com/user-attachments/assets/b56fe0b4-d658-4193-873b-c2be957736ca" />
<img width="1894" height="875" alt="Screenshot 2025-11-28 083912" src="https://github.com/user-attachments/assets/b174ee91-df91-420f-a91e-dedc46c31ba0" />
