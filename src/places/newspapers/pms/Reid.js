import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import ReidPoet from './images/reidPoet.png'

class Reid extends Component {

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
                <MenuItem onTouchTap={this.handleClose}><Link to="../../../" >Home</Link></MenuItem>
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
            <Subheader>Prime Minister George Reid</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={ReidPoet} alt="Reid Poet" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="PUTTING POETS BEFORE POLITICIANS." />
               <CardText style={styles.cardText}>
                Australian poet, journalist
                and artist Anne Fairbairn, grand
                daughter of Sir George Houstoun
                Reid, Prime Minister in 1904 and
                1905, believes that poets are better
                equipped than politicians to find a
                way to world peace.
                Poets "intuit" and "truly under
                stand what's happening — more
                than politicians often", she said a
                few days ago. Describing herself as
                a "sort of strange self-appointed cul
                tural ambassador" for Australia,
                Mrs Fairbairn has recently returned
                from extensive travel in the Middle
                East, where she spoke at 19 univer
                sities about Australian poetry and
                painting. She has come to know the
                problems and conflicts of that part
                of the world intimately and believes
                that the peace process has not been
                pursued urgently enough.
                "I wonder if terrorism and bomb
                ings would occur, the tit-for-tat that
                goes on such as the killings of Israel
                is in Cyprus and the follow-up bom
                bing in Tunisia, if the peace process
                got seriously under way," she said.
                "People forget to get down to the
                nitty-gritty. The nitty-gritty is that
                everything is trying to hold the
                peace process up. There's a con
                certed effort, as far as I can see, to
                stop it. It would be in the interests
                of both sides if they were less in
                transigent."
                During her visits to Arab coun
                tries, Jewish poetry had been quoted
                and widely appreciated, suggesting
                to her that political differences were
                "hardened among the leaders of the
                countries, but not as hard among the
                people".
                She identified closely with the
                words of a Syrian professor who said
                that "poets and artists succeed
                where politicians fail because poets
                and artists and academics transcend
                racial, political and religious dif
                ferences and bring people of the
                world closer".
                She also believes that poetry is
                one of those mysteries that make, to
                borrow some words from Word
                sworth, "the whole human race one
                brotherhood".
                Arabs by their very nature were
                poets, and were inspired by. Aus
                tralian poetry. They especially iden
                tified with Australia's deserts and
                the country's apparent wealth,
                seeing parallels with the deserts and
                the wealth of the oil-rich Gulf coun
                tries.
                "You can use the desert in literary
                form as the symbol of the desert that
                grows within, and they know exactly
                what you mean because they realise
                the more you have, the more you
                can lose," she said.
                A number of Australian poems
                had been translated into Arabic,
                including Geoffrey Dutton's 'Oasis',
                Judith Wright's 'Blue Arab', Tom
                Shapcott's 'Water' and A. D. Hope's
                'Legend of the Myrrh Tree* and 'The
                Nomads'.
                Mrs Fairbairn is compiling a book
                of Arabic verse from the modern
                school, selections from the 1940s
                onward.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Reid
