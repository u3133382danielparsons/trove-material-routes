import React, { Component } from 'react'
import logo from '../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import Avatar from 'material-ui/Avatar'
import {List, ListItem} from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'

import Barton from './images/barton.jpg'
import Deakin from './images/deakin.jpg'
import Watson from './images/watson.jpg'
import Reid from './images/reid.jpg'
import Fisher from './images/fisher.jpg'
import Cook from './images/cook.jpg'
import Hughes from './images/hughes.jpg'
import Bruce from './images/bruce.jpg'
import Scullin from './images/scullin.png'
import Lyons from './images/lyons.jpg'
import Page from './images/page.jpg'
import Menzies from './images/menzies.jpg'
import Fadden from './images/fadden.jpg'
import Curtin from './images/curtin.jpg'
import Forde from './images/forde.jpg'
import Chifley from './images/chifley.jpg'
import Holt from './images/holt.jpg'
import McEwen from './images/mcEwen.jpg'
import Gorton from './images/gorton.jpg'
import McMahon from './images/mcMahon.jpg'
import Whitlam from './images/whitlam.jpg'
import Fraser from './images/fraser.jpg'
import Hawke from './images/hawke.jpg'
import Keating from './images/keating.jpg'
import Howard from './images/howard.jpg'
import Rudd from './images/rudd.jpg'
import Gillard from './images/gillard.jpg'
import Abbot from './images/abbot.jpg'
import Turnbull from './images/turnbull.jpg'

