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
                <MenuItem onTouchTap={this.handleClose}><Link to="../../../" >Home</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/nsw" >New South Wales</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/vic" >Victoria</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/sa" >South Australia</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/qld" >Queensland</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/wa" >Western Australia</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/tas" >Tasmania</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/act" >A.C.T.</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/nt" >Northern Territory</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/nat" >National/International</Link></MenuItem>
                <MenuItem onTouchTap={this.handleClose}><Link to="/places/all" >All Newspapers</Link></MenuItem>
              </Drawer>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Subheader>Prime Minister Joseph Cook</Subheader>
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
