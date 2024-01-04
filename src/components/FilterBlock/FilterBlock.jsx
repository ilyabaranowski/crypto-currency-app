import './styles.css'
import {useContext, useEffect, useState} from "react";
import { memo } from 'react';
import {CoinsContext} from "../context/coinsContext.jsx";

const FilterBlock = ({ setCoins }) => {
    const coinsContext = useContext(CoinsContext)
    const {coins} = coinsContext
  const [value, setValue] = useState('');
  console.log('---render-filtered')
  useEffect(() => {
      const filteredCoins = coins.filter((coin) => {
          return coin.name.toLowerCase().includes(value.toLowerCase())
      })
      setCoins(filteredCoins)
  }, [value])

  return (
      <div className='filter-block'>
          <input
              onChange={(event) => setValue(event.target.value) }
              value={value}
              className='input'
              type='text'
              placeholder='bitcoin'
          />
      </div>
  );
};

export default memo(FilterBlock);
