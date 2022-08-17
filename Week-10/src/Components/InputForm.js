import React, { useState } from 'react'

const InputForm = (props) => {
  //State for the value entered in text box
  const [value,setValue] = useState('');
  //function to pass the pasted link to the resultlink component 
  const handleShorten = () => {
    // console.log('handleShorten called',value)
    props.setLink(value);
    setValue('')
  }
  return (
    <div className='inputForm'>
      <input type="text" value={value} placeholder='Paste link here to short it...' onChange={(event) => setValue(event.target.value) }/>
      <button onClick={handleShorten}>Shorten</button>
    </div>
  )
}

export default InputForm
