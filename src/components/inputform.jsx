import React, { useState } from 'react';
import styled from 'styled-components';
import Convert from './convert';

// Styling a regular HTML input
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;
// Creating a custom hook
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

const displayButton = (value) => {
    if (value)
        return(
            <Convert value={value} />
        );
}

// Usage in App
const InputForm = () => {
  const inputProps = useInput();
  return (
    <div className='Description'>
        According to <a href='https://learnmeabitcoin.com/technical/wif'>this website</a>, a private key should never be written in an online input form. However here is an obviously simple React application where everything is computed on the client side, in your browser.    
        <details>
          <summary>
            For enhanced security, you can use this web page offline.
          </summary>
          <ol>
            <li>
              Download this HTML page on your disk
            </li>
            <li>
              Close it and go offline
            </li>
            <li>
              Open the downloaded the file named <code>Christophe Ramananjaona.html</code>
            </li>
            <li>
              Fill in the form
            </li>
          </ol>
        </details>
        <p>You can type in a private key of your choice or copy a random one from <a href='https://keys.lol' target="_blank" rel="noopener noreferrer">keys.lol</a> or <a href='https://bitaddress.org' target="_blank" rel="noopener noreferrer">bitaddress.org</a>.</p>
        <div className='Private'>
            Type or paste in a WIF private key:
            <StyledInput
                {...inputProps}
                placeholder="Private key"
            />
            <div><b>Input private key:</b> <code>{inputProps.value}</code> {displayButton(inputProps.value)}</div>
        </div>
    </div>
  );
}

export default InputForm;