class CanberraTimes extends Component {

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
                <MenuItem onTouchTap={this.handleClose}><Link to="../../" activeClassName="activeNav">Home</Link></MenuItem>
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
            <Subheader>The Canberra Times</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <List>
              <Subheader>Australian Prime Ministers</Subheader>
              <Link to="./pms/Barton" activeClassName="activeNav"><ListItem
                primaryText={<h3>Edmund Barton</h3>}
                secondaryText={<p>1 January 1901 to 24 September 1903</p>}
                leftAvatar={<Avatar src={Barton} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <Link to="./pms/Deakin" activeClassName="activeNav"><ListItem
                primaryText={<h3>Alfred Deakin</h3>}
                secondaryText={<p>24 September 1903 to 27 April 1904</p>}
                leftAvatar={<Avatar src={Deakin} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <Link to="./pms/Watson" activeClassName="activeNav"><ListItem
                primaryText={<h3>Chris Watson</h3>}
                secondaryText={<p>27 April 1904 to 18 August 1904</p>}
                leftAvatar={<Avatar src={Watson} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <Link to="./pms/Reid" activeClassName="activeNav"><ListItem
                primaryText={<h3>George Reid</h3>}
                secondaryText={<p>18 August 1904 to 5 July 1905</p>}
                leftAvatar={<Avatar src={Reid} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <Link to="./pms/Fisher" activeClassName="activeNav"><ListItem
                primaryText={<h3>Andrew Fisher</h3>}
                secondaryText={<p>18 August 1904 to 5 July 1905</p>}
                leftAvatar={<Avatar src={Fisher} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <Link to="./pms/Deakin" activeClassName="activeNav"><ListItem
                primaryText={<h3>Alfred Deakin</h3>}
                secondaryText={<p>2 June 1909 to 29 April 1910</p>}
                leftAvatar={<Avatar src={Deakin} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <Link to="./pms/Fisher" activeClassName="activeNav"><ListItem
                primaryText={<h3>Andrew Fisher</h3>}
                secondaryText={<p>29 April 1910 to 24 June 1913</p>}
                leftAvatar={<Avatar src={Fisher} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <Link to="./pms/Cook" activeClassName="activeNav"><ListItem
                primaryText={<h3>Joseph Cook</h3>}
                secondaryText={<p>24 June 1913 to 17 September 1914</p>}
                leftAvatar={<Avatar src={Cook} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <Link to="./pms/Fisher" activeClassName="activeNav"><ListItem
                primaryText={<h3>Andrew Fisher</h3>}
                secondaryText={<p>17 September 1914 to 27 October 1915</p>}
                leftAvatar={<Avatar src={Fisher} />}
                rightIcon={<ActionInfo />}
              /></Link>
              <ListItem
                primaryText={<h3>Billy Hughes</h3>}
                secondaryText={<p>27 October 1915 to 9 February 1923</p>}
                leftAvatar={<Avatar src={Hughes} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Stanley Bruce</h3>}
                secondaryText={<p>9 February 1923 to 22 October 1929</p>}
                leftAvatar={<Avatar src={Bruce} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>James Scullin</h3>}
                secondaryText={<p>22 October 1929 to 6 January 1932</p>}
                leftAvatar={<Avatar src={Scullin} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Joseph Lyons</h3>}
                secondaryText={<p>6 January 1932 to 7 April 1939</p>}
                leftAvatar={<Avatar src={Lyons} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Sir Earle Page</h3>}
                secondaryText={<p>7 April 1939 to 26 April 1939</p>}
                leftAvatar={<Avatar src={Page} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Robert Menzies</h3>}
                secondaryText={<p>26 April 1939 to 28 August 1941</p>}
                leftAvatar={<Avatar src={Menzies} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Arthur Fadden</h3>}
                secondaryText={<p>28 August 1941 to 7 October 1941</p>}
                leftAvatar={<Avatar src={Fadden} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>John Curtin</h3>}
                secondaryText={<p>7 October 1941 to 5 July 1945</p>}
                leftAvatar={<Avatar src={Curtin} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Frank Forde</h3>}
                secondaryText={<p>6 July 1945 to 13 July 1945</p>}
                leftAvatar={<Avatar src={Forde} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Ben Chifley</h3>}
                secondaryText={<p>13 July 1945 to 19 December 1949</p>}
                leftAvatar={<Avatar src={Chifley} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Sir Robert Menzies</h3>}
                secondaryText={<p>19 December 1949 to 26 January 1966</p>}
                leftAvatar={<Avatar src={Menzies} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Harold Holt</h3>}
                secondaryText={<p>26 January 1966 to 19 December 1967</p>}
                leftAvatar={<Avatar src={Holt} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>John McEwen</h3>}
                secondaryText={<p>19 December 1967 to 10 January 1968</p>}
                leftAvatar={<Avatar src={McEwen} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>John Gorton</h3>}
                secondaryText={<p>10 January 1968 to 10 March 1971</p>}
                leftAvatar={<Avatar src={Gorton} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>William McMahon</h3>}
                secondaryText={<p>10 March 1971 to 5 December 1972</p>}
                leftAvatar={<Avatar src={McMahon} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Gough Whitlam</h3>}
                secondaryText={<p>5 December 1972 to 11 November 1975</p>}
                leftAvatar={<Avatar src={Whitlam} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Malcolm Fraser</h3>}
                secondaryText={<p>11 November 1975 to 11 March 1983</p>}
                leftAvatar={<Avatar src={Fraser} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Bob Hawke</h3>}
                secondaryText={<p>11 March 1983 to 20 December 1991</p>}
                leftAvatar={<Avatar src={Hawke} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Paul Keating</h3>}
                secondaryText={<p>20 December 1991 to 11 March 1996</p>}
                leftAvatar={<Avatar src={Keating} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>John Howard</h3>}
                secondaryText={<p>11 March 1996 to 3 December 2007</p>}
                leftAvatar={<Avatar src={Howard} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Kevin Rudd</h3>}
                secondaryText={<p>3 December 2007 to 24 June 2010</p>}
                leftAvatar={<Avatar src={Rudd} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Julia Gillard</h3>}
                secondaryText={<p>24 June 2010 to 27 June 2013</p>}
                leftAvatar={<Avatar src={Gillard} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Kevin Rudd</h3>}
                secondaryText={<p>27 June 2013 to 18 September 2013</p>}
                leftAvatar={<Avatar src={Rudd} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Tony Abbot</h3>}
                secondaryText={<p>18 September 2013 to 15 September 2015</p>}
                leftAvatar={<Avatar src={Abbot} />}
                rightIcon={<ActionInfo />}
              />
              <ListItem
                primaryText={<h3>Malcolm Turnbull</h3>}
                secondaryText={<p>15 September 2015 / Incumbent</p>}
                leftAvatar={<Avatar src={Turnbull} />}
                rightIcon={<ActionInfo />}
              />
            </List>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default CanberraTimes
