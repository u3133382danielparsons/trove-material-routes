import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import HowardGst from './images/howardGst.png'

class Howard extends Component {

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
            <Subheader>Prime Minister John Howard</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={HowardGst} alt="Sir John Howard Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Prime Minister Defends Post-GST Passing Rowdiness" />
               <CardText style={styles.cardText}>
                 CANBERRA (Recently): Prime
                  Minister John Howard was
                  forced to defend Ms cabirietV
                  behaviour after the GST lefisla
                  O
                  tion was passed by the Senate,
                  New reports of Cabinet minis
                  ters running wild have continued
                  to plague Howard on his overseas
                  junket. Further incidents of
                  lewd and controversial behaviour
                  have come to light and coin
                  plaints from Opposition MPs
                  continue to rol In.
                  The controversy started
                  ? moments after the bill narrowly
                  passed through the Senate.
                  Liberal supporters mobbed their
                  victorious team with a chamber
                  invasion from the public gallery.
                  'We may have only won by a
                  margin of 5 votes but we still
                  kicked their miserable arses' said
                  one jubilant fan after the win.
                  Meanwhile, outside
                  Parliament, the celebrations con
                  tinued as supporters tipped over
                  buses and looted shops n earby.
                  The party continued deep into
                  the eight and or horns could be
                  heard as well as cries of 'Vote
                  Liberal' and 'That'll be another
                  10%, thanks' projected from cars
                  streaming the blue and white
                  ©
                  team flags of the Liberal party.
                  Despite stories that Foreign
                  Fans if the libers! Party celebrated long into the night after their dose I vote victory.  Help
                  Fans if the libers! Party celebrated
                  long into the night after their dose
                  I vote victory.
                  Minister Alexander Downer
                  stripped to his boxers and stock
                  ings and performed 'the elephant
                  gag' on Senator Amanda
                  Vanstone's desk, Prime Minister
                  Howard maintained that 'My
                  cabinet colleagues merely let off
                  some steam after a long and hard
                  campaign to win this for the
                  Australian people'.
                  Treasurer Peter Costello spent
                  the night locked in his office after
                  security guards removed him
                  from a nearby road where he was
                  shouting 'Suckers!' at passers-by.
                  Parliamentary police said that he
                  came peacefully despite escaping
                  during an earlier pursuit after he
                  was caught urinating on the
                  Parliament House flagpole.
                  Parliament House sources say
                  the scenes in Prime Minister
                  Howard's office were equally
                  raucous. Sports Minister and
                  mother-to-be Jackie Kellv
                  danced provocatively for the
                  remaining cabinet ministers to
                  Rod Stewart's 'Do Ya Think I'm
                  Sexy?' while Immigration
                  Minister Philip Ruddock
                  stripped down to his waist,
                  downed four slabs of VB and
                  tried to stop the ceiling fan with
                  his head.
                  'I don't know anything about
                  the after-party in Senator
                  Vanstone's office,' said Mr
                  Howard. 'And I certainly knc \
                  nothing of the incident involving
                  Mr Beaziey's office being broken
                  into and defecated upon.'
                  The community has been
                  appalled by the actions of the
                  Parliamentarians. 'They have to
                  remember that there are children
                  looking up to them,' said disgusted Rugby League star Julian O'Neil.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Howard
