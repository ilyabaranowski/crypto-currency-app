import './styles.css'
import {useRef, useState} from "react";

const FilterBlock = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null)
    console.log(inputRef)
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
  )
}

export default FilterBlock
