import './styles.css'
import {useEffect, useState} from "react";
import { memo } from 'react';

const FilterBlock = ({coins, setCoins}) => {
  const [value, setValue] = useState('');
  console.log('---render-filtered')
  useEffect(() => {
      const filtredCoins = coins.filter((coin) => {
          return coin.name.toLowerCase().includes(value.toLowerCase())
      })
      setCoins(filtredCoins)
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
