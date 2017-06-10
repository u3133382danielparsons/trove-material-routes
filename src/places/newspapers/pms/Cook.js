import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import CookFuneral from './images/cookFuneral.png'

class Cook extends Component {

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
            <Subheader>Prime Minister Andrew Fisher</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={CookFuneral} alt="Joseph Cook Funeral Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="FUNERAL OF SIR JOSEPH
COOK" />
               <CardText style={styles.cardText}>
                  SYDNEY-, Friday.
                  Government- and diplomatic representatives' were among the 500
                  mourners at the State funeral of Sir
                  Joseph Cook, former Prime Minister,'
                  to-day.
                  The Rev. W. Deane, Principal of
                  the Methodist Ladies' College, Burwood, delivered the address at the
                  Wesley Chapel. ',
                  He said that Sir Joseph was an all
                  Australian Lincoln, who,rose from a
                  pit boy to be Prime Minister and set
                  a magnificent example to all Australians.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Cook
