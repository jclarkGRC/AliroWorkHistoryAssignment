import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import TextField from "@material-ui/core/TextField/TextField";
import Select from "@material-ui/core/Select/Select";
import Input from "@material-ui/core/Input/Input";
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface State {
  jobTitle: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }),
);

const jobTitles = [
  {
    value: 'None',
    label: 'None',
  },
  {
    value: 'SE',
    label: 'Software Engineer',
  },
  {
    value: 'PM',
    label: 'Project Manager',
  },
  {
    value: 'GA',
    label: 'Graphic Artist',
  },
];

export default function JobForm() {

  const [values, setValues] = React.useState<State>({
  jobTitle: 'None'
  });

  const handleChange = (name: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div style={{border: "1px solid black", height: "400px", position: "relative"}}>
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
                <MenuItem value={10}>Software Development</MenuItem>
                <MenuItem value={20}>Project Management</MenuItem>
                <MenuItem value={30}>Architecture</MenuItem>
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
              <br/>
              <TextField
                id="standard-select-currency-native"
                select
                label="Native select"
                value={values.jobTitle}
                onChange={handleChange('jobTitle')}
                helperText="Please select your currency"
                margin="normal"
              >
                {jobTitles.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
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

        <input style={{position: "absolute", top: "90%", left: "95%"}} type="submit" value="Save" />
      </form>
    </div>
  )
}