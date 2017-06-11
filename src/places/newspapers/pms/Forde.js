import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FordeActing from './images/fordeActing.png'

class Forde extends Component {

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
            <Subheader>Prime Minister Frank Forde</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={FordeActing} alt="Sir Robert Menzies Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Acting-Prime Minister Frank Forde Announces Cabinet Rearrangement" />
               <CardText style={styles.cardText}>
                  An official announcement was made at Canberra on Friday by the Deputy-Prime Minister, Mr.
                  Frank Forde, that on account of his illness it was
                  not likely that Prime Minister Curtin would be able
                  to resume his full duties until January.
                  MR. FORDE, -in his stat _
                  ment, said that he had
                  received fro~a Dr. F.
                  Blois JLawton, medical
                  adviser to the Prime
                  Minister, a report indicating that;
                  : ? Mr. Curtin's health- had become
                  ?c affected^.tov^ii^^iHi^&pi^uOiTi'
                  the heart as a result of the heavy
                  Mid continual burden of his off i'
                  rial duties. . 9
                  'I ~:n fflad, however, to say,
                  said Mr. Forde, that since
                  entering hospital Mr. Curtin
                  has shown improvement;''
                  The repc :t further, -indicated
                  that complete rest of Mr.. Curtin
                  in hospital' this, month is neces
                  sary, and this must be followed by
                  modified rest during December,
                  with a possible resumption of work
                  some time ir Janup
                  Overtaxed His Endurance.
                  It is known that for some
                  time Mr. Curtin. bad taxed bis
                  - , physical and mental endurance to
                  the utmost, h_s : \ind being .Tilled
                  with the importance of Australia's
                  war effo.; to the exclusion, of ill
                  other interests.
                  If Mr. Curtin had taken -3 ad _
                  ; vice of his doctors he would have
                  taken a prolonged rest . much
                  earli?r, -'v.'-'': ?
                  hot several of his Cabinet col
                  leagues, also ; showing evi
                  dences of the strain, have
                  kept him almost constantly at
                  work.
                  Not Considerate Enough.
                  Down through the years it
                  has been a lamentable fact that
                  the strains of office have been
                  roost marked, upon many of our
                  most brilliant and corscientious
                  Labor represer tatives, and it
                  causes one to think ihat in some
                  respects the Movement is not con
                  siderate enough of the difficulties
                  that some of these meh are esiled
                  upon to face, particularly in times
                  like these, when tremendous re
                  sponsibilities are thrust upon them
                  because of the war. : ,
                  It has bean the practice in Aus
                  l tralia of Labor Prime Ministers
                  and Cabinet Ministers not^nderely
                  is to keep in (dose personal contact
                  I with their departments and their
                  administration, but also to be in
                  constant touch with Parliament
                  and the needs of their constituen
                  cies, as well .as with one another,
                  for Cabinet decisions cf vital im
                  portance that, are continually de
                  manding their attention.
                  A Tw enty-f our-Hour
                  Job, - v
                  Iri' times of war k is a twenty
                  four-hour Job for those who
                  ®n stand up to it. In. countless
                  directions every move, of every
                  hour, both at home and abroad,
                  must be closely watched , and con
                  sidered, and promptly acted, upon
                  as the exigencies of the occasion
                  demands it. V
                  - Ja^Sreat ? Britain; and in -other
                  countries as well, IVtinisterial as
                  sistance from Parliamentary Un
                  der-Secretaries are available to
                  the Prime Minister and his col
                  Iegues, which brings us to the con
                  sideration in Australia that far too.
                  much work is thrust on far too
                  few shoulders, an# it is just about
                  time now that something was done,
                  about it. Y
                  Pre- Sessional Party
                  Meeting.
                  At the pre-sessional meeting1 of
                  the Federal Parliamentary Labor
                  Party, which commenced at Can
                  berra; on Monday, contrary to the
                  prognostications of the capitalist
                  press 'lyre birds' and the much
                  publicised expectations of the
                  alleged newshawks, there were no
                  6 7OHN ''TP-TCC. ' ,  Help
                  6 7OHN ''TP-TCC. ' ,
                  fireworks ' or untoward .incidents
                  of. any kind recorded or reported.
                  After , sitting for about three
                  hours in discussing the pro
                  gramme of legislation for the en
                  suing session which opens to-day,
                  the Acting -Prime Minister, Mr.
                  Forde, said that the following
                  motion, moved by himself and
                  seconded by Senator Grant, had
                  been carried unanimously:
                  'This meeting, of the Federal
                  Parliamentary Labor Party ex
                  presses'' to the leader, Mr. John
                  .. Cretin, its deep regret at. his
                  Jpss and offers heartfelt hope
                  ?|pp he will be fully restored to !
                  'health so that he . may, continue ;
                  to lead the Party which he has ?
                  done so ably iri the past nine
                  years.
                  'This meeting extends its
                  congratulations to the leader on
                  the fact that shorfly he will
                  have been Prime Minister longer
                  than any other Labor leader.
                  'This .meeting; expresses ...to,
                  ^.he^ieadfer its; admiration ; of the
                  manner in which he has led the
                  nation through the years of
                  crisis and assures him of its
                  complete support in carrying
                  out the great .tasks that lie ,
                  ahead.'
                  The reference to Mr. Curtin's
                  term of office was prompted by
                  the knowledge that on December
                  2 he will have established a record
                  for continuous service as a Labor
                  Prime Minister. On that date he
                  will have - topped- the previous
                  record of the late Andrew Fisher,
                  who in 1910-13 was Prime Minis
                  ter for three years one month
                  and twenty-six days. '
                  Praise for Britain,
                  After theabove resolution
                  had been carried Mr. Forde
                  reviewed the progress of the war
                  and gave details of bomb attacks
                  on Britain.
                  Caucus then unanimously car
                  ried a resolution which will be
                  forwarded to Prime Minister
                  Churchill praising 'the continued
                  heroic spirit' of the British people
                  and expressing; sympathy in the
                  losses of life suffered as' the re
                  sult of the enemy robot and rocket
                  bombing;
                  On the motion of Senator Mc
                  Kenna, seconded by Dr. Gaha, the
                  Party decided to set up a com
                  mittee to report on the* methods
                  by which the States Grants; Com
                  mission makes recommendations
                  The Aluminium Bill, which. had
                  been introduced last session and
                  nad reached the second reading
                  stage, was under discussion when
                  the meeting adjourned until the
                  following day.
                  Cabinet Arrangements.
                  Cabinet arrangements to
                  cover the absence of the Prime
                  Minister,. Mr. Curtin, while he- is
                  ill, were announced on Monday
                  by the Deputy Prime Minister.
                  Mr. Forde.
                  Mr. Forde, who seems to be 'the
                  'iron man' of the* Cabinet and
                  indefatigable in his activities, will
                  act as Prime Minister' and Minis- -
                  ter for Defence in Mr. Curtin's -
                  place. The Minister for Health :
                  and Social Services, Senator 1
                  .Fraser, will take over Mr.-. Forde's !
                  ; duties as Minister for the Army i
                  'and will, while so- acting, have a
                  seat iri War Cabinet. ' He will
                  continue to handle- his own de
                  partments.
                  The Treasurer, Mr. Chifley, |
                  will fill the temporary vacancy |
                  in the.; War Council caused
                  by Mr. Curtin's absence.
                  Mr. Forde said that the Prime
                  Minister, Mr. . Curtin, whom he
                  had seen on the previous day, was
                  making satisfactory progress, ' and
                  provided hie carried out the doc
                  tor's instructions to take a
                  month's modified rest, he would
                  be restored to good health.
                  The Session's Business.
                  For the session which opens
                  in Canberra to-day the Govern
                  ment is not expect 2d to introduce
                  any contentious legislation. Legis
                  lation it is expected will ratify the
                  financial agreement with the
                  States and validate sinking-fund
                  payments that have been made by
                  the States since the depression.
                  Legislation wiU also be sub
                  mitted to1 provide' finance -for
                  drought relief to cereal growers1
                  agreed upon at the last Premiers'!
                  [Conference, and the Government
                  hopes, to pass bills introduced last
                  session to ratify Australia's par- ? ?
                  ?ticipation in IT.N.R.R.A. and to
                  : ratify proposals reached at the N
                  | Hot Springs Food Conference.
                  The legislation ito -ratify the ';
                  'financial agreement with^ the —
                  i States may lead to debate'- oii^ ~ :
                  the Government's financial policy
                  [generally, and although it £ not
                  expected at this s'ession that the
                  Government will introduce its pro- .
                  posed legislation on banking, Big .
                  Business appears to be very jit-1
                  tery on the subject, and members
                  may take the opportunity of ex
                  pressing their views on what must;
                  be counted a most significant as
                  pect of Labor policy. Owing' to
                  Mr. Curtin's illness it is not ex
                  pected that the Government's
                  banking legislation will take legis
                  lative form until early in the new
                  year. It is probable that it will
                  be introduced in the session which
                  will begin in February.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Forde
