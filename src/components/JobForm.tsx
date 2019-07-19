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
  industry: string;
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
    label: 'Please select a job function',
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

const industries = [
  {
    value: 'None',
    label: 'Please select an industry',
  },
  {
    value: 'SD',
    label: 'Software Development',
  },
  {
    value: 'PM',
    label: 'Project Management',
  },
  {
    value: 'A',
    label: 'Architecture',
  },
];

export default function JobForm() {

  const [values, setValues] = React.useState<State>({
  jobTitle: 'None',
  industry: 'None'
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
              <TextField
                id="standard-select-currency-native"
                select
                value={values.industry}
                onChange={handleChange('industry')}
                fullWidth
              >
                {industries.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
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
              <TextField
                id="standard-select-currency-native"
                select
                value={values.jobTitle}
                onChange={handleChange('jobTitle')}
                fullWidth
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