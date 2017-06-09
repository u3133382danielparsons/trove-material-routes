import React from 'react';
import logo from './logo.jpg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

injectTapEventPlugin()
const style = {
  margin: 12,
};
      const App = () => (
        <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar
          title="Trove Newspapers"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

      </MuiThemeProvider>
      <MuiThemeProvider>
      <RaisedButton label="Test Button"
                    onMouseUp={()=>{alert('Mouse Raised Button Works!')}}
                    primary={true}
      />
      </MuiThemeProvider>
    </div>
    );


export default App;
