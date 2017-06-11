import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import RuddPm from './images/ruddPm.png'

class Rudd extends Component {

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
            <Subheader>Prime Minister Kevin Rudd</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={RuddPm} alt="Kevin Rudd Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Kevin Rudd: Australia's New Prime Minister" />
               <CardText style={styles.cardText}>
                  In one of the many notable events
                  that occurred over the university
                  break, Kevin Rudd was elected Prime
                  Minister of Australia after a Short
                  and Jocular Conversation with the
                  electorate. Australia disposed of
                  its eleven-year Thetan-dropping
                  Volcano-loving Xenu John Howard.
                  In the process of doing so they also
                  threw out a few others past their
                  use-by-date, including Mai Brough
                  and Jackie "I'm not racist but fuck
                  everyone from that Middle Eastern
                  region"Kelly (but unfortunately not
                  Jackie 0).
                  Australians watched in disgust as
                  channels Seven and Nine bothered
                  to host election coverage on the
                  night, while the rest of us laughed
                  pompously along with Kerry O'Brien
                  and his hilarious, "I for one welcome
                  our new Labor overlords"quip.
                  The tattered Liberal Party proceeded
                  to elect the only person not able to
                  win them an election a few weeks
                  later, with the loved-by-universityleftists-everywhere'Dr'Brendan
                  Nelson rising to the throne. His
                  appointment has raised the ire of the
                  few who still think the party should
                  flog everyone whose last name isn't
                  Smith - as his tenure is predicted to be
                  left of centre, politically neutral and
                  all those things geriatric conservative
                  voters hate, you know, progress.
                  In good-news to come from the
                  election, nobody from the Christian
                  Democratic Party was elected to
                  any seat, a win for rational voters
                  everywhere.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Rudd
