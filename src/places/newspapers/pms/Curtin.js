import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import CurtinAppeal from './images/curtinAppeal.png'
import CurtinPact from './images/curtinPact.png'

class Curtin extends Component {

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
            <Subheader>Prime Minister John Curtin</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={CurtinAppeal} alt="John Curtin Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={CurtinPact} alt="Sir Robert Menzies Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="MR. CURTIN DETAILS
BASIS OF PACT" />
               <CardText style={styles.cardText}>
                  WITH NEW ZEALAND
                  WASHINGTON, Monday.
                  I Tile Australian Prime Minister
                  (Mr. Curtin) told a Press confer-
                  ence to-day that his discussions in
                  Washington had been very satisfac-
                  tory. There had been an enthusiastic
                  agreement on both sides.
                  Mr. Curtin said he intended to ex-
                  change ideas and views ,on the state
                  of the war with Mr. Roosevelt.
                  ' Explaining the Austrada-New Zea-
                  land Agreement. Mr. Curtin said the
                  conference was held to discover how
                  far mutuality in defence could be
                  expressed. The agreement was a
                  neighbourly undertak ng and not to
                  exclude the rights and interests of
                  anyone else. The primary task of
                  defence of Australia falls upon the
                  peoples of those countries and we
                  felt the people of Australia and New
                  Zealand should make a maximum
                  effort to defend themselves before
                  asking anyone else.
                  Asked when other countries would
                  be called in to use Australian and
                  New Zealand bases, Mr. Curtin re-
                  plied that« nobody has asked that
                  bases should be other than under
                  Australian and New Zealand juris-
                  diction the case may be. We are not
                  proposing that the bases of the
                  Uunited States or ¿any other ally
                  should be changed. What we are
                  asking is that we should plan to in-
                  crease tlic security of all.
                  This involves some plan of
                  regional security. . ,
                  The whole question of bases should
                  be decided at the peace conference.
                  We do not think because Australians
                  fought here, there or anywhere else
                  that those places should come under
                  Australian jurisdiction.
                  - Mr. Curtin declared that the New
                  Gu'nea campaign was proceeding ac-
                  cording to plan laid down a consider
                  ale time ago. ,
                  Asked if the Pacific plan were go-
                  ing according to time-table, Mr. Cur-
                  tin replied: "I did not make the
                  time-table, but I can say that the
                  only Pacific programme that is heing
                  d sturbed is Japan's."
                  MIGRANTS SOUGHT
                  Mr. Curtin stated that the propos-
                  ed Jewish settlement in the Kimber-
                  ley district would receive considera-
                  tion. He pointed out Australia need-
                  ed population and he would like to
                  see 200,000 American people come
                  as often as they like. The same ap-
                  plies to Great Britain and other Al-
                  lied countries.
                  Asked whether there was any in-
                  tention of changing the immigration
                  laws, Mr. Curtin replied: "Wc have
                  not alrered our laws and I would
                  like to add we are pleased we did not
                  have 200,000 Japanese in Australia
                  on December 7,' 1941." "
                  Discussing Australia's war effort,
                  Mr. Curtin pointed out that Austra-
                  lia's achievements and fighting quali-
                  ties were highly praised by General
                  MacArlhur, who declared no country
                  had maûe a greater contribution to
                  Hie war.
                  POST-WAR PROBLEMS
                  Asked whether industrialisation of
                  Australia wo'uld ¡ilfcct trade after
                  the war, Mr. Curtin said the capacity
                  I to produce for war had greatly in-
                  creased, but there would be a con-
                  siderable write-off of Australian pro
                  ' ductive capacity when the war finish.
                  'ed. The diversion of skill and plan-
                  ning from war to peace would be! a
                  great problem. > ' . . .
                  Mr. Curtin added that' Australia
                  believed in the formation of"a'n inter-
                  national authority on which' all coun-
                  tries will be represented - and with
                  Joint supervision of bases for p'ost
                  war aviation. '? -' ,
                  The German Newsagency stated
                  that heavy .fighting continues in the
                  Sebastopol area, the Russians throw-
                  ing in tanks - and artillery against
                  the defensive positions. German
                  bomber formations are repeatedly at-
                  tacking Russian supply centres at
                  Kiev, Korosten, Fastov and Sarny,
                  Indicating that the area will'be im-
                  portant for forthcoming operations
                  In the opinion of the German High
                  Command.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Curtin
