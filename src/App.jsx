import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import {useEffect, useState} from "react";
import {getCoins} from "./api/api.js";

function App() {
  const [balance, setBalance] = useState(0);
  const [coins, setCoins] = useState([]);
  const [fiteredCoins, setfiteredCoins] = useState([])

    useEffect(() => {
    const fetchData = async() => {
        const data = await getCoins();
        setCoins(data.coins);
        setfiteredCoins(data.coins)
    };
    fetchData();
    }, []);
    console.log(coins);
    return (
    <>
        <Header />
        <Main
            setCoins={setfiteredCoins}
            coins={coins}
            balance={balance}
            setBalance={setBalance}
            fiteredCoins={fiteredCoins}
        />
    </>
  )
}

export default App
