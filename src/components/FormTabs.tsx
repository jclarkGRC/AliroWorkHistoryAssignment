// Created by Joshua Clark for Aliro evaluation
// 7/19/19

import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
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
  let jobs = [];
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  function addNewJob () {
    jobs.push("Job name");
  }

  if(jobs.length === 0){
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
            onClick={addNewJob}
          >+
          </Fab>
        </Tabs>
        {value === 0 && <TabContainer><JobForm/></TabContainer>}
      </div>
    );
  }
  else {
    let tabs = jobs.map((item) =>
      <Tab style={tabStyles} label={item} />
    );
    return (
      <div>
        <Tabs value={value} onChange={handleChange}>
          {tabs}
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="Add"
            style={{marginLeft: "10px", marginTop: "6px"}}
            onClick={addNewJob}
          >+
          </Fab>
        </Tabs>
        <TabContainer><JobForm/></TabContainer>
      </div>
    )
  }
}



