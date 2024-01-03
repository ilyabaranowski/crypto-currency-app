import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import {useEffect, useState} from "react";
import {getCoins} from "./api/api.js";

function App() {
  const [balance, setBalance] = useState(0);
  const [coins, setCoins] = useState([]);

    useEffect(() => {
    const fetchData = async() => {
        const data = await getCoins();
        setCoins(data.coins);
    };
    fetchData()
    }, []);
    console.log(coins);
    return (
    <>
        <Header />
        <Main coins={coins} balance={balance} setBalance={setBalance} />
    </>
  )
}

export default App
