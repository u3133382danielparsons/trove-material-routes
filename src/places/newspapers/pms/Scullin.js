import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import ScullinUnluckyOne from './images/scullinUnluckyOne.png'
import ScullinUnluckyTwo from './images/scullinUnluckyTwo.png'

class Scullin extends Component {

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
            <img src={ScullinUnluckyOne} alt="James Scullin Part 1 Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="James Henry Scullin Part I" />
               <CardHeader style={styles.cardHeader} title="By K. E. BEAZLEY, MP" />
               <CardText style={styles.cardText}>
                James Henry Scullin
                (1876-1953) was Lab
                or's unluckiest leader.
                He led the party to its
                greatest electoral . vic
                tory for a House of
                Representatives elec
                tion. in 1929, and to its
                greatest electoral defeat
                in 1931.
                No one ever suffered so
                abrupt a reversal of for
                tune before or since. He
                had a great majority in
                the House of Representa
                tives but had to see it
                frustrated by the fact that
                he had only seven seals
                out oj 36 in the Senate,
                and to watch it disintegrate
                by defections to the United
                Australia Party and the
                Lang Party.
                Where his predecessor,
                Charlton, had faced the
                incipient hostility of Lang,
                Scullin was undermined by
                his active hostility, and
                finally ejected from office
                on the motion of the Lang
                group.
                Lang, in fact, has bscn
                hostile to every Labor
                leader from Charlton to
                Calwell, as a study of his
                paper Century and its pre
                decessors will show. Lang
                could brook no Labor
                leadership but his own.
                He had three ambitions
                -to be Mayor of Banks
                town, Premier of NSW,
                and Prime Minister of
                Australia. The first two he
                achieved. The third under
                lay the final disintegration
                of the Scullin Government.
                Paradox
                Scullin's career is a para
                dox. An able, disciplined
                and thoughtful man, a de
                vout Roman Catholic and
                an outstanding debater, he
                was disliked by King
                George V and the political
                and financial establishment
                in the United Kingdom at
                a time when the Australian
                electorate cared greatly for
                British approval and asso
                ciated Britain with great
                wisdom and virtue.
                Denounced in the NSW
                Labor movement, especially
                as a conservative, he had a
                career of sponsorship of
                revolutionary and militant
                proposals in the Federal
                Conferences of the ALP.
                If Scullin had been a
                New South Welshman he
                would have had his own
                following in NSW, and
                probably would have de
                feated the Lang machine.
                As a Victorian he was an
                outsider in NSW and had
                no influence.
                Scullin led Labor at a
                lime when members of the
                Labor Party treated one
                another far more ruthlessly
                than they treated non
                Labor opponents. J. T.
                Lang, for instance, had to
                knuckle under UAP Gov
                ernments in Canberra,
                whereas, with Labor in
                office, he could hope to use
                his State machine to des
                troy a Federal Labor Gov
                ernment or Federal Labor
                Opposition leadership.
                Scullin was born at
                Trawalla near Ballnrat, on
                September 18, 1876. One
                has the feeling that the
                Scullins, Watsons and
                Fishers of the Labor move
                ment .of that era would to
                day get Commonwealth
                scholarships and go to uni
                versities and never come
                Into the Labor movement
                at all.
                The Labor movement,
                debating societies, the ANA,
                and eisteddfodau were
                the only higher education
                of many a bright young
                man in the 1890s and the
                first dccade of this ccntury.
                Scullin was educated at Ml
                Rowan Primary School. He
                went voluntarily to night
                school and joined debating
                societies. He won debates at
                eisteddfodau and be
                came an adjudicator at
                such events.
                Scullin was profoundly
                impressed by the great
                socialist Tom Mann, and as
                a consequence joined the
                Labor Party in 1903.
                He was endorsed to op
                pose Alfred Deakin, the
                Prime Minister, at the
                general elections of 1906,
                but was defeated by 12,331
                votes to 6,305.
                The following year
                he married a Miss
                Macnamara, daughter- of
                an AWU official, and he
                himself became a full-time
                AWU organiser.
                / Elected -
                In 1910 he was elected
                member for Corangamite,
                defeating J. G. Wilson by
                11,300 votes to 9,350. He
                was thus a backbencher
                supporting the creative
                work of the Fisher Govern
                ment from 1910-1913. In
                1913. he was defeated by J.
                G. Manifold by 16,572
                votes to 15,173.
                He became editor of the
                Ballarat Echo at a time
                when the provincial Press
                was more signifk ant than it
                is today.
                In 1916 he made it an
                anti-conscriptionist organ,
                but before that he suppor
                ted editorially the Easter
                Rebellion in Ireland -
                attitudes which were to be
                held against him later in
                Court circles in the United
                Kingdom, where adamant
                opposition to Irish inde
                pendence had been a
                settled posture for a cen
                tury or more.
                Scullin represented Vic
                toria at the special Com
                monwealth -Conference of
                the ALP in Decomber,
                19l'6, which dealt with
                conscription; at. the confer
                ence at Perth in June, 1918.
                which called for a nego
                tiated peace; and at the
                conference in Brisbane in
                October, 1921, which
                adopted the "socialist ob
                jective."
                At the 1918 conference
                he supported a most revo
                lutionary foreign policy. At
                the same time he success
                fully intervened to preserve
                compulsory military train
                ing for home defence. This
                is surprising in view of the
                strong anti-conscriptionist
                tone of the party at the
                time.
                Scullin himself, as Prime
                i Minister 12 years later, was
                to abolish compulsory mili
                I tary trainine for home de
                | fence as a depression
                I economy, _ - r
                At the 1921 conference
                he supported the socialist
                objective, and proposed the
                establishment of a
                "Supreme Economic Coun
                cil" to govern the economy.
                E. G. Theodore objected
                that it would usurp the
                powers of Parliament.
                The following year,
                when Scullin had become
                member for Yarra, he
                fought against Caucus reso
                lutions to get the "social
                ist objective" modified.
                There is no evidence that
                Scullin was ever very clear
                on the meaning of the
                socialist objective, and still
                less on the "Supreme
                Economic Council."
                He was undoubtedly
                radicalised by the fierce
                fighting for Irish indepen
                dence from 1920-1922.
                In 1948, when Brian
                Doyle, editor of the Catho
                lic Weekly in Sydney, was
                to argue that Catholics
                could not support the
                Labor Party in conscience
                because of the socialist
                objective, it was ironical to
                reflect how much its pre
                sence on the platform was
                due to the most devout
                Catholic of Labor's leaders.
                Leader
                When Tudor died in
                January, 1922, Scullin was
                elected member for Yarra.
                From 1922 to 1927 Scul
                lin worked hard to master
                the intricacics of Common
                wealth finance, and de
                veloped an expertise which
                no doubt helped him to
                succeed Anstcy as deputy
                leader. On Charlton's resig
                nation he was elected
                leader, the minutes of
                April 26. 1928, not record
                ing the figures, but affirm
                ing lhat ihc majority was
                "substantial."
                Scullin's great moments
                in Parliament were un
                doubtedly in the time be
                tween his election'as leader
                and his attainment of the
                Prime Ministership. As a
                Leader of the Opposition
                he could speak.of industrial
                issues in human terms.
                Bruce suddenly bceame
                imprisoned- in the logic of
                his Attorney-General, J. G.
                Latham, later a knight and
                Chief Justice of the High
                Court. After the defeat of
                his 1926 referendum for
                Commonwealth industrial
                powers, Bruce decided that
                the Federal Government
                should virtually vacate the
                field of arbitration.
                -To react petulantly to an
                adveirse refereritfum vote is
                a certain way to alienate
                the electorate. After all,
                millions vote for your pro
                posal, accepting your argu
                ment. If you go into reverse
                because of defeat you
                alienate those who sup
                ported you without gaining
                the support of others.
                Bruce, having argued foi
                exclusive industrial power
                and failed, decided, on
                Latham's logic, that the
                States should have it. His
                bill to vacate most of the
                field of arbitration led to
                defections among his own
                supporters, notably W. M
                Hughes.
                There were thousands of
                people under Federal
                awards thrown into ex
                treme -uncertainty about
                their future.
                This was the living
                reality. Latham's desiccated
                rationalism had no place
                for living reality. Every
                thing was disembodied
                logic. This might be a vir
                tue in a High Court judge.
                It was disaster in a poli
                tician.
                The Bruce-Page Govern
                ment was swept from
                office. Scullin gained 46
                seats out of 75. The Senate
                was not involved in the
                election. There seven
                Labor men confronted 29
                Nationalists and Country
                Party members.
                Coal strike
                Thus Scullin fell heir to
                the depression, to the duty
                of paying back Page's bor
                rowings, to a Parliament
                with a hostile Senate, and
                to a violent industrial dis
                pute in New South Wales.
                His first acts were in
                relation to this coal strike
                in New South Wales;
                The Lang ' Party had
                fought unsuccessfully for
                it The result was that
                Scullin , had nq real power
                in New South Wales.
                The strikes on the coal
                fields were at the stage of
                police batons and were to
                move to the point where
                police shot and killed one
                miner and wounded seven
                others.
                In between these points
                Scullin summoned Bavin,
                the Nationalist Premier of
                New South Wales, the
                coal-owncrs and the coal
                miners' leaders, to a con
                ference. The- miners re
                fused any wage reduction.
                The owners would propose
                nothing else.
                The Bavin Government
                called for volunteers for
                the mines, protected by
                police. Lang, a decisive
                opponent of Federal indus
                trial power and the archi
                tect of the Bavin Govern
                ment's constitutional power
                and the Scullin Govern
                ment's lact of constitu
                tional power, blamed both.
                The striking miners
                pulled up railway lines,
                drove away volunteers, and
                the police opened fire. The
                miners organised them
                selves into an army under
                ex-military miners. After
                a bitter winter the miners
                capitulated and returned to
                work on the owners' terms.
                The NSW machine saw
                to it that they blamed
                Scullin, who was there
                after intimidated from
                entering into New South
                Wales.
                Every major issue Scul
                lin touched was blocked
                by the Senate, turned into
                a question for panic, or
                both.
                His proposed amend
                ments to the Common
                wealth Bank Act would
                have established the auth
                ority of the Treasurer over
                the bank. The Senate re
                jected it, the Opposition
                represented it as the quin
                tessence of unsoundness.
                It js now the accepted
                structure of the Common
                wealth Bank, and today a
                non-Labor Treasurer .exer
                cises this authority as a
                matter of course and as
                essential.
                Routine
                Bills for the stabilisation
                of the wheat industry, now
                accepted as routine, were
                rejected.
                A fiduciary-notes bill, to
                expand purchasing power
                to the extent of £18 mil
                lion, which would now be
                regarded as-an-inadequate
                measure to check chronic
                deflation, was represented
                as wildly inflationary.
                Latham informed a won
                dering world that we had
                "inflation and deflation
                too, operating together", a
                piece of economic stupidity
                hailed as wisdom.
                Scullin said to me, 15
                years later, "We could not
                have got inflation then if
                we had tried. Prices were
                crashing all over the Com
                monwealth."
                To Latham inflation was
                not a. condition of sharply
                rising prices. It was some
                thing called "unsound
                finance", automatically as
                sociated with his op
                ponents.
                The tortuous manoeuvr
                ings of Cabinet, Caucus,
                Sir Robert Gibson of the
                Commonwealth Bank, the
                indiscipline of a disinte
                grating party, the role of
                E. G. Theodore, -and the
                defection of certain Labor
                members, can onlv be
                touched on here. But the
                most innocuous acts of the
                Scullin Government were
                made violently controver
                sial.
                One such act was the
                appointment of Sir Isaac
                Isaacs as Governor
                General.
                Scullin had decided to
                attend the Imperial Con
                ference in London in Sep
                tember, 1930. He left
                James Edward Fenton_ in
                charge as Acting Prime
                Minister.
                He was warned not to
                leave the country in this
                crisis by Labor members,
                who felt he would get no
                where in London, but
                Scullin beiieved that he
                could restore confidence in
                Australia in London, and
                went. He hoped to attack
                the problem of a large un
                funded and maturing over
                seas debt....
                ? Incidentally to his visit
                be was to recommend Sir
                Isaac Isaacs to the Kins 86
                Governor-General.
                '? It had been decided at
                previous Imperial Confer
                ences that the- Governor
                General no longer repre
                sented the British Govern
                ment, but the monarch.
                George ? V therefore ex
                pected' to choose his
                Governor-General, and he
                certainly did not want Sir
                Isaac Isaacs.
                Latham made a speech
                in the House of Represen
                tatives arguing that the
                appointment was the per
                sonal prerogative of the
                sovereign. In the debate
                this argument was disposed
                of by Crouch, a Labor
                member.
                Certainly no Australian
                Government has acted on
                Latham's view, which is
                probably nothing more
                that a skilfully concealed
                rationalisation of his dis
                like of Sir Isaac Isaacs -
                concealed from himself as
                much as from anybody
                else.
                The Isaacs appointment
                went through several stages.
                When news reached the
                King that Scullin intended
                to recommend Isaacs,
                George V wrote to the
                Secretary of Slalc for
                Dominions and Colonics
                to inform him that such an
                appointment could not be
                approved.
                The Secretary of State
                (Lord Passfield) warned the
                King that the Crown
                would thus come into
                political controversy. Pass
                field asked Scullin to wait
                till the Imperial Confer
                ence, and Scullin post
                poned the appointment.
                Right queried
                George V warned noth
                ing from the Dominions
                in the way of advice. On
                June 19, 1930, his secre
                tary, Lord Stamfordham,
                wrote to the British .Prime
                Minister's secretary, "I
                cannot for th£ life of me
                understand . . . that the
                Dominions have the right
                to advise the King on the
                appointment of Governors
                General, or, indeed, upon
                any other point."
                On October 30, 1930,
                Ramsay ' MacDonald, the
                British Prime Minister,
                asked Scullin not to ap
                point Isaacs. Scullin re
                plied with the extraordin
                ary statement that he
                (Scullin) would not be able
                to return to Australia if
                the appointment were re- -
                jcctcd.
                Scullin argued with Lord
                Stamfordham the same
                day. George V's diary of
                November 29, 1930, re
                cords that Scullin "argued
                with me for some time
                . . . With great reluctance
                I had to approve of the
                appointment".
                According to Lord Stam
                fordham, the King's argu
                ments were that Sir Isaac
                Isaacs was personally
                unknown to the King; that
                he was 75 years of age;
                that no Australian could
                be selected without having
                a social or political bias
                locally, whereas an over
                seas appointment would be
                free of this.
                When Scullin referred to
                Irish precedents the King,
                according to Stamfordham,
                said that "Ireland was a
                spoilt child and, after
                making a treaty with the
                Free State, she had to be
                humoured. But docs Aust
                ralia,- with her traditional
                loyalty to the throne, wish
                to be compared with Ire
                land where, alas, a con
                siderable element of dis
                loyalty exists?"
                The jibe at Ireland was
                personally wounding to
                Scullin, an Irish-Australian,
                but he had won his point.
                It was left to the Estab
                lishment to work out
                mean-spirited devices for
                revenge. They were care
                fully contrived.
                No 'pleasure'
                His Majesty would not
                use the customary formula
                that he "had pleasure" in
                appointing Sir Isaac Isaacs.
                He washed his hands of
                responsibility. The for
                mula was that Sir Isaac
                Isaacs was appointed "on
                the- advice of the Right
                Honourable J. H. Scullin,
                Prime Minister of Aust
                ralia". f
                Lord Stamfordham wrote
                to Ramsay MacDonald
                that the King could have
                refused the appointment
                "with the warm support of
                the people of Australia",
                but, on the other hand, His
                Majesty is well aware how
                easy it is to light and fan
                the flame of agitation by
                an ill-disposed minority
                especially when, as in this
                case, constituted of trade
                unionists, Communists and
                Irish, not of the highest
                class. And, as the King
                himself told Mr Scullin, he
                would not give him the
                opportunity of executing
                any such manoeuvre."
                . Stamfordham was later
                .to.tone this down so that
                some doubt is left as to
                what the Xing did say. If
                it is Stamfordbam's own
                composition it reveals that
                he lived in a world of fan
                tasy about Australia.
                "Irish", "irade unionists"
                and "Communists" had
                nothing to do with Sir
                Isaac Isaacs, Chief Justice
                of the High Court.
                The terms, however, do
                exquisitely insult Scullin:
                he was of Irish descent
                and, ipso facWi, "not of the
                highest class", he was a
                former trade union leader,
                as a devoid Catholic the
                best, way to insult him
                would be to label him
                "Communist".
                Scullin agonised about
                these things. I once asked
                him if lie would write his
                depression mem/iirs. He
                replied simply, "It nearly
                killed me to live through
                it. It would kill me to
                write about it."
                When the Scullin Gov
                ernment took- office the
                only men in it with minis
                terial experience were
                Theodore and Lyons, ex
                Premiers r>( Queensland
                and Tasmania, respec
                tively.
                Sir Robert Gibson,
                chairman of the Com
                monwealth Rank board,
                pursued a policy opposed
                to the Government. His
                term of otlice as chairman
                was expiring. Scullin re
                newed it and thus renewed
                in his powers an active
                opponent of the Govern
                ments policy. In a con
                versation Scullin said to me
                lhat Gibson's appointment
                was essential to restore
                "confidence".
                High officers in (h#
                Commonwealth Bank re
                garded Gibson as quite
                ignorant of creative bank
                ing, and the appointment
                had no appreciable effect
                in increasing confidence -
                since it renewed conflict
                between bank and Govern
                ment, quite the reverse, in
                fact.
                The prescribed remedy
                for the depression in Aus
                tralia was Ihe Premiers'
                Plan-further deflation in
                a deflationary situation. It
                involved pension and sal
                ary euls, and Fenton
                (Acting Prime Minister)
                and Lyons (Acting
                Treasurer) were left to
                fight Caucus.
               </CardText>
             </Card>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={ScullinUnluckyTwo} alt="James Scullin Part 2 Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Labor's unluckiest leader
Fix this textJames Henry Scullin. Part II" />
              <CardHeader style={styles.cardHeader} title="Concluding the article by
K. E. Beazley, MP" />
               <CardText style={styles.cardText}>
                  Theodore, the
                  Treasurer, was sus
                  pended pending the re
                  sult of a Queensland
                  Royal Commission.
                  Theodore was Aus
                  Fix this texttralia's first significant
                  Kcynesian, and it is tragic
                  that his ideas wore not
                  understood. He knew far
                  more about capitalism than
                  most capitalists, which is
                  why he rapidly made, him
                  self a millionaire when
                  driven from public life.
                  When Scullin returned
                  from the United Kingdom
                  .he found Caucus tending
                  to blame Lyons and Fen
                  t,on for their handling of
                  affairs.
                  Since the party's policy
                  could not get through the
                  Senate, the only real
                  solution was either a
                  double dissolution or the
                  utmost unity and discip
                  line till the next election.
                  Neither was forthcoming
                  and the policy accepted by
                  the Senate -_ which was
                  not in conscience Labor
                  policy - was the Premiers'
                  Plan.
                  To get rid of Fenton and
                  Lyons the Caucus decided
                  upon a "spill" - the elec
                  tion of a new Cabinet.
                  Fenton and Lyons did not
                  stand, but they felt Scullin
                  had not supported them.
                  Senator Daly lost his
                  Cabinet seat, and inter
                  preted 'this as Scullin's
                  punishment for the
                  appointment to the High
                  Court of Edward McTier
                  nan and Herbert Vere
                  Evatt, against Scullin's
                  wishes,
                  Frank Anstey and John
                  Beasley lost their Cabinet
                  seats and interpreted this
                  as Scullin's anger at their
                  opposition to the Premiers'
                  Plan.
                  Lyons (Tasmania), Fen
                  ton (Victoria), Guy (Tas
                  mania), Price (SA), and
                  Gabb (NSW), formed an
                  "All for Australia League".
                  Its activities included
                  crossing the floor to vote
                  no confidcnce in the Scul
                  lin Government in March,
                  1931.
                  Scullin survived this,
                  but the "All for Australias"
                  joined the Nationalists to
                  form the United Australia
                  Party.
                  That was the defection
                  to the Right. It needed
                  only a defection to the
                  Left and Scullin would
                  fall.
                  Lang waits
                  ,Lang bided his time for
                  this. He had defeated the
                  Bavin 'Government and
                  believed his view could
                  prevail in Australia.
                  He did not foresee his own
                  crash from 55 seats to 19
                  in the NSW Parliament.
                  The Lang Group, led by
                  Beasley and including E. J.
                  Ward, overturned the Scul
                  lin Government in Novem
                  ber, 1931.
                  In the subsequent elec
                  tion Scullin fell from 46
                  scats of the previous elec
                  tion to 19. He had-had the
                  most favourable and the
                  largest electoral meetings
                  of his career. The result
                  was a shock to him.
                  Years later, looking at
                  exrLangists in the Ministry
                  and the Speakership, he
                  speculated to me as to what
                  they then felt about their
                  action of 1931. Scullin did
                  not work for reunion with
                  the NSW party. That he
                  left to Curtin.
                  Scullin led the Labor
                  Party thereafter as if New
                  South Wales did not exist.
                  A Federal Labor Party
                  operated in NSW against
                  the Lang machine, W. R.
                  Colbourne (now NSW sec
                  retary), and J. B. Chifley
                  being prominent members.
                  In June, 1935, after the
                  death of David Watkins,
                  senior, David Watkins,
                  junior, contested the scat
                  of Newcastle in the Fed
                  eral Labor interest against
                  a Lang man, Smith. Few
                  gave Federal 'Labor much
                  chance. Scullin and Forde
                  (now deputy leader) stayed
                  away.
                  Lang went to Newcastle
                  and made the grave mis
                  take of attacking Matthew
                  Charlton, the former
                  leader, seven years retired!
                  Charlton, a powerful
                  platform man still, came
                  from retirement to fight for
                  an Australian concept of
                  Labor as against Lang's
                  Sydney bac'. - streets
                  machine. The newspaper
                  billboards proclaimed
                  "Charlton Supports Wat
                  kins." The action of Charl
                  ton crystallised support be
                  hind Watkins. as "real"
                  Labor, and the Lang
                  machine was defeated.
                  Lang took the warning.
                  A Victorian like Scullin
                  could not touch him. A re
                  solute NSW lead like
                  Charlton's would beat him.
                  He sought reunion. Charl
                  ton could still defeat the
                  NSW machine.
                  On October 1, 1935,
                  Scullin told Caucus he
                  wished to resign the leader
                  ship, on medical advice,
                  and the meeting duly elec
                  | led Curtin over Forde by
                  [ 11 votes to 10.
                  Ideas enacted
                  For 14 more years Scul
                  lin sat in the House. He
                  saw his banking, wheat
                  stabilisation and currency
                  ideas enacted or adminis
                  tered by the Curtin and
                  Chifley Governments. He
                  was an adviser on finance,
                  on taxation, and was war
                  time chairman of the Press
                  and Censorship Committee.
                  One love of his was the
                  Commonwealth Literary
                  Fund.
                  He did not contest the
                  election in 1949 and died
                  after four years retirement
                  in 1953.
                  .Scullin and Chifley were
                  both childless - a deep
                  disappointment to each.
                  Perhaps as a consequence
                  both were the furtherers of
                  swift promotion for able
                  "young men in the civil ser-.
                  vice - substitute sons, as
                  it were. At any rate they
                  were exceptionally alert
                  and sensitive to young
                  people, and to the ideas of
                  young people.
                  If Scullin and Theodore
                  could have got their Key
                  nesian ideas through, the
                  Senate, Australia would
                  have benefited.
                  Phillip, Viscount Snow
                  den, a high priest of obso
                  lete financial ideas and
                  Chancellor of the Ex
                  chequer in the United
                  Kingdom, looked down on
                  Scullin's thinking.
                  Had Snowden been a
                  Keynesian it would not
                  have been left to Schacht,
                  by modernising Germany's
                  financial methods on Key
                  nesian lines, to 'build up
                  Germany's power while
                  Britain floundered with
                  Montague Norman. Keynes
                  was the prophet without
                  honour in his own country
                  till Churchill established
                  him.
                  It is the glory of the
                  Senate, Sir George Pearce,
                  and Sir Robert Gibson that,
                  faced with a chance to
                  modernise our financial
                  methods, they chose the
                  political discrediting of
                  Scullin and Theodore in
                  stead. They knew no bet
                  ter. Scullin and Theodore
                  were poor tacticians but
                  their objectives were sound.
                  The cardinal erro. of the
                  Labor Party under Scullin
                  was not to press early in
                  the life of the Scullin Gov
                  ernment for a double dis
                  solution. Anstcy urged this,
                  though. From what 1
                  understand he did not
                  blame Scullin that it was
                  not done. The unions de
                  sired a sympathetic admin
                  istration even if it could
                  not legislate, and urged
                  members and ministers to
                  stay in. Too many feared
                  to" risk tbeir seats.
                  On the whole Scullin
                  himself would have taken
                  the plunge. Had he done so
                  he might have been Prime
                  Minister in fact as well as
                  name.
                  Scullin tried to control
                  the .Labor machine with
                  ideas. When the crisis of
                  1927 - one of the peren
                  nial divisions of the New
                  South Wales Labor Party
                  in the twenties - was be
                  fore the Federal Confer
                  ence of 1927, Scullin put
                  forward some good organ
                  isational remedies, but the
                  real problem was not
                  organisation but men, and
                  Scullin could not handle
                  men because-he could not'
                  invoke loyalty or appeal to
                  the will or imagination.
                  Skulduggery
                  The power politics of
                  NSW had been blatant to
                  an astonishing degree.
                  There had even been a
                  stipulation by the NSW
                  executive that every Mem
                  ber of Parliament leave an
                  undated resignation from
                  Parliament in its hands' -
                  a piece of clumsy Tam
                  many manoeuvring ulti
                  mately rejected.
                  Scullin was unfitted to
                  cope with such skuldug
                  gery.
                  Scullin's brilliant ana
                  impractical idea of a
                  "Supreme Economic Coun
                  cil," to run the economy
                  while Parliament ran other
                  things, was a millstone
                  around Charlton's neck. In
                  flicted on the platform by
                  Scullin in 1921, it was Te
                  moved by Forgan Smith
                  and J. S. Collings at the
                  conference of 1927. Scul
                  lin's own leadership was
                  not burdened with it.
                  ..... ScuJIin was really a poli
                  tician for a civilised situa
                  tion. He put forward ideas
                  for debating in true eisted
                  fodd style.- He was totally
                  unprepared for his ideas to
                  be interpreted as they were.
                  He was unprepared for a
                  fellow logician like Latham
                  to stand in (he House of
                  Representatives and attack
                  an expansion of purchasing
                  power in a chronically de
                  flationary situation by say
                  ing, "We have inflation and
                  deflation too. operating at
                  the same time."
                  He imagined policies
                  would be discussed on their
                  merits, when in fact they
                  will be misrepresented be
                  cause men want power.
                  He never understood
                  why Lang wanted to des
                  troy Theodore, when Lang
                  did not have an economic
                  idea in his head - apart
                  from crude repudiation -
                  which was not a debased
                  version of Theodore's
                  thinking.
                  In short, ho was unpre
                  pared for the realities of
                  Australian politics.
                  Scullin's Prime Minister
                  ship was a tragic experi
                  ence but, in the ultimate,
                  out of it came the syste
                  matic re-thinking of finan
                  ). H. Scullin, leader of ihe Federal Parliamentary Labor Porty from 1928 to 1935. I ?i  Help
                  ). H. Scullin, leader of ihe Federal Parliamentary
                  Labor Porty from 1928 to 1935. I ?i
                  cial and banking policy, the
                  authority of the Treasurer
                  over the Commonwealth
                  Bank, and the financial
                  methods for full employ
                  ment. Scullin's frustrations
                  were Curtin's achievements.
                  What Scullin tried to effect
                  is normal today - not
                  only in the economy but in
                  constitutional procedure.
                  We have an Australian.
                  State Governor in NSW
                  and an Australian Gover
                  nor-General, appointed on
                  the advice of Australian
                  Ministries, and non-Labor
                  ministries at that. Scullin's
                  heresy is now the norm. He
                  finally won the debate.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Scullin
