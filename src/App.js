import React, { Component } from 'react'
import logo from './logo.jpg'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Subheader from 'material-ui/Subheader'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }
  handleToggle = () => this.setState({open: !this.state.open})

  handleClose = () => this.setState({open: false})

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
              <MenuItem onTouchTap={this.handleClose}><Link to="/" activeClassName="activeNav">Home</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/nsw" activeClassName="activeNav">New South Wales</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/vic" activeClassName="activeNav">Victoria</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/sa" activeClassName="activeNav">South Australia</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/qld" activeClassName="activeNav">Queensland</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/wa" activeClassName="activeNav">Western Australia</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/tas" activeClassName="activeNav">Tasmania</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/act" activeClassName="activeNav">Australian Capital Territory</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/nt" activeClassName="activeNav">Northern Territory</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/nat" activeClassName="activeNav">National/International</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/all" activeClassName="activeNav">All Newspapers</Link></MenuItem>
            </Drawer>
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Subheader>Home</Subheader>
        </MuiThemeProvider>
      </div>

    )
  }
}

// export default App;
