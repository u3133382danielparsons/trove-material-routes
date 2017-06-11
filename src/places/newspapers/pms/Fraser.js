import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FraserRep from './images/fraserRep.png'

class Fraser extends Component {

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
            <Subheader>Prime Minister Harold Holt</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={FraserRep} alt="Sir Robert Menzies Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Republic inevitable: Malcolm Fraser" />
               <CardText style={styles.cardText}>
                  Former Liberal Prime Minister
                  Malcolm Fraser has suggested that
                  a republic is inevitable, comments
                  unlikely to be welcomed by Oppo-
                  sition Leader Alexander Downer.
                  Mr Fraser cited as reasons the
                  behaviour of the heirs to the Brit-
                  ish throne and the attitude of
                  young Australians.
                  The Australian Constitution
                  would need to be almost entirely
                  rewritten if the country became a
                  republic, he said, but this was no
                  reason to shy away from the issue.
                  Mr Downer has maintained his
                  opposition to a republic — the of-
                  ficial Liberal Party position — de-
                  spite increasing pro-republican
                  pressure from within his party.
                  He has argued that Prime Minis-
                  ter Paul Keating, who wants a re-
                  public by the centenary of Federa-
                  tion in 2001, wants to tear up the
                  Constitution, appoint a president,
                  and divide the community over the
                  issue.
                  Mr Fraser said yesterday that it
                  was necessary to distinguish be-
                  tween support for the system of
                  government in Australia and the
                  heirs to the throne because, while
                  many people felt enormous affec-
                  tion and loyalty for the Queen, the
                  young Royals had done enormous
                  damage to the system. If Austral-
                  ians wanted a different kind of
                  government, then all the issues
                  should be examined carefully in a
                  non-political forum, and he sug-
                  gested the election of a convention
                  like that established in the 1890s
                  to write the existing Constitution.
                  "You give them a job to do,
                  you nominate the issues that have
                  to be resolved, and then they
                  would presumably put some pro-
                  posals," Mr Fraser told Ten Net-
                  work's Meet the Press program.
                  A federal Cabinet committee is
                  preparing a Government response,
                  to the Republic Advisory Commit-
                  tee's 1993 report on options for
                  change.
                  Mr Keating reportedly favours a
                  president being appointed by a
                  two-thirds majority of the parlia-
                  ment rather than popular election.
                  Mr Fraser said the popular elec-
                  tion of a president could create po-
                  litical problems and "in some
                  things is a rival to the prime min-
                  ister". He also criticised the way
                  the Government had conducted the
                  republic debate, saying it had poli-
                  ticised the issue.
                  "They probably thought they
                  could break the Liberal Party wide
                  apart, which they haven't done
                  and won't do, but if that's the mo-
                  tivation you're never going to get
                  to a solution that would ever pass
                  a referendum in Australia," he
                  said.
                  Meanwhile, federal ALP presid-
                  ent Barry Jones has urged Mr
                  Keating to involve the Opposition
                  more in discussions on Australia
                  becoming a republic, to improve
                  the chances of a successful referen-
                  dum on constitutional changes.
                  Mr Jones said he was only on
                  the sidelines of the republican de-
                  bate, but it would be in everyone's
                  interest to involve the Liberals in
                  the consultative process.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Fraser
