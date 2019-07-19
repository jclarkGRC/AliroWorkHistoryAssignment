import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import TextField from "@material-ui/core/TextField/TextField";
import Select from "@material-ui/core/Select/Select";
import Input from "@material-ui/core/Input/Input";
import MenuItem from '@material-ui/core/MenuItem';

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
    <div style={{border: "1px solid black", height: "400spx", position: "relative"}}>
      <form>
          <div style={{float: "left", padding: "40px", width: "45%"}}>
            <label>
            Job Title *
            <TextField
              id="standard-full-width"
              placeholder="Please enter your job title"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            </label>
            <label>
            Industry *
              <br/>
              <Select
                input={<Input name="age" id="age-helper" />}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </label>
            <label>
            Responsibilities
            <TextField
              id="standard-multiline-static"
              multiline
              rows="4"
              placeholder="(Optional) Add any responsibilites, skills, accomplishments"
              fullWidth
            />
            </label>
          </div>

          <div style={{float: "left", padding: "40px", width: "45%"}}>
            <label>
              Company *
              <TextField
              id="standard-full-width"
              placeholder="Please enter your company title"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
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