// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount() {
    this.fetchCryptoList()
  }

  fetchCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader" className="load-cont">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="content-cont">
            <h1 className="main-head">Cryptocurrency Tracker</h1>
            <img
              className="main-img"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <ul className="list-cont">
              <li className="table-top">
                <h1 className="table-head">Coin Type</h1>
                <div className="table-top-last">
                  <h1 className="table-head">USD</h1>
                  <h1 className="table-head">EURO</h1>
                </div>
              </li>
              {cryptoList.map(each => (
                <CryptocurrencyItem details={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}
export default CryptocurrenciesList
