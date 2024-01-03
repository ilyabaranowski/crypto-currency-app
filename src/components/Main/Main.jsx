import styles from './styles.module.css'
import Card from "../Card/Card.jsx";
import CoinsList from "../CoinsList/CoinsList";
import FilterBlock from "../FilterBlock/FilterBlock.jsx";

const Main = ({ balance, setBalance, coins }) => {
    console.log(balance);
  return (
      <main className={styles.main}>
          <Card balance={balance} setBalance={setBalance} />
          <FilterBlock />
          {coins.length > 0 ? <CoinsList coins={coins}/> : <div>Loading...</div>}
      </main>
  )
}

export default Main
