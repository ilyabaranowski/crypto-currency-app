import styles from './styles.module.css'
import Card from "../Card/Card.jsx";
import CoinsList from "../CoinsList/CoinsList";
import FilterBlock from "../FilterBlock/FilterBlock.jsx";

const Main = ({ balance, setBalance, coins, fiteredCoins, setCoins }) => {
    console.log(balance);
  return (
      <main className={styles.main}>
          <Card balance={balance} setBalance={setBalance} />
          <FilterBlock setCoins={setCoins} coins={coins}/>
          {coins.length > 0 ? <CoinsList coins={fiteredCoins}/> : <div>Loading...</div>}
      </main>
  )
}

export default Main
