import styles from './styles.module.css'
import Card from "../../components/Card/Card.jsx";
import CoinsList from "../../components/CoinsList/CoinsList.jsx";
import FilterBlock from "../../components/FilterBlock/FilterBlock.jsx";
import {useMemo} from "react";

const Main = ({ balance, setBalance, coins, fiteredCoins, setCoins }) => {
    const filterExpensiveCoins = () => {
        console.log('--f-work')
        return fiteredCoins.filter((coin) => coin.price > 1000)
    }
    // const expensiveCoins = filterExpensiveCoins();
    const expensiveCoins = useMemo(() => filterExpensiveCoins(), [fiteredCoins])
  return (
      <main className={styles.main}>
          <Card balance={balance} setBalance={setBalance} />
          <FilterBlock setCoins={setCoins} coins={coins}/>
          {coins.length > 0 ? (
              <CoinsList coins={expensiveCoins}/>
          ) : (
              <div>Loading...</div>
          )}
      </main>
  );
};

export default Main;
