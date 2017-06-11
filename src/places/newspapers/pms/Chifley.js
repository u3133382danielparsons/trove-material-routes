import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import ChifleyVision from './images/chifleyVision.png'

class Chifley extends Component {

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
            <Subheader>Prime Minister Ben Chifley</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={ChifleyVision} alt="Ben Chifley Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Ben Chifley: Man of vision" />
               <CardText style={styles.cardText}>
                  BEN CH1FLEY, as man
                  and politician, holds a
                  special place in Australia,
                  and it was no surprise to see the
                  experts voting him as our great
                  est leader.
                  A handsome man with high
                  cheekbones and a twinkle in his eye,
                  the gravel-voiced, pipe-smoking
                  Chifley was deeply admired and
                  trusted by all sides of politics, and
                  inspired a loyalty which few leaders
                  have equalled.
                  There are many stories about
                  Chifley's humility and humanity,
                  but perhaps the most touching is the
                  one about his direct-line telephone
                  in his office which had a number
                  that differed by only one digit from
                  the butcher at Manuka.
                  It was not unusual on a Friday
                  for a busy housewife ordering the
                  week's meat to mis-dial and get the
                  PM.
                  "Chif'. would dutifully take down
                  the order and then telephone it
                  through to the butcher.
                  No-one would know that the
                  prime-ministerial hand had been in
                  volved. But that was Chifley. He
                  was, certainly, as one respondent
                  put it, "our most loved prime minis
                  ter".
                  Of the reasons listed for nomi
                  nating Chifley as an outstanding
                  Australian leader, a common thread
                  runs through the responses, listing
                  principle, vision, leadership, states
                  manship and common sense.
                  One political scientist character
                  , iscd Chifley as "solidity with judi
                  cious application of principle".
                  ■ Referring to Chifley's doctrinaire
                  insistence on bank nationalisation
                  — a legacy from his term in the
                  1930s as a member of the Royal
                  Commission on Monetary and
                  Banking Reform — one academic
                  hailed Chifley for "his warm down
                  to-earthness and his ability to carry
                  people with him in spite of his later
                  ill-starred obsession with banking
                  reform".
                  Several respondents nominated
                  Chifley as the best Treasurer Aus
                  tralia had ever had, one comment
                  ing that "with nc schooling he
                  mastered Treasury, combining a
                  clear vision and a political passion
                  and achieving a significant change
                  to the institutional and legal frame
                  work of Australian society to
                  achieve his vision".
                  Another respondent said of Chif
                  ley, "Chifley attempted to control
                  the transition of Australia's econo
                  my from a war-time to a peace-time
                  footing while implementing a pro
                  gressive social-reformist package.
                  His administration also tested the
                  parameters of federal powers in the
                  policy arena."
                  Several respondents noted Chif
                  ley's "thoroughgoing decency" and
                  "honest commitment to princi
                  ples".
                  All who nominated John Curtin
                  spoke of his dedicated and inspira
                  tional leadership during the dark
                  years of World War II, and several
                  made special mention of Curtin's
                  "standing up to Churchill" in the
                  interests of Australia.
                  He was also seen by many as a
                  man of integrity and high principle.
                  One respondent said of Curtin:
                  "He was a genuine and effective
                  nationalist leader who negotiated
                  Australia's future through the crisis
                  of war in the Pacific without com
                  promising Australia's interests or
                  identity.
                  "In refusing to bend to the dic
                  tates of either Churchill or Roose
                  velt he maintained Australian
                  integrity and interests despite the
                  trauma of global war and dilificullies
                  on the home front.
                  "In his private life he overcame
                  difficulties and sadness, yet he de
                  ' It was not
                  unusual on
                  a Friday for
                  a housewife
                  ordering the
                  week's meat
                  to misdial
                  and get
                  the PM.'
                  voted himself to his nation and its
                  people, unselfishly, dying in office
                  at a relatively young age."
                  Another hailed Curtin's ability
                  "to unite the nation by rhetoric and
                  political daring, because of his con
                  tinuing the movement of Australia
                  towards independence and a clear
                  national identity", and also com
                  mented on "the simplicity of his
                  lifestyle and his devotion to the of
                  fice and not to its perquisites".
                  Yet another remarked that Cur
                  tin had "confronted the biggest cri
                  sis so far encountered by any prime
                  minister".
                  Deakjn was well regarded for
                  "having established the liberal di
                  rections of the federal government"
                  and for his "clear and unambiguous
                  enunciation of Australian national
                  aspirations".
                  Others saw Deakin as a leader
                  and visionary "who strove for a lib
                  eral and a just society", while sever
                  al noted that the achievements of
                  Deakin were to set the agenda for
                  governments of all persuasions right
                  through to the present time.
                  Another labelled Deakin "the
                  great constructor", while several
                  noted his ability to see "farther and
                  more clearly than his contempo
                  raries about what Australia could
                  become".
                  One labelled Deakin's qualities
                  as "founding father, fine intellect,
                  scholar, gentleman, party-builder,
                  orator and administrator".
                  Of Gough Whitlam, it was noted
                  he had not only transformed his
                  own party but he had been a daunt
                  less and courageous reformer —
                  and the only political leader of his
                  age who could be called a visionary.
                  One respondent called him "a
                  tireless innovator and a do-gooder",
                  while several noted that he had been
                  the first leader for many years to
                  identify and then address specific
                  problems despite strong opposition.
                  One noted, "Whitlam stands out
                  for trying to change Australia and
                  for giving Australians a new sense of
                  national possibilities."
                  Many who nominated Robert
                  Menzies noted the sheer endurance
                  of his second prime ministership
                  from 1966 to 1949, and his political
                  skills and ability as an orator.
                  One remarked, "Menzies presid
                  ed over, in a sensible way, our lon
                  gest period of uninterrupted
                  prosperity and he articulated an in
                  clusive conservatism rather than
                  the class-based conservatism of the
                  Liberal Party of the 1990s.
                  Several referred to Menzies' suc
                  cess in forming the Liberal Party,
                  while one respondent noted "his
                  skilful use of symbols" to communi
                  cate with the electorate.
                  Many referred to the way in
                  which Menzies had understood his
                  fellow Australians and his grasp of
                  history, but others were less compli
                  mentary. Menzies was included on
                  one list "because he was there so
                  long and because he was the arche
                  typal truly unimaginative Austra
                  lian conservative".
                  Billy Hughes was hailed for his
                  wartime leadership, his insistence
                  on the rights of small countries at
                  the post-World War 1 international
                  conferences, and his courage in de
                  fying his party and introducing con
                  scription in the national interest.
                  Bob Hawke was recognised for
                  his action on the environment,
                  women's issues and Aboriginal land
                  rights while Andrew Fisher was well
                  regarded for his social policy initia
                  tives in his 1910-13 administration
                  and his setting up of major statutory
                  corporations such as the Common
                  wealth Bank and the Australian Na
                  tional Line. ..
                  Malcolm Fraser was nominated
                  for his stand against South Africa,
                  and his electoral successes.
                  James Scullin was mentioned for
                  political courage, commitment and
                  integrity in the face of overwhelm
                  ing obstacles, such as the Great De
                  pression and a divided Labor Party.
                  Among the also-rans, Gorton was
                  named for his individualism and
                  sense of Australian nationalism,
                  Bruce for being the first to see what
                  the national government could
                  achieve by the use of its powers.
                  Barton for his work in bringing the
                  federation into reality, Lyons for
                  courage and integrity and Watson
                  for being the first Labor prime min
                  ister.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Chifley
