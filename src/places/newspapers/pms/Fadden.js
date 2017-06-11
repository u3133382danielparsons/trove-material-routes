import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FaddenRef from './images/faddenRef.png'

class Fadden extends Component {

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
            <Subheader>Prime Minister Sir Aurthur Fadden</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={FaddenRef} alt="Sir Arthur Fadden Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="SIR ARTHUR FADDEN ASKS FOR
NATIONAL THANKSGIVING" />
               <CardText style={styles.cardText}>
                  The acting Prime Minister, Sir Arthur Fadden, has suggested
                  to the Churches of Australia thal they should hold special prayer and
                  thanksgiving services next Sunday, to mark the end of the Korean
                  War.
                  Sir Arthur Fadden stated
                  this in a nation-M ide broadcast
                  hist night.it . %vi ii
                  He said at these services Aus-
                  tralians could, in particular, re-
                  member and pay reverent tribute
                  to thosej-who lostpj-heir liv,es ix
                  Korea', and commemorate Uhe
                  end of hostilities.
                  Sir Arthur Fadden warned
                  that the task in Korea was not
                  yet over. Each country he said,
                  had an international obligation
                  to help in the re-building of
                  Korea.
                  He said we mu=t 'not forget
                  that the biggest sufferers of all
                  in this conflict had been the
                  Korean oeople I
                  Tb^ South Korenn forces hs»d '
                  foi'ght vallin*lv and bv lh
                  end of the fighting «ore hold-
                  ing .over^ half t^l(^îIi?tttl^*línp.,
                  Treaj0}diu'' devastation had
                  ¿lJ^%tfught in their county as
                  the result of Communist aggies
                  sion, and they still needed our
                  aid
                  "In addition, while a more
                  permanent basts for peace in
                  Korea is being sought, it w11!
                  ,J)e necessary for forces from
                  i (ho XTn'ted Nations, including
                  Australia, to remain in Korea,"
                  he said
                  Sir Arthur said it would bo
                  hard enough to rent h a settle-
                  ment if all sldps wero in com-
                  plet" agreement on the terms
                  of thi armistice
                  "Unfortunately we know thft
                  the Government of the Republic
                  of Korea continues to have seri-
                  ous doubts as to its wisdom
                  "Jt has wanted to fi?ht on to
                  unify its country, but President
                  Eicenhowpr has made it clear
                  finrLjAve «nin^r-phe to this view
                  thfgSSBrco should not ?"be^i'c* to
                  aq$fefe this polltioa^Qb^ective."
                  Sir Arthur Fadden said that
                  while we stood for the unification
                  of Korea and would'work'for it
                  in the United Nations and at the
                  political jconferencë, it was, our
                  earnest hope that the South
                  Koreans would loyally co-operate
                  in the armistice while we worked
                  for a peaceful settlement of the
                  outstanding problems.
                  The military action In Korea
                  would take an . important 'place
                  in world history. ,
                  The free nations had demon-
                  strated that an aggressor nation
                  would find itself resisted, not on-
                  ly by the victim but by the un-
                  ited efforts of other countries,
                  too.
                  Instead of the invasion of
                  Korea beinsr the seed from whicli
                  a third world war could' arise,
                  it ¡ had been a demonstration
                  which" "mierht ? prevent" ra .world.
                  Fix this textWffo ^SUrrinS'
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Fadden
