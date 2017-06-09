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
import {Card, CardHeader, CardText} from 'material-ui/Card';
import canberraIllustratedSocial from './images/can_illustrated_social.png'

class CanberraIllustrated extends Component {
  constructor(props) {
    super(props)
    this.state = {open: false}
  }
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});
    render() {
      const style = {
      height: 100,
      width: 100,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
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
            <MenuItem onTouchTap={this.handleClose}><Link to="../../" activeClassName="activeNav">Home</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/nsw" activeClassName="activeNav">New South Wales</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/vic" activeClassName="activeNav">Victoria</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/sa" activeClassName="activeNav">South Australia</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/qld" activeClassName="activeNav">Queensland</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/wa" activeClassName="activeNav">Western Australia</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/tas" activeClassName="activeNav">Tasmania</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/act" activeClassName="activeNav">Australian Capital Territory</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/nt" activeClassName="activeNav">Northern Territory</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/nat" activeClassName="activeNav">National/International</Link></MenuItem>
            <MenuItem onTouchTap={this.handleClose}><Link to="/places/all" activeClassName="activeNav">All Newspapers</Link></MenuItem>
          </Drawer>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <Subheader>Canberra University Collage Student Notes (1947 - 1950)</Subheader>
      </MuiThemeProvider>
      <MuiThemeProvider>
        <img src={canberraIllustratedSocial} alt="Canberra Collage Article" />
      </MuiThemeProvider>

      <MuiThemeProvider>
        <Card>
           <CardHeader title="THE SOCIAL SCALE." />
           <CardText>
             Will Canberra some day be known as
             the city of snobs? At the present the
             signs are here. First we have the
             "guests" at the Hotel Canberra, then the
             denizens of Acton and so on through
             Blanfordia, Eastlake, Westlake, the Hotel
             Ainslie, down to thc Causeway and Mo-
             longlo and the tradesmen's messes, until
             we finally reach the labourers' camps at
             Eastlake and Civic Centre, and the home
             of the lost and outcast No. 1.
             Most of this feeling is caused through
             the different communities being widely
             separated, and through there being no
             common meeting ground (such as amuse-
             ment halls, lectures, etc.), where different
             communities could mingle and exchange
             ideas. Some of this snobbishness, how-
             ever, is fostered. Take the Hotel Ains-
             lie, for instance. At this hotel members
             of the staff are accommodated at a con-
             siderably lower figure than anyone else,
             skilled artisans are not welcomed, and
             as for the labourer, "it is easier for a
             camel to go through the eye of a needle.*'
             But there may not be any cause to
             worry about the future, for when the city
             has a population of, say, ten thousand, a
             great percentage of them will have, for-
             tunately, what one writer describes as
             "the Australian characteristic of irrever-
             ence." They will have the great gift
             of hum our in which atmosphere snob-
             Fix this textbery dies.
           </CardText>
         </Card>
      </MuiThemeProvider>
    </div>
    )
  }
}


export default CanberraIllustrated
