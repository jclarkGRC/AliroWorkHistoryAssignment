// Created by Joshua Clark for Aliro evaluation
// 7/19/19

import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import DatePicker from './DatePicker';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

interface State {
  jobTitle: string;
  industry: string;
}

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

            <label style={{marginTop: '30px'}}>
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
            <label style={{marginTop: '30px'}}>
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
            
            <label style={{marginTop: '30px'}}>
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
              <label style={{float: "left", marginTop: '30px'}}>
              Start Date *
              <DatePicker/>
              </label>
              <label style={{float: "left", marginTop: '30px'}}>
                End Date:
                <DatePicker/>
              </label>
              <FormControlLabel
                style={{marginTop: '30px'}}
                value="end"
                control={<Checkbox color="primary" />}
                label="Current Position"
                labelPlacement="end"
              />
            </div>
          </div>
        <Button style={{position: "absolute", top: "80%", left: "92%"}} variant="outlined" size="large" color="primary">
          Save
        </Button>
      </form>
    </div>
  )
}