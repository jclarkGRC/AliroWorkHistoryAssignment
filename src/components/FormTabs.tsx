// Created by Joshua Clark for Aliro evaluation
// 7/19/19

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import TextField from "@material-ui/core/TextField/TextField";
import Select from "@material-ui/core/Select/Select";
import Input from "@material-ui/core/Input/Input";
import MenuItem from '@material-ui/core/MenuItem';
import JobForm from './JobForm';

const tabStyles = {
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  borderTop: "1px solid black",
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px"
};

interface TabContainerProps {
  children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

export default function FormTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab style={tabStyles} label="Add Position" />
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="Add"
            style={{marginLeft: "10px", marginTop: "6px"}}
          >+
          </Fab>
        </Tabs>
      {value === 0 && <TabContainer><JobForm/></TabContainer>}
    </div>
  );
}