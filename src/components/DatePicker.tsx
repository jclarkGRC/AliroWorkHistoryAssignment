// Created by Joshua Clark for Aliro evaluation
// 7/19/19

import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function DatePickers() {

  return (
    <form noValidate>
      <TextField
        id="date"
        type="date"
        defaultValue="2019-07-19"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}