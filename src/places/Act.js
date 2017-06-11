import React, { Component } from 'react'
import logo from '../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import List from 'material-ui/List/List'
import ListItem from 'material-ui/List/ListItem'

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
      const styles = {
          appBar: {
          background: '#000000',
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
                <MenuItem onTouchTap={this.handleClose}><Link to="../" >Home</Link></MenuItem>
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
            <Subheader>Australian Capital Territory</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <List>
             <ListItem disabled={true}>
               <Link to="./newspapers/canberraTimes" ><img src={canberraTimes} alt="canberraTimes" /></Link>
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
               <Link to="./newspapers/canberraIllustrated" ><img src={canberraIllustrated} alt="The Canberra Illustrated" /></Link>
             </ListItem>
             <ListItem disabled={false}>
               <Link to="./newspapers/canberraCollage" ><img src={canberraCollage} alt="The Canberra Illustrated" /></Link>
             </ListItem>
            </List>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Act
