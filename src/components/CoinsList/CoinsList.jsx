import './styles.css'
import {useContext} from "react";
import {CoinsContext} from "../context/coinsContext.jsx";

const CoinsList = () => {
    const coinsContext = useContext(CoinsContext)
    const {filteredCoins} = coinsContext
  return (
      <ul className='coins-list'>
          {filteredCoins.map((coin) => {
              return <li className='coins-item' key={coin.uuid}>
                  <div className='coins-item__info'>
                      <img className='coins-item__Logo' src={coin.iconUrl} alt={coin.name}/>
                      <p style={{color: coin.color}}>
                          {coin.name}/USD
                      </p>
                  </div>
                  <div className='coins-item__price'>
                      <p style={{color: coin.color}}>
                          {(+coin.price).toFixed(3)} USD
                      </p>
                      <p style={{color: coin.color}}>
                          {(+coin.btcPrice).toFixed(3)} BTC
                      </p>
                  </div>
              </li>
          })}
      </ul>
  )
}

export default CoinsList;
