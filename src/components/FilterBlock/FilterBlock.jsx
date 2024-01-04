import './styles.css'
import { useContext } from "react";
import { memo } from 'react';
import {CoinsContext} from "../context/coinsContext.jsx";
import {useFilterCoins} from "../helpers/hooks/useFilterCoins.js";

const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext)
  const {coins} = coinsContext

  const { setValue, value } = useFilterCoins(setCoins, coins)

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
