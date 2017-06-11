import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import DeakinWhite from './images/deakinWhite.png'


class Deakin extends Component {

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
            <Subheader>Prime Minister Alfred Deakin</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={DeakinWhite} alt="Man polishing Sir Edmund Barton" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="When white meant right." />
               <CardText style={styles.cardText}>
                 THE WHITE Australia Policy is
                 presented these days as a
                 mean-spirited, if not down
                 right-evil, example of the nar
                 row-mindedness of an insular and ex
                 clusive past. There is no senior public
                 official prepared to openly qualify this
                 view, let alone urge a consideration of
                 the policy in its historical context.
                 When the policy is mentioned it is in
                 order to evoke guilt, to score political
                 points, or as an example of how en
                 lightened the policy of multiculturalism
                 is by contrast.
                 Yet enlightened opinion at the turn
                 of the century saw the White Australia
                 Policy as not only the key to nation
                 building, but as progressive. While the
                 policy is presented these days as the
                 product of reactionaries, it was in fact
                 driven by liberals and the organised la
                 bour movement.
                 The most outstanding Prime Minister
                 Australia has produced and infant Aus
                 tralia's chief architect, Alfred Deakin,
                 supported and sold the policy on the ba
                 sis of an appeal to its morality.
                 For those with open minds who wish
                 to understand how this was possible,
                 they could do no better than to start
                 with a new book by Monash University
                 academic Robert Birrell, A Nation of
                 our Own.
                 While Birrell is far from uncritical,
                 he not only puts the White Australia
                 policy in context, he shows how out
                 standing Deakin was and highlights the
                 central role of the organisation to
                 which he belonged, the Victorian-based
                 Australian Natives Association, in the
                 achievement of Federation.
                 The strategy of White Australia was
                 to build up local working conditions by
                 excluding labourers who would work
                 too cheaply. At that time this meant, in
                 practice, excluding coloured labour. The
                 belief was that business would use an
                 open door to cheap coloured labour to
                 drive wages and working conditions
                 down. But if settlement was restricted
                 to Europeans and capital was given
                 protection from imports, workers could
                 be paid a decent wage, labour could ob
                 tain a dignity instead of being merely a
                 slave-like toil, workers could feel a part
                 of the life of the nation and the com
                 mon racial characteristics would bind
                 all classes together in a sense of nation
                 al unity.
                 While crude racism was expressed by
                 some, it had no part in the thinking of
                 liberals like Deakin. He even stated
                 that the Chinese were superior in their
                 willingness to toil and make money,
                 but that making money was not the
                 be-all and end-all, Australians had the
                 right to develop at their own pace. In a
                 different context a contributor to The
                 Bulletin, E. J. Brady, put this another
                 way, "We do not accord the Almighty
                 Dollar perpetual reverence. We relieve
                 our work with considerable play."
                 The example of the white-black racial
                 divide of the United States, and the con
                 flict which flowed from it, was also one
                 to be avoided. Deakin stated that ex
                 cluding cheap coloured labour from
                 northern Australia involved economic
                 sacrifices, but "those sacrifices for the
                 future of Australia are little ... when
                 compared with the compensating free
                 dom from the trials, sufferings and
                 losses that nearly wrecked the Great
                 Republic of the West [the American
                 Civil War]."
                 In other words there would be no
                 slaves or semi-slaves in the north of
                 Australia sowing seeds of national divi
                 sion. Where industries existed which
                 had used such labour, such as the
                 Queensland cane fields, employers
                 would be compensated for having to
                 pay higher wages by tariff protection.
                 The embrace of protection was a rad
                 ical departure from classical liberalism,
                 as represented by the British Liberal
                 Party and NSW liberals who were for
                 free trade. Victorian Liberalism em
                 braced state intervention to, as Birrell
                 states, "create opportunity for all citi
                 zens via education, land reform and
                 protective tariffs".
                 OF TARIFF protection Deakin
                 said in 1905, "we should protect
                 these fruits of Australian indus
                 try from the deliberate attacks of great
                 [largely British] capitalists abroad ...
                 The endeavour is to protect an Austra
                 lian industry against a great monopoly,
                 a great monopoly which we cannot con
                 trol because it exists outside Australia."
                 And in March 1906: "[Australians]
                 should not all remain hewers of wood,
                 drawers of water, shearers of wool and
                 growers of wheat. We can find within
                 ourselves [through protection] that mul
                 tiplication of employments which is the
                 making of a modern nation."
                 He combined this with an enlight
                 ened attitude towards female employ
                 ment, advising his daughters to seek fi
                 nancial independence. Asked at a rally
                 in Sydney in 1906 what he intended to
                 do for female employment he said: "You
                 can have no control over the employ
                 ment of women or anything else when
                 you buy foreign goods. They may be
                 made by women, children or slaves ...
                 You dare not ask a question. There is a
                 farthing difference in the price and
                 your soul is sold for the farthing."
                 It was this basis which laid the foun
                 dation for later advances in working
                 conditions which put Australia at the
                 forefront of socially advanced nations.
                 Progressives from around the world
                 looked to Australia as an example.
                 White Australia was quite rightly end
                 ed under Harold Holt in the late 1960s,
                 but it is not the blot on our past it is
                 made out to be, particularly when com
                 pared with the history of other nations.
                 Historically it has to be seen in its ori
                 ginal progressive context.
                 Birrell's book is particularly valuable
                 because he takes the approach of put
                 ting forward the arguments of the fash
                 ionable historians and systematically
                 and convincingly debunking them.
                 For example, both Deakin and the
                 ANA have been dismissed by historians
                 such as Manning Clark as the tools of
                 capital, and Federation has been dis
                 counted by the Left as a result, but Bir
                 rell, himself a social democrat, makes it
                 clear in his impressively documented
                 study, that the liberals and the ANA
                 were quite distinct from capital and —
                 unlike both major political parties of to
                 day — did not rely upon it for funds. A
                 major aim of the ANA was to raise the
                 status of Australians and Australian
                 goods in the face of a prejudice against
                 them, not only among the British-orien
                 tated elites, but local professionals who
                 aped foreign ways. As part of this the
                 ANA held exhibitions of locally made
                 goods to affirm their worth, including
                 one in Melbourne's Exhibition Building
                 in 1907 of the work of Australian wom
                 en, which "featured artistic, craft and
                 industrial work and [which] was entire
                 ly organised and run by women."
                 The Bulletin and writers such as
                 Henry Lawson represented the more
                 radical side of this Australian affirma
                 tion. Its editorial policy on trade was
                 put strongly by leader writer James Ed
                 mond in his 1900 paper, A Policy for the
                 Commonwealth: "No country ever be
                 came a great industrial state under free
                 trade unless it had cheaper labour than
                 its neighbours, and cheap labour means
                 degradation and slavery."
                 Both Deakin and The Bulletin
                 preached "Australia for the Austral
                 ians". When the senior NSW politician
                 George Reid called this an "ignoble
                 cry", poet C. J. Dennis responded with
                 the ironic poem Selfish Australians,
                 which include the verses: "This country
                 was created as everybody knows/For
                 the foreign manufacturer of cheap and
                 shoddy clothes ... Get off your perch
                 and grovel 'ere the land becomes a
                 wreck/And ask the foreign gent to
                 kindly step upon your neck."
                 The Bulletin, unlike the Deakinite lib
                 erals, was republican and rejected the
                 British Empire. Of the two the Deakin
                 ite liberals took the more responsible
                 political course, because of the obvious
                 advantages to Australia of the Empire
                 connection.
                 However, although Deakin's liberals
                 affirmed the Empire, when it was a
                 choice between the Empire and Austra
                 lia, Birrell shows that they consistently
                 chose Australia. With the decline of the
                 Deakinite liberals the main planks of
                 their program — including support for
                 the Empire — were embraced and car
                 ried forward by the Australian Labor
                 Party.
                 Birrell also puts a strong case in de
                 fence of Billy Hughes in his pre-World
                 War I stage. Having accepted the bene-,
                 fits of Australian advances, Hughes and
                 other leading ALP figures such as An
                 drew Fisher and Chris Watson thought
                 the workers had responsibilities as citi
                 zens, including in the defence of the na
                 tion. Watson was a vice-president of the
                 Australian National Defence League.
                 Hughes consistently used the language
                 of Australian citizenship and said work
                 ers should make their claims for im
                 proved conditions as part of their
                 rights as citizens.
                 The ALP came to be seen as the par
                 ty of Australian nationalism, but with
                 its disastrous split over conscription in
                 World War I, Birrell believes this
                 broad-based agenda went into decline.
                 One of Birrell's achievements in his
                 book is that he rescues Deakin and
                 other early Australian figures for us
                 from the ravages of the politically cor
                 rect historians and social commenta
                 tors. Not only was Deakin a political gi
                 ant, he was a fascinating and learned
                 man, with an appreciation for other
                 cultures and an eccentric interest in
                 the world of spiritualism. Of course he
                 had his faults, and Birrell elsewhere de
                 scribed the final stages of Deakin's poli
                 tical career as "sad".
                 In order to maintain political rele
                 vance he joined with his erstwhile con
                 servative political opponents in a Fu
                 sion Government to oust the ALP in
                 1909. His former Victorian working
                 class supporters became hostile. In at
                 tempting to address a crowd in Colling
                 wood Town Hall in the 1910 election
                 campaign he could not be heard over
                 the chants of "Judas! Judas!".
                 THE FOUNDER or the Liberal Par
                 ty, Sir Robert Menzies, was a
                 great admirer of Deakin. The pol
                 icies which the Liberals and the ALP
                 once had in common can be directly
                 traced to Deakin.
                 Deakin rejected imperial honours, so
                 he remained plain Alfred Deakin until
                 his death. His grave is in the
                 south-west corner of St Kilda cemetery
                 where he is buried with his wife, but
                 visitors must look hard. There are no
                 directions, no mention that Deakin is
                 buried there. On the grave stone, in the
                 shape of an open book, Deakin is listed
                 on the left, his wife on the right, with
                 only their names and birth and death
                 dates. The simplicity of the inscriptions
                 was no doubt a personal choice, but a
                 map could at least be placed giving di
                 rections to the graves.
                 The policy of White Australia has
                 been appropriately buried, but Birrell
                 believes the policy of multiculturalism
                 which emerged in the late 1970s is caus
                 ing division, rather than uniting the
                 country. He suggests an approach
                 which gives Australian citizenship sub
                 stance and encourages integration.
                 He also believes distorted assaults on
                 our history have been demoralising to
                 Australians and hardly conducive of na
                 tional self-confidence. While such as
                 saults are part of today's orthodoxy,
                 and figures such as Deakin are forgot
                 ten and disregarded by most Austral
                 ians, it is at least encouraging that Dea
                 kin and his vision for Australia has
                 found an able defender in Birrell.
                 A Nation of Our Own by Robert Birrell
                 Paperback. S28.95.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Deakin
