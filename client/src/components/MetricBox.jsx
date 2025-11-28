export default function MetricBox({ label, amount, className = "", gradient }) {
  return (
    <div className={`metric-box ${className}`} style={{ background: gradient }}>
      <div className="metric-label">{label}</div>
      <div className="metric-amount">{amount}</div>
    </div>
  )
}