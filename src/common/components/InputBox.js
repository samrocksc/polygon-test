import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputBox = props => {
  return (
    <TextField
      id="Address"
      name="address"
      label="Customer Address"
      value={props.value}
      onChange={props.handleChange}
      margin="normal"
    />
  );
};

export default InputBox;
