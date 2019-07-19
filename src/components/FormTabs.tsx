import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';

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
    <div style={{border: "1px solid black", height: "300px", position: "relative"}}>
      <form>
          <div style={{float: "left", padding: "40px", width: "45%"}}>
            <label>
            Job title *
            <input type="text" name="name" />
            </label>
            <label>
            Industry *
            <input type="text" name="name" />
            </label>
            <label>
            Responsibilities
            <input type="text" name="name" />
            </label>
          </div>

          <div style={{float: "left", padding: "40px", width: "45%"}}>
            <label>
              Company *
              <input type="text" name="name" />
            </label>
            <label>
              Job Function *
              <input type="text" name="name" />
            </label>

            <div>
              <label style={{float: "left"}}>
              Start Date *
              <input type="text" name="name" />
              </label>
              <label style={{float: "left"}}>
                End Date:
                <input type="text" name="name" />
              </label>
              <label style={{float: "left"}}>
                CurrentPosition:
                <input type="text" name="name" />
              </label>
            </div>

          </div>

        <input style={{position: "absolute", top: "90%", left: "95%"}} type="submit" value="Submit" />
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
      {value === 1 && <TabContainer><JobForm/></TabContainer>}
    </div>
  );
}