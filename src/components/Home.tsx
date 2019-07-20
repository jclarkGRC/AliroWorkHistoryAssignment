// Created by Joshua Clark for Aliro evaluation
// 7/19/19

import React from 'react';
import WorkHistoryInputForm from "./FormTabs";

const Home = () => {
    return (
        <div style={{paddingTop: "50px"}}>
            <hr/>
          <h1 style={{paddingLeft: "50px"}}>Work History</h1>
          <br/>
          <div style={
            {paddingLeft: "50px",
             paddingRight: "50px"
            }
          }><WorkHistoryInputForm/></div>
        </div>
    );
};

export default Home;
