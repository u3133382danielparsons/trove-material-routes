import React, { Component } from 'react'
import logo from './images/logo.png'
import proclamation from './images/proclamation.png'
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open})
  handleClose = () => this.setState({open: false})

  render() {
    const styles = {
        appBar: {
        background: '#000000',
      },
      cardHeader: {
        textAlign: 'center',
      },
       cardText: {
        lineHeight: '2',
      }
    }
    return(
      <div>
        <MuiThemeProvider>
          <AppBar
            style={styles.appBar}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onTouchTap={this.handleToggle}
            iconElementRight={<img src={logo} alt="Trove Logo" />}
          />
        </MuiThemeProvider>

        <MuiThemeProvider>
            <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
              <MenuItem onTouchTap={this.handleClose}><Link to="/" activeClassName="activeNav">Home</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/nsw" activeClassName="activeNav">New South Wales</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/vic" activeClassName="activeNav">Victoria</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/sa" activeClassName="activeNav">South Australia</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/qld" activeClassName="activeNav">Queensland</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/wa" activeClassName="activeNav">Western Australia</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/tas" activeClassName="activeNav">Tasmania</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/act" activeClassName="activeNav">A.C.T.</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/nt" activeClassName="activeNav">Northern Territory</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/nat" activeClassName="activeNav">National/International</Link></MenuItem>
              <MenuItem onTouchTap={this.handleClose}><Link to="/places/all" activeClassName="activeNav">All Newspapers</Link></MenuItem>
            </Drawer>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Paper zDepth={2}>
            <TextField  underlineShow={false} />
          </Paper>
        </MuiThemeProvider>

        <MuiThemeProvider>
          <img src={proclamation} alt="Trove Logo" />
        </MuiThemeProvider>

        <MuiThemeProvider>
          <Card>
             <CardHeader style={styles.cardHeader} title="By the QUEEN." />
             <CardHeader style={styles.cardHeader} title="A PROCLAMATION." />
             <CardText style={styles.cardText}>
                Victoria R.
                WHEREAS by an Act of Parliament passed in the Sixty-third and Sixty-fourth Years
                of Our Reign intituled, " An Act to constitute the Commonwealth of Australia," it
                is enacted that it shall be lawful for the Queen, with the advice of the Privy Council, to
                declare by Proclamation, that, on and after a day therein appointed, not being later than One
                Year after the passing of this Act, the people of New South Wales, Victoria, South Australia,
                Queensland, and Tasmania, and also, if Her Majesty is satisfied that the people of Western
                Australia have agreed thereto, of Western Australia, shall be united in a Federal Common-
                wealth under the name of the Commonwealth of Australia.
                And whereas We are satisfied that the people of Western Australia have agreed thereto
                accordingly.
                We, therefore, by and with the advice of Our Privy Council, have thought fit to issue
                this Our Royal Proclamation, and We do hereby declare that on and after the First day of
                January One thousand nine hundred and one the people of New South Wales, Victoria,
                South Australia, Queensland, Tasmania, and Western Australia shall be united in a Federal
                Commonwealth under the name of the Commonwealth of Australia.
                Given at Our Court at Balmoral, this Seventeenth day of September, in the Year of
                our Lord One thousand nine hundred, and in the Sixty-fourth Year of Our Reign.
                GOD SAVE THE QUEEN !
              </CardText>
            </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

// export default App;
