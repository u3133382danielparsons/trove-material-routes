import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import PageMorale from './images/pageMorale.png'

class Page extends Component {

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
            <Subheader>Prime Minister Sir Earl Page</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={PageMorale} alt="Sir Earl Page Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="BRITISH MORALE IMPRESSES
Fix this textSIR EARL PAGE" />
               <CardText style={styles.cardText}>
                  BRITISH MORALE IMPRESSES
                  SIR EARL PAGE
                  LONDON, Monday.
                  ," , After a tour with the Prime Minister (Mr. Churchill/
                  ,of the damaged areas in eastern England, Sir Earle, Page, W0
                  is on a special mission to London for the Australian Govern*
                  ment, paid a glowing tribute to the fighting spirit of the Brit-
                  ish people and to Mr. Churchill's leadership. ".
                  In an interview wiih the Austral- hit, This paradox has been made pos-,.
                  ian Associated Press, Sir Earle Page siblc bv the rapid and1 nl»K0"lvul|t
                  said that he had visited Ncwcastle-on- building, Some hoiries have been «u
                  Tyne, Sheffield and Hull, - three times, , , .. _copIe
                  , I was most Impressed with ihc-ef- "The-whole attitude of tne.p »
                  fficioney oCflhe air raid procautions, leflcctcd' confidence fin Mr¿ «£ W.
                  An organisation,, with 24 hours sor- to pull the nation through ltl^aes -
                  vico seven /lays a week, is provided cities, The damage in "the ,lln!,
                  to meet all contingencies at shoit no- visited was confined to r
                  "«. , ' - houses and business centres,
                  "Despite the fact that an area in than to key facloiios or Inaisp ,
                  one'elly ^as said to have only 100,- shipping facilities."
                  j_000 homes, at least 110,000 have been_
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Page
