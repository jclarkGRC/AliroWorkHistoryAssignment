/*
* App.tsx
* Application for the pwa-starter-application-npm-ts
*
* Created by Josh Clark 12/11/18
*
* pwa-starter-application-npm-ts
*
* Copyright © 2009-2019 United States Government as represented by
* the  Program Manager of the DHA: Web and Mobile Technology Program Management Office
* All Rights Reserved.
*
* Copyright © 2009-2019 Contributors. All Rights Reserved.
*
* THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
* REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
* COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
* AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
* THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
* INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
* REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
* DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
* HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
* RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
*
* Government Agency: DHA: Web and Mobile Technology Program Management Office
* Government Agency Original Software Designation:
* Government Agency Original Software Title:
* User Registration Requested. Please send email
* with your contact information to: robert.a.kayl.civ@mail.mil
* Government Agency Point of Contact for Original Software - Program Manager: robert.a.kayl.civ@mail.mil
*/
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import rootReducer from './reducers/index';
import routes from './routes';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
          <Provider store={store}>{routes}</Provider>
      </div>
    );
  }
}

export default App;
