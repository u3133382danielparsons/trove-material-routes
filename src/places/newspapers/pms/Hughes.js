import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import HughesSearch from './images/hughesSearch.png'

class Hughes extends Component {

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
            <Subheader>Prime Minister Billy Hughes</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={HughesSearch} alt="Billy Hughes Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="A DISENCHANTED ODYSSEY" />
               <CardText style={styles.cardText}>
                 Billy Hughes In
                 Search Of A City
                 By L. F. FITZHARDINGE
                 Reader In Australian History, Australian National University
               </CardText>
               <CardText style={styles.cardText}>

                  A suburb of Canberra has now been named
                  in memory of William Morris Hughes,
                  Australia's most colourful Prime Minister.
                  This address, given as part of the Him'noc
                  Exposition week, Mr. FiSzhardinge describes
                  Billy Hughes' first — and rather distant —
                  look at the site, of the National Capital.
                  JJUGHES was one of
                  those who had
                  strongly opposed the
                  proposed - Constitution
                  as being among other
                  things, unfair to N.S.W.,
                  and Reid's amendment
                  failed to assuage his
                  opposition. The so
                  called cunning and as
                  tute George . Reid, he
                  declared, had- been
                  simply dished like a.
                  dinner toy the Victori
                  ans. He tried, without
                  success, to induce the
                  N.S.W. Parliament to
                  insert an amendment to
                  the Bill to make Sydney
                  the Capital.
                  Once the Constitution was
                  adopted it remained to find
                  a site within the limits it
                  prescribed. Some 40 towns
                  were put forward by patriotic
                  inhabitants. A N.S.W. .Royal
                  Commissioner, Alexander
                  Oliver, examined -23 of these,
                  and recommended three—the
                  Southern Monaro (Bombala)
                  The Canoblas (Orange), and
                  Yass. Queanbeyan he rejected
                  as too inaccessible.
                  The first session of the
                  Federal Parliament was occu
                  pied in establishing an
                  administrative framework for
                  the Commonwealth and in
                  interminable debates on the
                  tariff; in the recess parties
                  were organised so that mem
                  bers could inspect the var
                  ious sites for themselves, nor
                  did they limit themselves to
                  those recommended by
                  Oliver. The Senatorial Party
                  went first, followed some
                  what later by the Represen
                  tatives. .
                  Strenuous
                  The latter tour took place
                  in May 1902, and consisted
                  at the outset of 15 members
                  (the • personnel fluctuated
                  somewhat), with their train
                  of officials, attendants and
                  pressmen. Hughes, who at
                  this time favoured Lyndhurst,
                  in central western New South
                  Wales, did not take part in
                  the tour of. the western and
                  northern sites, but joined the
                  party in Sydney for the in
                  spection of the sites in
                  south-eastern New South
                  Wales.
                  The itinerary was a strenu
                  ous one, comprising long
                  coach journeys and nights in
                  primitive bush hotels, punc
                  tuated with .civic receptions
                  and- banquets of turkey, so
                  that- it was a notable
                  occasion when at Goulburn
                  they were served with roast
                  beef. Throughout Hughes
                  was conspicuous alike for his
                  physical stamina and his high
                  spirits, running for great dis
                  tances ahead of the coach on
                  mountain roads and taking
                  the lead in practical jokes at
                  night.  '
                  He first attracted notice
                  when the party, having been
                  taken by train to Nowra and
                  thence by coach to Jervis
                  Bay, was being transferred
                  outside the harbour from the
                  N.S.W. government yacht to!
                  W. M. Hughes  Help
                  W. M. Hughes
                  the Wakatipu, which was to
                  take them overnight to Eden.
                  The correspondent of the
                  Age gave, a vivid description
                  of the embarkation:
                  "At 7 o'clock last night, the
                  steamship Wakatipu stood off
                  the mouth' of Jervis. Bay . . .
                  Those' aboard were gazing
                  over the dark expanse of
                  waters for the first glimpse,
                  under the fitful gleams from
                  the lighthouse, of the Parlia
                  mentary party in search of
                  the Federal Capital . . . Leav
                  ing Sydney at 10 a.m. on
                  Monday, the excursionists
                  travelled over the' line from
                  Nowra. But for mosquitoes,
                  the members would have
                  been enraptured with the
                  scenery. A coach ride of 15
                  miles through forest and
                  across the Shoalhaven River
                  brought the travellers to Jer
                  vis Bay, where it was neces
                  sary to lake open beats to
                  the Government yacht Vic
                  toria and subsequently to the
                  Wakitipu by the same
                  means."
                  Energy
                  The work of changing
                  ships was not accomplished
                  without difficulty. The first
                  boatload left the'Victoria for
                  two or three indefinite look
                  ing lights a mile away, with
                  fervent wishes from those
                  left behind for its safe ar
                  rival. The sailors who pulled
                  were considerably inconveni
                  enced. by the good nature of
                  Mr. Hughes, who- sat facing
                  stroke and "with wonderful
                  energy persisted in gravely
                  and awkwardly pushing the
                  oar to help the rower when
                  he was finishing the stroke.
                  The sailor entreated and
                  swore by turns, and had not
                  Sir William Lyne warned Mr.]
                  Hughes that if he did not
                  leave things, alone, the .party
                  might spend the night on the
                  open sea, that- Hon. member
                  would have run the risk of
                  being surreptitiously dropped
                  overboard."
                  From Eden, where the
                  parly were regaled with
                  stories about fishes am
                  whales" and the • legend o
                  Ben Boyd, the. party went b
                  coach to Pambula, where
                  they spent the night before ;
                  an early start on the long arduous drive up the
                  mountains to Bombala. Arriving exhausted and half-'
                  frozen, they were informed
                  that arrangements had been'
                  made for them to 'follow the'
                  example of the Senators and;
                  give a concert in aid of a
                  local charity, with a dance to
                  follow the next evening. Since
                  none of the party could either
                  play or sing, the concert was
                  something of a fiasco, "the'
                  one gleam of humour" being;
                  (the encore given to Hughes!
                  after he had led off the pro-'
                  ceedings with a recitation,
                  greatly assisted by the audience, of "How Bill Adams
                  won the Battle of Waterloo."
                  Freezing
                  Mr. Huglics gave a
                  heart-rending scene about "A
                  Death in the Workhouse.'
                  After this "a dead hollow
                  flatness settled over the con-
                  cert that was depressing as
                  the silence of the Mountains.'
                  Next day was spent driving
                  in a piercing wind around
                  Bombala, and dancing until
                  after midnight, with a 8
                  o'clock start for Dalgety next
                  morning. At Dalgety just emerging from its time-hooured designation of Buckley's Crossing where the half
                  dozen houses seem to have!
                  been washed up and left on
                  the bank during a flood,
                  they were again driven
                  around the local beauty spol
                  with the local magnate,
                  of the ubiquitous clan Camp',
                  bell. Hughes, hoping to keep
                  warm, had managed to borrow a horse and rode wilt,
                  the local police sergeant behind the "perambulating frigerator which contained}
                  his colleagues.
                  After a time, while Camp-,
                  bell was expatiating on ,
                  view of Kosciusko, Hughes
                  said to his companion, Is
                  always as cold as this
                  leant towards Hughes and said
                  in an undertone "Fall b»j
                  picce; old Campbell will lw
                  US." When they were out
                  of earshot, he said, I have
                  been here fifteen years, Mr
                  Hughes, and I declare
                  this is the warmest
                  I've ever known."
                  After this, not even an up
                  roarious evening in which, in
                  the presence of an enthusias
                  tic and uninhibited audience
                  of locals, he adjudicated at
                  a singing contest between the
                  State member f the district,
                  Gus Miller, and the repre
                  sentative of the "Age", could
                  reconcile him to Dalgety.

                  After this, a coach trip to
                  Cooma restored the party to
                  civilisation and their special
                  train, as well as to another
                  dance and 14 separate orig
                  inals of "The Man From
                  Snowy River". The next day
                  Sunday, was spent quietly at
                  Queanbeyan. Most of the
                  members, including Hughes,
                  stayed on board the train and
                  •slept in, but a few energetic
                  souls .were taken by the local
                  committee to see their site.

                  Among these was L. E. j

                  Groom, who wrote to his

                  wife.

                  "In the afternoon the
                  Mayor and others drove us
                  about to see the place" he
                  wrote to his wife. "We were
                  taken up on the top of
                  Mugga Mugga hill. The view
                  was one of the . best mountain
                  views we • have had. The
                  Murrumbidgee ranges are
                  magnificent."

                  Groom, who thus became

                  perhaps the first Federal ,
                  member to comment on the
                  Canberra site, was fated to
                  be. the. responsible Minister
                  at. two critical points of its
                  history, the end of the battle
                  of 'the sites and of the battle
                  of the plans, and then, as
                  Speaker, to preside over the
                  transfer of Parliament to
                  Canberra in 1927. He well
                  deserves some, day to have
                  a suburb 'named after him.

                  Queanbeyan was followed
                  by an inspection of the
                  drought stricken and dusty

                  shores of Lake George:

                  "You. ought to see It in the
                  spring time, gentlemen"
                  resumed ' the sanguine resi
                  dent . . . "This country is
                  then a vernal park."- "An
                  infernal park", rejoined the
                  irrepressible Mr. Hughes.

                  ' Soon after, when the im mense and clumsy chara

                  banc that had brought the
                  party from Bungendore had
                  broken down, Hughes and
                  Tudor passed it at a run.
                  "What are all those fellows
                  going so fast for?" inquired

                  Mr. • Groom. "Hurrying to
                  get. away- from the site,
                  shouted Mr. Hughes as his
                  striding' • figure disappeared
                  in a cloud of dust and gather
                  ing darkness.

                  ' The rest of the trip was
                  comparatively easy:, a morn
                  ing in- Goulburn m denfr
                  fog; a visit to a site nea
                  Yass where "the red dust was
                  so dense and .incessant tn

                  the members protested tnai
                  they did not want to eat tn
                  'site-'but to see it"; attending
                  the unveiling of a war mem
                  orial at Gundagai and

                  another dusty drive to be had.
                  But by this time Hughes

                  had enough and going
                  without. waiting for the
                  by which Tumut seem
                  have won the votes o

                  colleagues.

                  The question of the federal
                  capital was not to be settled

                  yet for several years is,
                  finaaly -the choice fell
                  site which only two or had
                  members of this pan

                  seen, during ^atquiet

                  day afternoon at ^0n

                  Whether the expeditions
                  tributed _ anything to
                  choice is doubtfu,

                  perhaps they serve£.ie;
                  the number of candid'
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Hughes
