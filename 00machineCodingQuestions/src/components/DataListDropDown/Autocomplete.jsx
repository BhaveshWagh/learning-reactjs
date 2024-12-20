import React, {useState, useEffect} from 'react';
// import styled from 'styled-components'
// import PropTypes from 'prop-types'

const propTypes = {
  dataSource: PropTypes.array.isRequired
}

const AutoComplete = (props) => {
  const [lastVal, setLastVal] = useState('')

  useEffect(() => {
    if (!props.dataSource || !Array.isArray(props.dataSource)) {
      throw new Error('Autocomplete requires a dataSource[] prop')
    }
  }, [])

  const handleOnChange = (e) => {
    const val = e.target.value

    const eventType = props.dataSource.find(item => item === val) && lastVal.length < (val.length - 1) ? 'onSelect' : 'onSearch'
    props[eventType] && props[eventType](val)

    setLastVal(val)
  }

  return (
    <AutocompleteStyles>
      <input 
        autocomplete='off' 
        list="autocomplete-list" 
        id="list" 
        name="list" 
        placeholder="Search" 
        onChange={handleOnChange}  
      />

      <datalist id="autocomplete-list" >
        {props.dataSource.map(item => <option key={item} value={item}/> )}
      </datalist>
    </AutocompleteStyles>
  )
}

AutoComplete.propTypes = propTypes

export default AutoComplete

const AutocompleteStyles = styled.div``
