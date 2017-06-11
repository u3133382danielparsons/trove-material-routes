import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import WhitlamSacked from './images/whitlamSacked.png'

class Whitlam extends Component {

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
            <Subheader>Prime Minister Gough Whitlam</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={WhitlamSacked} alt="Gough Whitlam Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Whitlam sacked FRASER IS PRIME MINISTER Protests, strikes backlash" />
               <CardText style={styles.cardText}>
                  Mr David Smith, the Governor-General's Official Secretary, reads on the steps of
                  Parliament House the proclamation which dissolved Parliament yesterday afternoon. Most of the reading was drowned out by demonstrators.
                  Police restrain demonstrators from entering the grounds of Government House yesterday afternoon.
                  Demonstrations — some
                  violent — were staged in Can-
                  berra, Melbourne, and Sydney
                  last night in the wake of the
                  sacking of Mr Whitlam as
                  Prime Minister by the Gover-
                  nor-General, Sir John Kerr,
                  and the appointment of Mr
                  Fraser as caretaker Prime
                  Minister until elections for
                  both Houses of Parliament are
                  held.
                  In Canberra protesters be-
                  seiged Parliament House from
                  early afternoon when first news
                  came of the withdrawal of Mr
                  Whitlam's commission as Prime
                  Minister. They were still there
                  late last night. Other demon-
                  strators were held back by pol-
                  ice at Government House, the
                  residence of the Governor-
                  General.
                  In Melbourne, wild demon-
                  strations broke out when
                  students and unionists stoned
                  the Liberal Party headquarters
                  in South Melbourne.
                  Four youths were arrested
                  as police and demonstrators
                  had running battles using
                  stones, banner poles and fists.
                  Earlier the State Opposition
                  Leader, Mr Holding, and
                  union officials addressed a
                  crowd of 10,000 demonstra-
                  tors in the city square.
                  In Sydney nearly 2,000
                  people marched, chanting to
                  express their support for Mr
                  Whitlam.
                  Taking up the full breadth
                  of the streets the marchers
                  blocked traffic and traffic
                  lights were turned off.
                  After a meeting near the
                  Trades Hall the gathering dis-
                  persed just after 7.30.
                  In Brisbane yesterday after-
                  noon about 30 Labor suppor-
                  ters protested outside the
                  Liberal Party headquarters.
                  They held anti-Liberal banners
                  and shouted "Get Fraser out"
                  and "Fascist Fraser".
                  Despite calls for calm by
                  the president of the ACTU
                  and ALP, Mr Hawke, union-
                  ists reacted strongly in favour
                  of Mr Whitlam.
                  Several thousand members
                  of the seamen's union in Mel-
                  bourne stopped work at 3pm
                  yesterday and will stay on
                  strike indefinitely. Thousands
                  of waterside workers went on
                  strike at least until Thursday.
                  Officials of 30 left-wing
                  unions with members in the
                  transport, electricity, building
                  and shipping areas will meet
                  tomorrow to plan a campaign
                  of industrial action.
                  Canberra's bus services will
                  be disrupted today and many
                  unionists arc expected to stop
                  work following a call by the
                  ACT Trades and Labour
                  Council for all affiliate mem-
                  bers to attend a stop-work
                  meeting outside Parliament
                  House, beginning at 12.30pm.
                  The secretary of the ACT
                  branch of the TWU, Mr Doug
                  Carpenter, said drivers would
                  return to work to complete re-
                  turns of schoolchildren to their
                  homes.
                  A rally organised by the
                  Public Servants Fund for
                  Labor to protest against Mr
                  Whitlam's dismissal and Mr
                  Fraser's appointment would be
                  held outside Parliament House
                  today, beginning at 12.30pm, a
                  spokesman for the fund. Mr
                  Brian I'Anson, said yesterday.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Whitlam
