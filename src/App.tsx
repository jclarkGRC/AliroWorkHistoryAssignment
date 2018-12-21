import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.css';
import rootReducer from './reducers/index';
import routes from './routes';

const store = createStore(rootReducer);
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>{routes}</Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
