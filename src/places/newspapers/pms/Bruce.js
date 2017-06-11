import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import BruceCareer from './images/bruceCareer.png'

class Bruce extends Component {

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
            <Subheader>Prime Minister Stanley Bruce</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={BruceCareer} alt="Stanley Bruce Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title=" BRUCE AND HIS
                 VARIED CAREER" />

               <CardText style={styles.cardText}>


                  Lord Bruce was
                  born in Melbourne on
                  April 15. 1883.
                  Educated at Melbourne
                  Church of England Gratrv
                  .nar School and graduating
                  BA, at Trinity Hall. Cam
                  iridge, he was called to the
                  lar in 1907, .
                  With the Worcester Rcgi
                  nent at Gallipoli in 1915
                  he was severely wounded at
                  Suvla Bay. As a captain of
                  he Royal Fusiliers in
                  France he was again
                  wounded in '916. He wa9
                  awarded the Military Cross
                  and Croix de Guerre.
                  Returning to Australia
                  after World War I, Lord
                  Bruce was elected to the
                  Federal seat of Flinders in
                  a 1918 by-election. He
                  served as Treasurer from
                  December, 1921, to Febru
                  ary, 1923, and represented
                  Australia at the League of
                  Nations. . .
                  He became Prime Minis
                  ter on February 9, 1923,
                  ind held also the portfolio
                  of External Affairs until
                  October, 1929. During that
                  .ime he was also Minister
                  'or Health.
                  Lost his
                  seat
                  In 1929 the Bruce-Page
                  .overnment was defeated
                  i a general election and
                  ruce lost his own seat. He
                  as out of Parliament
                  iroughout the term of the
                  cullin Labor Government,
                  ul regained Flinders in the
                  ;eneral election of 1931.
                  From January, 1932, he
                  was an honorary Minister
                  :,n the Lyons Government,
                  .ind wa9 concerned with
                  both Treasury and External
                  Affairs
                  In September, 1932. Bruce
                  went to London, mainly to
                  take charge of loan conver
                  sions and while still con
                  tinuing as an honorary
                  Minister actcd also as Aus
                  ralian High Commissioner
                  in London. There was talk
                  .hat he might become
                  lermanent Minister Resi
                  dent in London, but there
                  (were also fears that this
                  would be constitutionally
                  :mpossible and certainly |
                  . politically inconvenient.
                  I On October 6, 1933,
                  Bruce resigned from Parlia
                  t ment and was appointed
                  . High Commissioner, mak
                  i ing London his permanent
                  . home.
                  From 1933 to 1938 he
                  ' was Australian represcnta
                  r tive at the League of
                  ; Nations Assembly and in
                  | 1936 was president of the
                  . League of Nations Council,
                  j He represented Australia
                  at many international con
                  ferences, including Ottawa
                  (1932), London (1933), Mon
                  treux (19361. and London
                  (1937).
                  f Throughout World War
                  : 11 he not only continued as
                  i High Commissioner, but
                  ; represented also the Com
                  ; monwealth Government in
                  , the United Kingdom War
                  : Cabinet and the Pacific
                  I War Council. In 1945 he
                  retired as High Commis
                  I sioner and devoted himself
                  ? to business and other in
                  , terests.
                  At the time of his death
                  , he had shed some of his
                  ' directorships, but remained
                  i a director of the London
                  . board of advice of the Na
                  . tional Bank of Australasia
                  i and of the Royal Exchange
                  : Assurance.
                  Earlier he had been on
                  the London board of the
                  : National Mutual Life Asso
                  : ciation of Australasia Ltd,
                  and a director of the Penin
                  sular and Oriental Steam
                  Navigation Co Ltd.
                  , The breadth of his inter
                  ests is shown by his chair
                  manship of the Finance
                  Corporation for Industry.
                  1947-57, and of the World
                  Food Council of the UN
                  Lord Bruce as Prime Minister.  Help
                  Lord Bruce as Prime
                  Minister.
                  Food and Agriculture Or
                  ganisation 1947-51.
                  In 1951 he was appointed
                  first Chancellor of the Aus
                  tralian National University,
                  where Bruce Hall is named
                  after him.
                  He was appointed a
                  Privy Councillor in 1923,
                  was made a Companion of
                  Honour in 1927 and
                  became a Fellow of the
                  Royal Society in 1944.
                  In 1947 the Right
                  Honourable Stanley Mel
                  bourne Bruce was created
                  First Viscount Bruce of
                  Melbourne, of Westminster
                  Gardens in the City of
                  Westminster, and became
                  the first Australian-born
                  Peer in the House of Lords.
                  Bruce was the son of a
                  successful Scots merchant,
                  J. M. Bruce of Flinders
                  Lane, Melbourne. His edu
                  cation at Cambridge, his
                  service at the English Bar
                  and in the British Army
                  during World War I gave
                  him a background in some
                  : senses more English than
                  ! Australian. All his political
                  j life he was to suffer from
                  i this.
                  I His black jacket, striped
                  ; trousers and the spats that
                  ! he affected were a gift to
                  his political enemies, who
                  ' portrayed him as a man
                  out of touch with the com
                  munity. But they could not
                  : misrepresent his integrity
                  : and his splendid war record.
                  A common judgment of
                  him today is that he was
                  no more English-orientated
                  than many people of his
                  time, but was an individual
                  personality of an unusual
                  kind.
                  The defeat of his gqvern-1
                  ment in 1929, the worst of
                  its kind in Australian poli
                  tical history, followed his
                  plans to change radically
                  the arbitration system. W.
                  M. Hughes and five other
                  members of the Government
                  voted against the Govern
                  ment which thereupon called
                  an election.
                  Labor. was swept into
                  office; all six rebels got back
                  with large majorities; Bruce
                  himself losing his own seat
                  in Flinders to a trade
                  unionist, Edward James
                  Holloway, svjio fought him
                  specifically on the arbitra
                  tion issue. The vote was
                  31,370 to 31,065.
                  Though Bruce was to
                  achieve great prominence
                  later in other spheres it was
                  the effective end of his
                  political career.
                  In 1913 he married Ethel,
                  daughter of the late A. G;
                  Anderson. There were no
                  xhildren.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Bruce
