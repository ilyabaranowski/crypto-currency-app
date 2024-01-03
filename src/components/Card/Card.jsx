import './styles.css'

const Card = ({balance, setBalance}) => {
  return (
      <div className='card'>
          <div className='card-block'>
              <p>CRYPTO CARD</p>
              <button onMouseEnter={() => console.log('---enter')}
                      onClick={() => setBalance(prev => prev + 1)}>Add money</button>
          </div>
          <div className='card-block'>
              <p>ILYA</p>
              <p>{balance} $</p>
          </div>
      </div>
  )
}

export default Card
