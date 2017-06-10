import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'

import canberraTimes from './images/canberraTimes.svg'
import woroni from './images/woroni.png'
import goodNeighbour from './images/The_Good_Neighbour.png'
import canberraCommunity from './images/Canberra_community.png'
import federalPioneer from './images/federal_pioneer.png'
import canberraIllustrated from './images/canberra_illustrated.png'
import canberraCollage from './images/canberra_collage.png'

class Act extends Component {

  constructor(props) {
    super(props)
    this.state = {open: false}
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

    render() {
      return(

        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <AppBar
              title="Trove Newspapers"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              onTouchTap={this.handleToggle}
            />
          </MuiThemeProvider>

          <MuiThemeProvider>
              <Drawer
                docked={false}
                width={200}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
              >
                <MenuItem onTouchTap={this.handleClose}><Link to="../" activeClassName="activeNav">Home</Link></MenuItem>
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
            <Subheader>Australian Capital Territory</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <List>
             <ListItem disabled={true}>
               <Link to="./newspapers/canberraTimes" activeClassName="activeNav"><img src={canberraTimes} alt="canberraTimes" /></Link>
             </ListItem>
             <ListItem disabled={true}>
               <img src={woroni} alt="woroni" />
             </ListItem>
             <ListItem disabled={true}>
               <img src={goodNeighbour} alt="Good Neighbour A.C.T." />
             </ListItem>
             <ListItem disabled={true}>
               <img src={canberraCommunity} alt="Canberra Community News" />
             </ListItem>
             <ListItem disabled={true}>
               <img src={federalPioneer} alt="The Federal Pioneer" />
             </ListItem>
             <ListItem disabled={true}>
               <Link to="./newspapers/canberraIllustrated" activeClassName="activeNav"><img src={canberraIllustrated} alt="The Canberra Illustrated" /></Link>
             </ListItem>
             <ListItem disabled={false}>
               <Link to="./newspapers/canberraCollage" activeClassName="activeNav"><img src={canberraCollage} alt="The Canberra Illustrated" /></Link>
             </ListItem>
            </List>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Act
