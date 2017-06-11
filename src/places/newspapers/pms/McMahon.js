import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import McMahonNz from './images/mcMahonNz.png'

class McMahon extends Component {

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
            <Subheader>Prime Minister William McMahon</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={McMahonNz} alt="William McMahon Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="By DAVID SOLOMON and MICHAEL JACOBS" />
               <CardText style={styles.cardText}>
                  Mr McMahon (Prime Minister). -
                  on which (the Prime Miniver of
                  New Zealand) should hold his
                  election.
                  THE only MPs who are at all
                  interested in what is hap
                  pening in Parliament arc the
                  senior Ministers who are using
                  it to reveal and give credence
                  to policy proposals for this
                  year's elections. The Prime
                  Minister, two weeks in a row,
                  has unveiled new schemes, one
                  on urban and regional devel
                  opment, the other on foreign
                  takeovers. The latter is not
                  expected to take legislative
                  form before the elections; leg
                  islation to set up the authority
                  which will look after planning
                  of the development schemes
                  was supposed to he introduced
                  this week, but is not yet com
                  pleted.
                  Backbenchers on both sides
                  and the Opposition leadership
                  are going through the motions
                  of debate, but that is all. There
                  have been few concerted Op
                  position attacks on the Gov
                  ernment, except over the AGL
                  stecl pipe issue, and attacks on
                  Mr McMahon for his handling
                  of the Jetair aircraft purchase
                  in 1971. Most MPs simply
                  want to go back to their elec
                  torates and get on with the
                  business of fighting the elec
                  tions.
                  Mr Whitlam (Opposition Lead
                  er), at the Playhouse, opening
                  the election campaign of Mr En
                  dcrby (Lab, ACT). - Nobody
                  knows when the election will be.
                  Three people, it is suggested,
                  have been told. I don't know
                  whether they're here or above.
                  ^HE Government introduced
                  a motion into the Senate on
                  Thursday delaying until Octo
                  ber 26 the deadline for Senate
                  Estimates committees to report
                  back to the Senate. This means
                  that the Senate will not com
                  plete its consideration of the
                  Budget until that day, or the
                  following day, a Friday. The
                  major Budget Bills will then
                  go back to the House of Rep
                  resentatives before going to the
                  Governor-General for assent.
                  By a strange coincidence, the
                  Government has been plan
                  ning to bring the House of
                  Representatives sittings to a
                  conclusion on October 26, so
                  the return of the Budget Bills
                  may be the very last event that
                  takes place in the House be
                  fore the final adjournment is
                  moved.
                  Or perhaps it is not all that
                  strange after all. On the notice
                  paper at the moment is a con
                  tingent notice of motion from
                  Mr Gorton to bring on the
                  highly divisive Territorial Sea
                  and Continental Shelf Bill,
                  which would certainly involve
                  at (cast two defections from
                  the Government's ranks. This
                  notice comes into effect at the
                  conclusion of the consideration
                  of the two Appropriation Bills.
                  Mr Gorton will have to be very
                  alert to be on hand at the
                  precise moment the Bills are
                  brought back into the House,
                  if he is to have the opportun
                  ity to move his motion before
                  the House ceases to exist.
                  Mr Anthony (Deputy Prime
                  Minister), attacking the ALP in
                  the wake of the sole of one mil
                  lion tons of wheat to China. -
                  . . . this is the day of retribution.
                  'JTHE Prime Minister's reputa
                  tion as a judge of public
                  opinion suffered a minor blow
                  this week with the publication
                  of a public opinion poll on the
                  rating of Mr Bob Hawke,
                  President of the ACTU. When
                  Mr McMahon appeared on
                  David Frost's television show,
                  he expressed the belief that Mr
                  Hawkc's popularity rating had
                  gone down a lot, "a tremen
                  dous amount", during the pre
                  vious four or five weeks. That,
                  of course, was the time of the
                  oil strike, and of Mr Hawke's
                  television confrontations with
                  Mr Lynch and Senator Green
                  wood. Mr Frost challenged Mr
                  McMahon and said Mr
                  Hawkc's rating was still very
                  high, to which Mr McMahon
                  replied, "It was at the last one
                  - watch the next one and I
                  think we'll get a better opin
                  ion".
                  This week the ANOP poll
                  showed Mr Hawke's ratine as
                  having improved from 28%
                  a year ago, and 55% in July
                  to 60% in August.
                  Mr Anthony (Minister for
                  Trade). - I said on television I
                  wasn't prepared to sell my soul
                  Mr Foster (Lab, SA). - They
                  wouldn t buy it.
                  JJADIO listeners tuned to
                  2CY on Wednesday for the
                  Senate broadcast would have
                  been very surprised to hear
                  just after 11.30am a few sen
                  tences, punctuated by cheers
                  and applause, of a speech made
                  in German. This aberration,
                  occupied about 20 seconds of
                  a 1 i -minute cut-out of tha
                  broadcast, and was peculiar to
                  2CY. When the land-line from
                  2BL in Sydney to 2CY cut out,
                  a PMG technician in Canberra
                  in trying to set up an alterna
                  tive circuit to restore the
                  broadcast, matched Dp tho
                  wrong one. At the time, 2CN
                  was transmitting a schools
                  broadcast in German, and that
                  was what found its way on to
                  2CY.
                  It was a lapse the PMG did
                  not really need, particularly on
                  that day. On Tuesday, the
                  Postmaster-General, Sir Alan
                  Hulme. had given Mr VVhitlam
                  a written answer about the
                  long interruption of the broad
                  cast on the night of August
                  22, when Mr VVhitlam hacf
                  been making his speech on tha
                  Budget.
                  Asked what had been done
                  to ensure that faults would be
                  overcome more efficiently and
                  promptly than on that occa
                  sion, Sir Alan said the delay
                  on August 22 had been due to
                  the obscure nature of the fault
                  and it was unlikely to recur.
                  Although PMG officials
                  could not say on Wednesday
                  exactly what the fault had
                  been this week, they were
                  able to restore the broadcast
                  quite quickly. But they
                  must wonder what makes their
                  equipment give out when it
                  does: last month, Mr Whitlam
                  on the Budget; this week, Sen
                  ator Wright, speaking before
                  tabling the Jetair files.
                  Senator Sir Magnus Cormack
                  (President). - 1 suppose all
                  Honourable Senators are aware
                  that there are about 700 clocks
                  in Parliament House.
                  JT should be interesting when
                  the Australian Broadcasting
                  Commission goes before Sen
                  ate Estimates Committee B on
                  Tuesday week. The ABC re
                  ported to Parliament this week,
                  and its chairman, Sir Robert
                  Madgwick reiterated in another
                  forum that there were some
                  things the ABC thought it
                  should not be required to tell
                  Parliament. Sir Robert con
                  cedes that in principle the
                  Parliament can have whatever
                  information it wants, and in
                  this he is at one with the Sen
                  ate and Committee B. But he
                  nays there are some things
                  .which Parliament ought to re
                  frain from asking, while Com
                  mittee B says it can and will
                  ask anything bearing on ex
                  penditure, but is prepared to
                  ask some things in camera.
                  There is a third dimension.
                  The Senate as a whole has
                  reservations about estimates
                  committees going into camera,
                  and resolved on Thursday that
                  only the Senate itself could
                  decide that an estimates com
                  mittee should go into camera,
                  and the estimates committee
                  concerned would have to make
                  its case in each instance. That
                  could lead to much ringing of
                  the bells to call the Senate
                  together on Tuesday evening.
                  Sir William Aston (Mr Speak*
                  er). - / think it is really time
                  iir took a stent look at our
                  selves. ,
                  F , New York this week
                  at the United Nations the
                  Minister for Foreign Affairs,
                  Mr Bowen, made a plea for a
                  comprehensive treaty to pro
                  hibit the conduct of nuclear
                  weapon testing in all environ
                  ments by all States, and sug
                  gested as a first step the uni
                  versal acceptance and appli
                  cation of the existing treaty
                  banning nuclear weapon test
                  ing in the atmosphere (which
                  Australia has signed and rati
                  fied).
                  Meanwhile, in Canberra
                  there have been no steps at all
                  taken to have Australia ratify
                  the nuclear non-proliferation
                  treaty. The treaty was signed
                  after a major battle between
                  the Foreign Affairs Depart
                  ment and the Atomic Energy
                  Commission, which Mr Mc
                  Mahon, as Foreign Minister,
                  played an important part in
                  winning. But there is no desire
                  in the Cabinet for Australia
                  to demonstrate its real com
                  mitment to non-proliferation,
                  given that there is an election
                  on the way, and the DLP and
                  'many Liberals believe Aus
                  tralia should be preparing to
                  acquire its own nuclear
                  weapons.
                  Senator Wright (Minister for
                  Works, representing the Foreign
                  Minister). - I will remind the
                  Senate of the terms in which our
                  position (on China) is restated
                  today.
                  Senator Georges (Lab, Qld)t
                  er: Oh, not again. .
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default McMahon
