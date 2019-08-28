import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

import InputBox from './common/components/InputBox';
import RenderList from './RenderList';

import checkLocation from './checkLocation';

function App() {
  const [values, setValues] = useState({ address: '', results: [] });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleDataChange = result => {
    setValues({ ...values, deliveryAreas: result });
  };

  return (
    <div className="App">
      <h1>Check area for delivery</h1>
      <div className="content-box">
        <InputBox value={values.address} handleChange={handleInputChange} />
        <br />
        <Button variant="contained" onClick={() => checkLocation(values.address, handleDataChange)}>
          Check
        </Button>
      </div>
      <div className="content-box">
        <RenderList list={values.deliveryAreas} />
      </div>
    </div>
  );
}

export default App;
