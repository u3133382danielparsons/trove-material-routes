import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import HawkeNine from './images/hawkeNine.png'

class Hawke extends Component {

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
            <Subheader>Prime Minister Bob Hawke</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={HawkeNine} alt="Bob Hawke Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Nine years later a less fiery Bob Hawke" />
               <CardText style={styles.cardText}>
                  Bob Hawke then (1979) and now.
                  The world is a different place than
                  it was when Mr Hawke gave the ABC
                  Boyer Lectures in 1979. Mr Hawke is
                  also a different man.
                  The world looks a little safer, Mr
                  Hawke looks less challenging. Perhaps both have compromised.
                  As Mr Hawke, now Prime Minis
                  ter, reflected when he delivered the
                  first of the ABCs 1988 Boyer lectures
                  yesterday, the international environ
                  ment in which he delivered the 1979
                  Boyer lectures, as president of the
                  ACTU, was one of "bitterness, ten
                  | sion and anxiety.
                  "There was genuine apprehension
                  of superpower conflict ... the oil
                  price shocks, the fall of the Shah [of
                  Iran] and, later, the Soviet move into
                  Afghanistan...
                  As we stood on the threshold of
                  the '80s, our world ... was fraught
                  with danger and uncertainty. A de
                  cade later, the world looks a much
                  safer and more stable place," he said.
                  Whether or not his lecture was a
                  reflection of changed conditions, Mr
                  Hawke's Boyer lecture of 1988 will
                  provoke nowhere near the reaction of
                  his series of five lectures nine years
                  ago. Some may say Mr Hawke is
                  more realistic these days, others that
                  things are different, others that he has
                  lost some of the fire from his belly.
                  Reaction to Mr Hawke's lectures
                  in 1979 ranged from outrage to de
                  mands from at least one major news
                  paper that the Federal Government
                  pay serious attention to what he was
                  saying. Among the most controver
                  sial of his suggestions were that state
                  governments should be scrapped, a
                  proportion of federal government
                  ministers should come from outside
                  the elected members, and that com
                  munes could be set up as an alterna
                  tive to unemployment benefits.
                  Mr Hawke took to the ABC micro
                  phone with both barrels in his first
                  lecture in 1979, stating that he be
                  lieved "Australians would be better
                  served by the elimination of the sec
                  ond tier of government — ie, the
                  states — which no longer serve their
                  original purpose and act as a positive
                  impediment to achieving good gov
                  ernment in our current community.
                  It would be desirable in these circum
                  stances to strengthen what is now the
                  third tier, local government, so that
                  in relevantly demarcated geographi
                  cal areas people could participate in
                  the decision-making process on is
                  sues appropriate to be decided at that
                  level".
                  Mr Hawke's argument was that the
                  state lines "representing the mean
                  derings of British explorers some 150
                  years ago" were irrelevant at a time
                  when Australia had become one
                  economy rather than a collection of
                  six economies. "The perpetuation of
                  this anachronistic lunacy is hurting
                  Australians every day of every
                  week," he said.
                  Mr Hawke complained that, with
                  in the various states, education sys
                  tems, rates of pay and petrol prices
                  varied dramatically. The truth of
                  why this system remained lay in the
                  "power, prestige and opportunity for
                  patronage that has accumulated
                  within Die operations of the states
                  system".
                  Continued on Pag* 2
                  Continued on Page 2 Scroll to previous page
                  Bob Hawke less fiery nine years later

                  Continued from Page 1

                  His views were criticised roundly by all
                  state premiers in the newspapers the next
                  day. The then Premier of Victoria, Mr
                  Hamer, said that it was the "same old cry
                  from people who would like to centralise
                  all powers in Canberra" and, in Queens
                  land, the then Premier, then Mr Joh
                  Bjelke-Petersen, said Mr Hawke was
                  "barking up a tree in which there are no
                  possums".

                  In his second lecture, Mr Hawke chal
                  lenged the Westminster system and Sec
                  tion 64 of the Constitution which states
                  that.. after the first general election no
                  minister of state shall hold office for a
                  longer period than three months unless
                  he is or becomes a senator or member of
                  the House of representatives". Mr Hawke
                  advocated that as an initial step,
                  one-quarter of the positions of the minis

                  try should be open to people not elected

                  to Parliament

                  These ministers would be responsible
                  to Parliament and would have the right to
                  speak in debates but would not have vot
                  ing rights. He argued that such a system
                  would enable the Government to call on a
                  greater pool of talent for its ministers.

                  However, the proposal which pro
                  voked most interest in 1979 was a sugges
                  tion that the public should consider
                  setting up "alternative lifestyle" commu
                  nities as an alternative to the dole. Mr
                  Hawke suggested that in place of the "to
                  tally negative" relationship — based on
                  the dole — between the mainstream com
                  munity and those who opted out, conven
                  tional society could assist in providing
                  land and facilities for eventually self-sup
                  porting communes.

                  In his final lecture that year, Mr Hawke

                  spoke of the modernisation of China and
                  strengthing trade bonds between China
                  and Japan and said that Australia should
                  urgently turn its attention to the ASEAN
                  countries which, he predicted, would
                  soon become as significant in world trade
                  as Japan.

                  Yesterday, a greyer Mr Hawke said
                  there was now cause for optimism in
                  Australia and the broader international
                  environment. "I believe that at no point
                  in post-war history has there been greater
                  legitimate reason for optimism that the
                  world is entering an era of constructive,
                  peaceful relations between the super
                  powers," he said.

                  On Australia, he said employers, trade
                  unions and other community groups had
                  been brought together in closer coopera
                  tion on economic issues, that there had
                  been growth in employment, a fall in
                  inflation and a wiping out of the Budget
                  deficit. The manufacturing sector was al
                  so in the process of change, tariffs had
                  been reduccd dramatically, and the in
                  dustrial award system had been funda
                  mentally restructured.

                  Mr Hawke said these changes were a
                  "proud assertion about our increasing
                  maturity as Australians" and "proof that
                  we are learning about the resolution of
                  conflict in our nation.

                  "It is a statement about time-scales —
                  that present restraint can achieve sub

                  stantial and enduring future benefit"

                  Mr Hawke praised President Reagan
                  and the Soviet leader, Mr Gorbachev,
                  who, he said, had provided the world
                  with "greater grounds for optimism than
                  at any other point in the nuclear age". He
                  said the implications of the Soviet Union
                  being integrated into the international di
                  vision of labour were enormous, and that
                  changes under way under Mr Gorbachev

                  were among the most significant of the .

                  era.

                  The West should approach the changes
                  cautiously, but should be prepared to re
                  spond positively to Mr Gorbachev. "A
                  Soviet Union more dedicated and direct
                  ed to feeding and lifting the living stan
                  dards of its own people will be a more
                  congenial neighbour on this planet Earth
                  than one devoting almost a fifth of its

                  output to defence and the capacity to,
                  destroy the rest of mankind," he said.

                  "The task and the challenge before us is
                  to continue to give our support to the new
                  momentum, particularly on the part of
                  the United States and the Soviet Union,
                  toward achieving a more peaceful world
                  where the resources of mankind will be
                  more constructively deployed."

                  Mr Hawke said that since 1979, the
                  world had made some progress toward
                  closing the "frightening gap" between the
                  "human genius as technical engineer and
                  our capacity as social engineer".

                  Digitisation generously support
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Hawke
