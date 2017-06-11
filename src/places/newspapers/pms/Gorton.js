import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import GortonUs from './images/gortonUs.png'

class Gorton extends Component {

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
            <Subheader>Prime Minister John Gorton</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={GortonUs} alt="John Gorton Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Mr GORTON ARRIVES IN U.S." />
               <CardText style={styles.cardText}>
                  SAN FRANCISCO,
                  Sunday (AAP). —
                  Australian Prime
                  Minister, John Gorton,
                  arrived here aboard a
                  US Presidential jet
                  from Honolulu tonight
                  for a five-day visit to
                  the United States (his
                  first since 1963 when
                  he was a Junior Minis
                  ter) which will include
                  talks in Washington
                  with President Johnson.
                  During Jiis visit, Mr Gor
                  ton said he hoped to gain
                  "a much better understand
                  ing of the thinking of the
                  President, the Administra
                  tion and, primaries permit
                  ting, the thinking of possible
                  presidential candidates".
                  Accompanied by Mrs
                  Gorton, he rode a motor
                  cade into San Francisco
                  where he will spend the
                  night before flying on to
                  Washington on Monday
                  morning.
                  After a welcome with full
                  military honours on the
                  White House lawn in Wash
                  ington on Monday, Mr Gor
                  ton will immediately go into
                  the first of his two meetings
                  with President Johnson.
                  The Vietnam war and
                  [Paris peace talks are at the
                  top of the agenda for the
                  meetings.
                  But talks will also cover
                  the broader areas o£ South
                  east Asian defence, espec
                  ially with the withdrawal of
                  British forces from Singa
                  pore by the end of 1971.
                  Another subject likely to
                  be raised is the effect of
                  Australia's trade of Ameri
                  cain action to correct the
                  US balance of payments de
                  'ficits.
                  Apart from their formal
                  meetings. President Johnson
                  and Mr Gorton will meet
                  at a banquet in honour of
                  Mr and Mrs Gorton at the
                  White House on Monday
                  night.
                  During his two full days
                  in Washington, Mr Gorton
                  will also have talks with
                  Secretary of State Dean
                  Rusk, Defence Secretary
                  Clark Clifford, Treasury
                  Secretary Henry Fowler,
                  and Commerce Secretary
                  C. R. Smith.
                  After a military depar
                  ture ceremony on Wednes
                  day, Mr and Mrs Gorton
                  will leave for New York,
                  where Mr Gorton will.have
                  lunch at the United Nations
                  with the Secretary-General
                  U Thant on Friday.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Gorton
