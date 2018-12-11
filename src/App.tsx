import * as React from "react";
import { Component } from "react";
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {blue} from "@material-ui/core/colors";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
const store = createStore(rootReducer);
const theme = createMuiTheme({
    palette:{
        primary: blue,
    }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <HashRouter>
              {routes}
            </HashRouter>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;