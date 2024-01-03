import './styles.css'

const CoinsList = ({ coins }) => {
  return (
      <ul className='coins-list'>
          {coins.map((coin) => {
              return <li className='coins-item' key={coin.uuid}>
                  <div className='coins-item__info'>
                      <img className='coins-item__Logo' src={coin.iconUrl} alt={coin.name}/>
                      <p style={{color: coin.color}}>
                          {coin.name}/USD
                      </p>
                  </div>
                  <div className='coins-item__price'>
                      <p style={{color: coin.color}}>
                          {(+coin.price).toFixed(2)} USD
                      </p>
                      <p style={{color: coin.color}}>
                          {(+coin.btcPrice).toFixed(2)} BTC
                      </p>
                  </div>
              </li>
          })}
      </ul>
  )
}

export default CoinsList;
