import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import KeatingDay from './images/keatingDay.png'

class Keating extends Component {

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
            <Subheader>Prime Minister Paul Keating</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={KeatingDay} alt="Paul Keating Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Australia Day messages" />
               <CardHeader style={styles.cardHeader} title="The Prime Minister" />
               <CardHeader style={styles.cardHeader} title="Paul Keating" />
               <CardText style={styles.cardText}>
                  On Australia Day it is right that
                  we should remember all that was
                  done by earlier generations to build
                  this country. But today I think it is
                  appropriate to also remind our
                  selves that this generation of Australians has done as much as any
                  other to preserve our way of life and
                  make it safe in the years to come.
                  In the past decade we Australians
                  have risen to meet the challenges
                  posed by a dramatically changing
                  world, and by our efforts we have
                  given ourselves security and oppor
                  tunities we would not otherwise
                  now have. In doing this we have
                  learnt that we have the capacity to
                  adapt. We have learnt that we can
                  compete with the best.
                  In the 1990s the chance is there
                  for Australia: we can build for our
                  selves a more rewarding and dy
                  namic place in the world, and
                  particularly in our region, than we
                  have ever had before. In our great
                  natural wealth, in our collective
                  skills and knowledge, in our will
                  and strength of purpose, we have all
                  we need to secure the future.
                  The challenges remain. With
                  some of our major trading partners
                  in recession or moving only slowly
                  out of it, the hardship here will not
                  quickly go away. This is a reality
                  which must bis squarely faced.
                  Equally, we should acknowledge
                  that we are doing better than most
                  comparable countries, and that
                  there is good reason to be confident.
                  In 1993 we will redouble our ef;
                  forts to accelerate economic recov
                  ery, reduce unemployment and
                  alleviate the stress which change
                  has brought to Australians in their
                  homes and workplaces. The great
                  task for we Australians is to con
                  tinue to confront necessity and
                  make the changes; while doing all
                  we can to reduce and share the bur
                  den.
                  Our success depends on our ma
                  terial and human resources, our
                  natural wealth and our energy and
                  ideas. It also depends on our faith in
                  Australia and in each other, by how
                  well we care for each other.
                  It will be good for us to be guided
                  by these things in 1993, just as they
                  have guided Australians through
                  other challenging times. I take this
                  opportunity to wish all Australians
                  Fix this texta successful, safe and happy year.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Keating
