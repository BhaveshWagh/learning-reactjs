import React, {useState} from 'react';

import Autocomplete from './Autocomplete';

const DropDown = () => {
  const [event, setEvent] = useState()
  const [value, setValue] = useState()

  const handleOnSelect = val => {
    setEvent('onSelect')
    setValue(val)
  }

  const handleOnSearch = val => {
    setEvent('onSearch')
    setValue(val)
  }

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent: 'space-evenly'}}>
      <Autocomplete 
        onSelect={handleOnSelect} 
        onSearch={handleOnSearch} 
        dataSource={['one', 'two', 'three']}
      />
      <p>
        Event: <strong>{event}</strong>
      </p>
      <p>
        Value: <strong>{value}</strong>
      </p>
    </div>
  );
}
export default DropDown;
