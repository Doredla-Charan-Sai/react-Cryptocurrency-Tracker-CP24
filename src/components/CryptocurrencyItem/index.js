// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = details
  return (
    <li className="list-item">
      <div className="logo-name">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="table-top-last">
        <p className="table-head">{usdValue}</p>
        <p className="table-head">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
