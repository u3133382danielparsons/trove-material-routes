import React, { Component } from 'react'
import logo from './logo.jpg'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem';

injectTapEventPlugin()
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render() {
    return(
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar
          title="Trove Newspapers"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTouchTap={this.handleToggle}
        />
      </MuiThemeProvider>
        <MuiThemeProvider>
          <div>
            <Drawer
              docked={false}
              width={200}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem onTouchTap={this.handleClose}>New South Wales</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Victoria</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>South Australia</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Queensland</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Western Australia</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Tasmania</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>A.C.T.</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Northern Territory</MenuItem>
              <MenuItem onTouchTap={this.handleClose}>National/International</MenuItem>
            </Drawer>
          </div>
        </MuiThemeProvider>
      </div>

    )
  }
}

// export default App;
