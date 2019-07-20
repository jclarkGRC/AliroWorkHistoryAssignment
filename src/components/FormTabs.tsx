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

let jobSaved = false;
let lessThan5Jobs = true;

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

class FormTabs extends React.Component<any,any> {
  private currentJobs: string[] = [];

  constructor(props){
    super(props);

    this.state = {
      jobs: [],
      value: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewJob = this.addNewJob.bind(this);
  }

  handleChange(index){
    this.setState({value: index})
  }

  addNewJob(){
    let testJob = "Example Job";
    let incrementValue;
    if (this.state.value >= 1 && lessThan5Jobs) {
      incrementValue = this.state.value + 1;
      this.currentJobs.push(testJob);
      this.setState({jobs: this.currentJobs, value: incrementValue});
    }
    if(jobSaved && this.state.value < 1) {
      this.currentJobs.push(testJob);
      this.setState({jobs: this.currentJobs, value: 1})
    }
    if(!jobSaved) {
      this.currentJobs.push(testJob);
      this.setState({jobs: this.currentJobs, value: 0});
      jobSaved = true;
    }
    if(this.state.value > 2) {
      alert("You may not add anymore jobs at this time");
      lessThan5Jobs = false;
    }
  }

  render() {

    if (this.state.jobs.length === 0) {
      return (
        <div>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab style={tabStyles} label="Add Position"/>
            <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="Add"
              style={{marginLeft: "10px", marginTop: "6px"}}
              onClick={this.addNewJob}
            >+
            </Fab>
          </Tabs>
          {this.state.value === 0 && <TabContainer><JobForm/></TabContainer>}
        </div>
      );
    }
    else {
      let tabs = this.state.jobs.map((item) =>
        <Tab style={tabStyles} label={item}/>
      );
      return (
        <div>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            {tabs}
            <Fab
              variant="extended"
              size="small"
              color="primary"
              aria-label="Add"
              style={{marginLeft: "10px", marginTop: "6px"}}
              onClick={this.addNewJob}
            >+
            </Fab>
          </Tabs>
          <TabContainer><JobForm/></TabContainer>
        </div>
      )
    }
  }
}
export default FormTabs;

