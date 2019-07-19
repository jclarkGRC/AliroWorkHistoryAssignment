import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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

function JobForm() {
  return (
    <div style={{border: "1px solid black"}}>
      <form>
          <div style={{float: "left"}}>
          <label>
            Job title:
            <input type="text" name="name" />
          </label>
          <label>
            Company:
            <input type="text" name="name" />
          </label>
          </div>
          <div style={{float: "left"}}>
            <label>
              Industry:
              <input type="text" name="name" />
            </label>
            <label>
              Job Function:
              <input type="text" name="name" />
            </label>
          </div>
          <label>
            Responsibilities:
            <input type="text" name="name" />
          </label>
          <label>
            Start Date:
            <input type="text" name="name" />
          </label>
          <label>
            End Date:
            <input type="text" name="name" />
          </label>
          <label>
            Current Position:
            <input type="text" name="name" />
          </label>
        <input style={{position: "absolute", bottom: "100%", right: "20px"}} type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default function FormTabs() {
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab style={tabStyles} label="Web Developer" />
          <Tab style={tabStyles} label="Backend Engineer" />
          <Tab style={tabStyles} label="UX Designer" />
        </Tabs>
      {value === 0 && <TabContainer><JobForm/></TabContainer>}
      {value === 1 && <TabContainer><JobForm/></TabContainer>}
      {value === 2 && <TabContainer><JobForm/></TabContainer>}
    </div>
  );
}