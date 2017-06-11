import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import TurnbullPapers from './images/turnbullPapers.jpg'

class Turnbull extends Component {

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
            <Subheader>Prime Minister Malcolm Turnbull</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={TurnbullPapers} alt="Malcolm Turnbull Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Malcolm Turnbull's struggle for survival just got that much tougher" />
               <CardText style={styles.cardText}>
                 Who will be leading the Liberal Party six months from now? Can Malcolm Turnbull survive as Prime Minister until the end of 2017?
                  These are intriguing questions and ones, we suspect, that are playing strongly on the mind of the member for Wentworth.
                  Tony Abbott's dump on the PM at the launch of "Making Australia Right", the defection of Cory Bernardi and Turnbull's own poor performance against Labor in the most recent opinion polls, mean he is unlikely to become the first prime minister since John Howard not to be dumped by his own side.
                  If it wasn't for the fact the next lower house election isn't due until late 2019 (a half senate election is scheduled for 2018) he could have been sent on his way already given he once said the decision to drop Abbott was the price you pay for poor poll numbers.
                  While it is possible the Coalition might not have fallen across the line to be able to form a government at last year's election if Abbott had been leading it, Mr Turnbull's performance has been well short of what was hoped for when he was parachuted into the top job in 2015.
                  His numbers have only got worse with one recent poll finding Labor led the Coalition 52 per cent to 48 per cent on a two-party preferred basis.
                  What is intriguing is that despite the public's growing discontent with Mr Turnbull, people are not embracing Mr Shorten as the alternative PM either.
                  As of February 14, 39 per cent felt Mr Turnbull would make the better prime minister compared to just 25 per cent for Mr Shorten.
                  At this stage the next federal election, if he is still around, is Mr Turnbull's to lose, not Mr Shorten's to win.
                  The real question is just why has Mr Turnbull, who less than two years ago enjoyed substantial support across much of the electorate regardless of voter affiliation, fallen from grace so rapidly?
                  One explanation is that moderate conservative voters and many Labor voters saw him as a palatable alternative to the divisive and dogmatic leadership of Abbott.
                  There was an expectation his mature and informed personal opinions on issues such as climate change and same-sex marriage might lead to a moderation of the Coalition's stance on these.
                  That, for factional reasons that are now obvious, didn't happen and as a result many former Turnbull supporters feel betrayed. That sense of betrayal is now being reflected in the polls.
                  There is an argument that instead of slinging it out with One Nation to win the hearts and minds of the most conservative sections of the electorate, the Liberals – and even The Nationals – would be well advised to revisit the "small-L" liberal values espoused by leaders such as Bob Menzies and Malcolm Fraser.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Turnbull
