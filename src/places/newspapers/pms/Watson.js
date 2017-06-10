import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import WatsonUnknown from './images/watsonUnknown.png'

class Watson extends Component {

  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

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
              <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
              >
                <MenuItem onTouchTap={this.handleClose}><Link to="../../../" activeClassName="activeNav">Home</Link></MenuItem>
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
            <Subheader>Prime Minister Chris Watson</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={WatsonUnknown} alt="Watson Newspaper Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="The unknown Prime Minister." />
               <CardText style={styles.cardText}>
                 There was nothing Australian
                 of real value in The Lodge when
                 the Prime Minister and. Mrs
                 Fraser moved in five years ago,
                 Mr Fraser said last night.
                 . . there was not a single
                 piece in it to indicate that Prime
                 Ministers had inhabited it sincc
                 about 1927", he said.
                 A collection of Australian his
                 pictorical artifacts had been started
                 after he had moved in.
                 One item was a portrait of the
                 "first Labor Prime Minister,
                 which no Labor politician has yet
                 seen and recognised".
                 Mr Fraser said that that Prime
                 Minister, Mr John Christian
                 Watson, had served for only
                 about seven months. (His re
                 search was faulty: Mr Watson
                 was Prime Minister for three
                 months and 22 days.)
                 The Australiana Fund had
                 bought the portrait, several years
                 ago, when it had gone on sale in
                 Fix this textMelbourne. - ;
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Watson
