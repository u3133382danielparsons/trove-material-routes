import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import GillardAsem from './images/gillardAsem.png'

class Gillard extends Component {

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
            <Subheader>Prime Minister Julia Gillard</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={GillardAsem} alt="Julia Gillard Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="ASEM 8 : Australia joins the Asia-Europe Meeting" />
               <CardText style={styles.cardText}>
                  Following his meeting with Australian Prime
                  Minister Julia Gillard in Brussels on 4 October,
                  José Manuel Barroso, President of the European
                  Commission, welcomed Prime Minister Gillard's
                  proposal to develop further EU-Australia
                  relations and Australia's entry into ASEM.
                  "Prime Minister Gillard has made proposals to
                  develop further the EU-Australia relationship.
                  I welcome this initiative and I will examine
                  those proposals in detail, consulting Member
                  States. Let me tell you on my own behalf, on
                  behalf of the European Commission, that we
                  very much support the idea of giving more
                  important expression to the relationship between
                  Australia and the European Union. As partners
                  in the G20, we have discussed financial and
                  economic governance and the need to cooperate
                  in multilateral fora. We also briefly discussed
                  climate change, in advance of the meeting
                  in Cancun. We agree that we have a common
                  interest in strengthening our ability to deal with
                  these challenges. We will continue to work with
                  Australia on this comprehensive agenda. And
                  I thank again Prime Minister Gillard for her
                  partnership on these important matters." said
                  Fix this textPresident Barroso.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Gillard
