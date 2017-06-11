import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'

import FisherHeart from './images/fisherHeart.png'

class Fisher extends Component {

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
            <Subheader>Prime Minister Andrew Fisher</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={FisherHeart} alt="Andrew Fisher Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="A warm-hearted Prime Minister." />
               <CardText style={styles.cardText}>
                 Fisher teas led by the heart. His
                 handling of political affairs teas
                 masterly. He had a reputation for
                 timid conservatism, but it was false.
                 Kim Beazley,MP,
                 examines Labor's
                 second leader
                 -Andrew Fisher
                 A warm-hearted
                 Prime Minister
                 ! ANDREW FISHER,
                 Labor's leader in
                 the Federal Parliament
                 for eight years, was
                 horn in Ayrshire,
                 Scotland, on August,
                 28, 1862. He died in
                 October, 1928.
                 Three times he was
                 Prime Minister ;- the first
                 on sufferance with tempor
                 ary support fr.om Deakinite
                 Liberals (1908-9). and on
                 the second and third occa
                 sions (1910-1913 , and 1914
                 1915) with a majority in
                 both Houses.
                 All his Cabinets were
                 elected by the Parilamen
                 tary Labor Party and at a
                 caucus meeting in Novem
                 ber. 1908. when his first
                 Cabinet was clccted, Mr
                 J. C. Watson, the ex-leader,
                 made a last ditch attempt
                 to persuade the party to
                 leave selection in the
                 leader's hands.
                 He failed. And there
                 after all Labor Cabinets
                 were elected.
                 Fisher was in marked
                 contrast to Watson, his
                 predecessor, and Mr W.
                 M. Hughes, his successor.
                 Where Watson was led by
                 the head. Fisher was led
                 by the heart.
                 Watson was strong on
                 abstract logic and weak nn
                 political nans. Fishers
                 handling of political af
                 fairs was masterly because
                 he was warm-hearted and
                 had common sense.
                 Hughes cut men's re
                 putations to pieces w l1^
                 his tongue and professed
                 always to be led by some
                 inescapable law of
                 of imperial strategy, or of
                 defence necessity.
                 Fisher attacked tvibody
                 i personally. Watson was
                 j expelled. Hughes walked
                 out of the Labor Party.
                 Fisher declared his con
                 tinuing support for Lahm*
                 when he returned in 1921
                 after being High Commis
                 sioner in London.
                 Had he not done so at
                 this time, when Labors
                 fortunes were at their
                 lowest ebb in Federal his
                 tory, he could without
                 doubt have had a continu
                 ing career in Common
                 wealth service from his old
                 associate, Hughes, then
                 Nationalist Prime Mini
                 ster.
                 Coalminer
                 All this was in the
                 future when Andrew
                 Fisher left school at
                 Crosshouse, Scotland, at
                 the age n( 11 and worekd
                 is a coalminer. He mig
                 rated to Australia at the
                 age of 22, took lo coal
                 mining in Queensland, and
                 set out lo educate himself
                 by systematic reading.
                 He became a union
                 leader. In 189? he was
                 elected lo the Queensland
                 Legislative Assembly by
                 Gvmpie. and served a few
                 days in the world's first
                 Labor Government in De
                 cember, 1899.
                 Fisher was elected to the
                 first Federal Parliament in
                 1901 and held the Queens
                 land seat of Wide Bay till
                 he retired IP be Hi g h
                 Commissioner late in
                 1915.
                 He was an opponent of
                 the Boer War, but not a
                 particularly vocal one.
                 Australia's most notable
                 opponent of that war was
                 not a Labor man, but a
                 radical Liberal - Henry
                 Bournes Higgins, later a
                 famous judge in arbitra
                 tion.
                 Fisher backed Higgin's
                 declaration that opponents
                 of the war were not
                 traitors with the iriteijcc
                 tjon. "Hear! Hcai! Com
                 mon sense!" In contrast to
                 Hughes, who looked toi
                 excuses to penalise opin
                 ion, Fisher was later to
                 refuse to take action
                 against opponents of the
                 First World War.
                 Fisher was really a man
                 of the 19th Century on
                 issues of civil liberty,
                 rather than of the -0th
                 century with its concept ot
                 the alleged necessity of ab
                 rogating liberties in tne
                 interests ni total war.
                 Amendment
                 Fisher, as a private mem
                 ber in Queensland, had at
                 tempted to enactworkers
                 compensation, but had
                 been defeated.
                 In April, 1904. when the
                 Deakin Ministry was in
                 power in the Common
                 wealth Parliament, Fisher
                 moved an amendment to
                 its Conciliation and Arbi
                 tration Bill. .
                 i His object was to extend
                 the benefits of the Bill to
                 State employees. Deakin
                 considered this to be an
                 issue of confidence and
                 , when Fisher's amendment
                 i was carried by 38 votes to
                 29. Deakin resigned.
                 Watson was commis
                 sioned to form a Ministry
                 I the first Commonwealth
                 Labor Ministry, and Fisher
                 was made Minister for
                 Trade and Customs.
                 The Watson Government,
                 lasted only from April to
                 August, 1904. As it had
                 risen to office on an arbi
                 tration issue, so it fell on
                 one - the precise issue
                 being award provision of
                 preference to unionists,
                 i Thereafter Labor again
                 gave consistent support to
                 Deakin. Watson held _ this
                 support to have been justi
                 fied by results. At the 1905
                 Conference of the federal
                 T abor Party m Melbourne
                 Fisher opposed Watson's
                 views.
                 Fisher indicated that he:
                 "Was against alliances,
                 generally speaking, but
                 Ihe only fault he had to
                 find with the Isaacs al
                 liance was that it en
                 deavoured to carry them
                 beyond Ihe then Parlia
                 ment."
                 Fisher supported the
                 Conference declaration
                 against the granting of im
                 munity to non-Labor can
                 didates where Watson re
                 garded this immunity as
                 essential to his tactics.
                 Fisher presided at the
                 Brisbane Conference of the
                 Labor Patty in 1908. His
                 presidential address, es
                 pecially his observations
                 on the role of women,
                 could be taken lo heart by
                 the Labor movement to
                 day.
                 "I am pleased to sec
                 women delegates present
                 . . . The presence of
                 women means good to
                 our movement. We have
                 reached that stage in our
                 political development
                 when women are of
                 great help to us. The
                 presence of women here,
                 too, shows that women
                 are today taking an ac
                 tive part in economic
                 questions, and as a
                 Labor parly we can be
                 . congratulated on giving
                 them every facility and
                 encouragement to do so.
                 On some social questions
                 men are mere novices
                 compared with women,
                 and women's aid and co
                 operation are invaluable
                 and all powerful to the
                 Labor Party in helping
                 towards Ihe solution of
                 social and industrial re
                 form . . . We in Aus
                 tralia are behind New
                 Zealand in caring for
                 women at the times
                 when in need of special
                 assistance."
                 When Fisher was Prime
                 Minister with a majority in
                 both Houses from 1910-13,
                 he brought in maternity al
                 lowances, despite the ab
                 sence of a constitutional
                 provision for them.
                 Surprisingly, he did not
                 bring in widows' pensions,
                 which were 10 wail until
                 1943.
                 A minority
                 In his Presidential ad
                 dress. Fisher asked for
                 women candidates for Par
                 liament (none were to be
                 ilected till 1943). for child
                 welfare legislation, and
                 commended the humanity
                 of the arbitration judgment
                 of Mr H. B. Higgins.
                 The Labour Party had
                 gone to a general election
                 on December 12, 1906,
                 under Watson's leadership.
                 Deakin won 17 seats for
                 his Protectionists; Reid 32
                 Seats for his "Anti-Social
                 ists." and Labour had 26
                 seats.
                 In the Senate, Labor had
                 15 seats, the Deakinites
                 only four, and there were
                 17 others.
                 Deakin, with only 17
                 seats out of 75 in the Rep
                 resentatives and four, out
                 of 36 in the Senate, be
                 came Prime Minister with
                 Labor support.
                 Watson had campaigned
                 for a Comonwealth Bank
                 in December, 1906, and in
                 July, 1908, the Brisbane
                 conference, on the motion
                 of Mr F. G. Tudor, had
                 unanimously put the Bank
                 onto the Labor Party's
                 fighting platform.
                 King O'Malley was later
                 (1923) to publish a pam
                 phlet falsifying the record
                 of the 1908 conference,
                 and suppressing Tudor's
                 name in this action lo make
                 the Bank a fighting plat
                 form matter.
                 Actually, however. Wat
                 son had made it a fighting
                 plank in the election cam
                 paign in 1906. Watson had
                 also declared that Labor in
                 power would enact Old Age
                 Pensions, graduated land
                 tax. anti-trust legation,
                 and a referendum on the
                 tariff question.
                 His real passion was de
                 fence. He declared as de
                 finite Labor policy, an in
                 dependent Australian Navy
                 (at this lime in return for
                 a subsidv paid by Austra
                 lia, a British squadron was
                 in Australian waters), and
                 as his personal objective to
                 make compulsory military
                 training a Labor plank.
                 Most of these things were
                 to be enacted by Fisher,
                 or by Deakin with Fisher's
                 support. For Watson re
                 signed leadership of the
                 Labor Party,
                 Fisher, who had been
                 Deputy Leader of Labor
                 in the'House of Represen
                 tatives. became leader in
                 October. 1907.
                 Overturned
                 The informal alliance
                 with Deakin was broken
                 in November. 1908. when
                 Labor withdrew support.
                 Deakin by then had 16
                 seats to Labor's 27. No
                 confidence in his Govern
                 ment was carried by 49 to
                 13- . . . . .
                 Australia s sentiment at
                 this time was probably
                 Radical-Liberal, expressed
                 in the vote for Deakinites
                 and Labor.
                 Deakin apparently pre
                 ferred a Labor Govern
                 ment at this moment to an
                 anti-Socialist one, and ad
                 vised the Governor-General
                 to send for Fisher, who on
                 the November 13, 1908,
                 became Prime Minister and
                 T easurer in the second
                 Commonwealth Labor
                 Government.
                 But Deakin's preference
                 was only apparent.
                 He was negotiating a
                 fusion with the Anti-Soc
                 ialists and, when this was
                 achieved, overturned the
                 Fisher Government on
                 May 27, 1909.
                 Fisher's first Prime Min
                 istership is really humiliat
                 ing. only one distinctively
                 Labor Act having been
                 passed. But it simplified
                 Australian politics hy driv
                 ing Deakin out of the
                 centre and over to the
                 right.
                 In silcncc Radical Lib
                 eral sentiment transferred
                 to the Labor Party, produc
                 ing the utterly unexpected
                 election result of April 13,
                 1910 .
                 The Labor Parly won all
                 18 Senate seats up for elec
                 tion. gained 14 in addition
                 to its 27 in the House of
                 Representatives, and thus
                 had 22 seats out of 36 in
                 (he Senate, and 41 out of
                 75 in the House of Repre
                 Andrew Fisher  Help
                 Andrew Fisher
                 sentalives, with the addi
                 tional usual support of
                 two independents.
                 The new cabinet, apart
                 from Fisher as Prime Min
                 ister and Treasurer, in
                 cluded two future leaders,
                 Hughes as Attorney
                 General, and Tudor as
                 Minister for Trade and
                 Customs.
                 It also included O'Mal
                 ley as Minister for Home
                 Affairs, who in future was
                 to claim virtually all the
                 credit for all the construc
                 tive legislation of the
                 Government, and to pet
                 his impudent fictions
                 firmly established in the
                 mythology of the Labor
                 Movement, if not in the
                 Parliamentary l.abor Party,
                 where access to the
                 minutes of caucus destroys
                 his bogus claims.
                 The Fisher Government
                 of 1910-13 laid the foun
                 dations of the modern
                 Commonwealth of Aus
                 tralia.
                 It put 113 Acts on the
                 statute hook, the most sig
                 nificant of which were the
                 establishment of the Com
                 monwealth Bank; the
                 establishment of a paper
                 currency; the Seat of
                 Government Act setting
                 about the development of
                 Canberra: the establish
                 ment of the Northern Ter
                 ritory as a Commonwealth
                 Territory; the extension of
                 arbitration to the Public
                 Scrvice; the Kalgoorlie to
                 Port August Railway Act
                 of 1911, establishing the
                 legal basis of the Trans
                 continental railway: Com
                 monwealth Workers' Com
                 pensation (like the exten
                 sion of arbitration to pub
                 lic servants - an objec
                 tive dear to Fisher's heart)
                 and the Australian Indus
                 tries Preservation Act.
                 Five versions
                 When in 1923, C. C.
                 Faulkner wrote a history
                 of the Commonwealth
                 Bank which mentions
                 O'Malley's advocacy of it
                 in a footnote. O'Malley
                 wrote a pamphlet on the
                 theme: "If my work for the
                 creation of the Common
                 wealth Bank can be ex
                 plained in a mere footnote,
                 the work of the rest of
                 the (Fisher) Government
                 can be explained in one
                 word-Against."
                 O'Malley put out five
                 versions of how he forced
                 Fisher to found the Com
                 monwealth Bank. They
                 agreed in only one parti
                 cular - he did , it on
                 October 5, 1911. Unfortu
                 nately for O'Malley, the
                 Commonwealth Bank's es
                 tablishment is declared as
                 an object of the Govern
                 ment for the session in the
                 Governor-General's spcech
                 of September 5, 1911.
                 It is \the essence of
                 O'Malley's claim that the
                 Government was forced to
                 do what it did not intend
                 to do on October 5, 1911,
                 in mid-session.
                 It is the essential fact
                 that it declared its inten
                 tion to establish the Bank
                 at the beginning of the
                 session.
                 O'Malley's stories begin
                 by asserting that Fisher
                 was graccfully bowing to
                 a general concensus after a
                 surprise, to the organisa
                 tion of the "Torpedo Brig
                 ade" in caucus to force ft
                 through by one vote, to a
                 forged proxy, to the influ
                 ence of Archbishop Carr.
                 Catholic Archbishop of
                 Melbourne, to a final use
                 of a member's indebtedness
                 t.i force his vote.
                 Variously, Mr P. O'Mal
                 ley himself. Chanter and
                 Maloney arc credited by
                 him with the motion. The
                 proposal for the establish
                 ment of the Common
                 wealth Rank was not in
                 troduced by these, but by
                 Fisher.
                 On August 30, 1911,
                 caucus met to consider
                 policy for the second ses
                 sion of the Fourth Parlia
                 ment., due to begin on Sep
                 tember 5. 1911.
                 The minutes record "Mr
                 Fisher pave an outline of
                 the Government pro
                 gramme for the ensuing
                 session, which included the
                 following proposals . . .
                 There follow IS items,
                 which appear later in the
                 Governor-General's specch
                 of September 5, the fust
                 of which is "the Common
                 wealth Bank."
                 Since in the O'Malley
                 legend. State Banks spring
                 up where'er he treads let
                 it he noted, he never
                 moved a proposal for a
                 Bank in caucus.
                 He did want a censure
                 in 190S on Deakin for not
                 establishing one.
                 _ The State Bank of
                 South Australia, which is
                 alleged to have been an
                 nhjective of his, was estab
                 lished before he was elec
                 ted to the Parliament of
                 that State for Encounter
                 Bay.
                 A National Rank was
                 on the platform of the
                 Labour Party in Tasmania
                 before he joined it.
                 Bank fight
                 A Commonwealth Bank
                 went onto the Federal plat
                 form in 1902, three years
                 before O'Malley was ever
                 a Federal Conference dele
                 gate. It went onto the
                 fighting platform in 1908
                 on the motion of Tudor.
                 It was unanimously
                 adopted wherever pro
                 posed. And was included
                 in the legislative pro
                 gramme of 1911 hv caucus
                 unanimously nn the mo
                 tion of Fisher.
                 What O'Malley did pro
                 pose to the 1908 confer
                 ence was a complete
                 scheme of State - Federal
                 handling of debts, and fin
                 ancial arrangements which
                 would include a "National
                 Postal Bank" with h e a d
                 quarlers at each State
                 GPO, jointly controlled by
                 the Commonwealth and
                 Stales.
                 The scheme was en
                 dorsed in a general way,
                 but never put onto the
                 platform. It was an im
                 possibility since non-Labor
                 States would not have ac
                 cepted joint control.
                 The concept of the Post
                 Office as the Bank was a
                 pmr one.
                 The claim has begun to
                 be made that O'Malley was
                 responsible for the selec
                 tion of Denison Miller, the
                 first Bank Governor. This
                 is ludicrous.
                 Fisher as Treasurer had
                 the duty to make that ap
                 pointment. not O'Malley at
                 Home Affairs.
                 O'Malley finally gave
                 out that the Bill was
                 drafted by George Allen
                 of the Treasury, who ap
                 pears to O'Malley to have
                 been responsible for the
                 Note issue not being orig
                 inally vested in the Bank.
                 But the memoirs of Sir
                 Robert Garran, first
                 Solicitor - General of thf
                 Commonwealth, show that
                 this is not so.
                 Hughes and George
                 Pearce, as almost the last
                 survivors of that Cabinet,
                 denied O'Malley's story,
                 Fisher, himself, according
                 to a letter to the writer
                 from Fisher's daughter, al
                 ways told his family that
                 the Bank was the convic
                 tion of the whole Labor
                 Patty, and every confer
                 ence or caucus meeting
                 which dealt with it showed
                 by its unanimity that this
                 was so.
                 Fisher has been given a
                 reputation for timid con
                 servatism by O'Malley
                 which is quite false.
                 Opposition
                 On May 31, 1913, in Ihe
                 Federal elections, Labor lost
                 four seals.
                 Fisher therefore had 37
                 scats at his command, and
                 Liberal Leader Cook had
                 38. Fisher resigned. In the
                 Senate Labor had 29 scats
                 to the Liberals seven.
                 In caucus Hughes and
                 \V. G. Higgs opposed
                 Fisher for the leadership.
                 The minutes of the Federal
                 Parliamentary Labor Party
                 show ihe voting as follows:
                 Fisher 42, Higgs 18, Hughes
                 I.
                 Hughes was obviously
                 rcduccd to his own vote,
                 and it was probably a sting
                 ing rebuke delivered
                 hy caucus to Hughes for
                 his extreme arrogance as
                 acting Leader when Fisher
                 was away. This will be re
                 ferred to in the study of
                 Hughes' leadership.
                 The fifth Parliament of
                 1913-14, with such a dif
                 ference in the party com
                 position of Ihe Iwo Houses.
                 could not last. It went into
                 double dissolution and
                 Fisher was returned lo
                 power in September with
                 42 seats out of 75 in the
                 Representatives, and 31 out
                 of 3ft in the Senate.
                 In Ihe election campaign
                 after the oulhreak of the
                 World War I the Labor
                 election manifesto, signed
                 by Fisher, contained the
                 famous expression that
                 Australia "would be in the
                 war lo the last man and the
                 last shilling".
                 This was an expression
                 from the Boer War, which
                 had actually been debated
                 in Ihe House of Repre.wn
                 latives during that war.
                 According to Anstey. the
                 manifesto was composed by
                 Hughes, not Fisher.
                 Fisher certainly had no
                 intention of giving to the
                 expression Ihe meaning of
                 conscription. On this sub
                 ject Sir Ernest Scott, in
                 his section of the Official
                 History of Australia in the
                 War. records Fisher's con
                 versation. and it is a per
                 fect illustration of his tem
                 perament and outlook.
                 Fisher said:
                 "T am nol blind lo the
                 fact lhat conscription is
                 logical, but men are nol
                 logical. It is economical
                 and saves lots of waste
                 - of putting the wrong
                 men in the wrong places
                 - I know and feel all
                 that as well as you do.
                 But men are not logical
                 and you cannot rule
                 Ihem by logic."
                 Fisher felt lhat conscrip
                 tion would wreck the war
                 effort and divide Australia
                 into bitterly hostile camps.
                 The study of the con
                 scription referenda be
                 longs to the era of Hughes,
                 but national unity be
                 longed to the era of
                 Fisher.
                 The figures of voluntary
                 enlistment tinder Fisher
                 were never less than 8,000
                 in a month, they were
                 rarely less than 10.(100.
                 . nd they rose as high as
                 36.575 in July, 1915.
                 After the conscription
                 referenda they fell disas
                 trously and less than 3,000
                 a month became normal.
                 Hughes in each year 1917
                 and 19 If? either did nol
                 equal or barely surpassed
                 the recruitment under
                 Fisher for that one month
                 of July. 1915.
                 Contrast !
                 The Governor-General j
                 called a conference in 1918
                 on Ihe subject of the war
                 effort. The need to restore
                 the unity of the period
                 under Fisher was openly
                 referred to.
                 Fisher, in contrast to
                 Hughes" later attitude, re
                 fused to pursue statements
                 opposed to the war or to
                 imprison individuals who
                 made them.
                 He had been opposed to
                 the. Boer War himself,
                 stressed the essential nat
                 ional unity of the country
                 about the World War, and
                 built up a considerable
                 army without conscription..
                 At the Labor Confer
                 ence of 1915 in Adelaide,
                 Fisher made a speech in
                 total contradiction to ihat
                 of Hughes.
                 Fisher envisaged tne
                 League of Nations and in
                 ternational order. Hughes
                 derided it as he was later
                 to oppose so many ot
                 Woodrow Wilson's pro
                 P°Where Hughes started
                 an anti-foreign campaign,
                 actually to deprive people
                 of German dcscent ot
                 votes in the conscription
                 referendum. Fisher had
                 shown a resistance to anti
                 foreign sentiment at the
                 Hobart Conference of tne
                 Labor Party in 1912.
                 A resolution against
                 Austrian (i.e., Yugoslav)
                 and Italian migration was
                 proposed to the confer
                 ence. The rccord shows
                 FishcT's view:
                 '"Mr Fisher was sorry
                 that he could not sup
                 port this motion. The
                 party was a Labor
                 Party, but it was also a
                 Socialist party. Some
                 Southern Europeans dis
                 covered parts of Aus
                 tralia. and were doing
                 more by their inventions
                 in the present day than
                 some of the northern
                 "He therefore could
                 not support the principle
                 contained in Ihe resolu
                 tion i and be should hesi
                 tate to stigmatise any
                 class of people on ac
                 count of their alleged
                 lower moral codc. _
                 Dealing with the issue
                 or their acceptance ol |
                 lower rates of pay. he saio:
                 "If these people were be
                 ing exploited by unscru
                 pulous capitalists, it was
                 Ihe duty of the Govern
                 ment to protect them.
                 To London
                 Fisher resigned the Prime
                 Ministership, which passed
                 to Hughes, and becamc
                 High Commissioner in
                 London lale in 19I5.(_
                 ll was an event oisas
                 trons for the Labor Party
                 and for Australia, and for
                 national unity.
                 Sir George Pearce in nis
                 memoirs. Carpenter to
                 Cabinet, projects on to
                 Fisher his own disagree
                 ments with the Labor j
                 Party. . . ,
                 There is not time lo deal
                 with Pearce's statements,
                 hut Fisher resigned the
                 leadership during a long ;
                 recess, and Pcatcc s ac
                 count of prolonged dis
                 pute over an arbitration
                 bill as the cause is impos
                 sible,
                 The Bill rclcrrcd to went
                 through in record time for
                 such a measure (one after
                 noon) and Fisher left the
                 Parliament weeks later.
                 In 1921 Fisher returned
                 lo Australia and was pre
                 pared ot take the West
                 Sydney seat on the death
                 of T. J. Ryan.
                 The New South Wales
                 Labor Partv. then very
                 much an Irish Party (post
                 conscription) had made
                 special provisions for T. J.
                 Ryan, hut did not make
                 them for Fisher, and the
                 opportunity passed.
                 The press of. the_ day ob
                 viously desired Fisher to
                 make statements against
                 the Labor Parly, but he
                 did not. The Argus for
                 August 26. 1921. reports
                 his chairing a- Labor elec
                 tion meeting at St Kilda.
                 He expressed the hope that
                 "there should be an alli
                 ance between the Labor
                 Party - the Socialist Party,
                 as he preferred lo call it
                 -and the Farmer's Party.
                 Andrew Fisher  Help
                 The Farmer's Parly be
                 came the Country Party,
                 however, and it went into
                 conlition permanently else
                 where.
                 risner made clear that
                 his loyalty was to Labor,
                 whether it was a lost cause
                 or not. But it was Fisher's
                 faith in the possibilities of
                 Labor, and his deep experi
                 ence of the need for a
                 Labor voice in national af
                 fairs, based on his coal
                 mining experience and his
                 Parliamentary struggles,
                 which gave him the quali
                 ties which prevented crises
                 vliilc he led.
                 He unified the party and
                 the nation. While he led,
                 the l abor Party was clearly
                 destined to be the normal
                 Government of the nation.
                 Hughes, who succeeded
                 him, wrecked it for a
                 generation.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Fisher
