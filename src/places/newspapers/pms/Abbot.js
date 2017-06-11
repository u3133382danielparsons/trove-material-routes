import React, { Component } from 'react'
import logo from '../../../images/logo.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Subheader from 'material-ui/Subheader'
import AbbotAir from './images/abbotAir.png'

class Abbot extends Component {

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
            <Subheader>Prime Minister Tony Abbot</Subheader>
          </MuiThemeProvider>

          <MuiThemeProvider>
            <img src={AbbotAir} alt="Tony Abbot Article" />
          </MuiThemeProvider>

          <MuiThemeProvider>
            <Card>
              <CardHeader style={styles.cardHeader} title="" />
               <CardHeader style={styles.cardHeader} title="Will Prime Minister Tony Abbott ever get to live at The Lodge?" />
               <CardText style={styles.cardText}>
                 Ben Chifley famously hated it, John Howard preferred Kirribilli House and Prime Minister Tony Abbott might miss out all together.
                 Completion of renovations at The Lodge have again been delayed, raising the prospect that Mr Abbott could be removed from office before the $6.4 million work is completed.
                 Originally planned to take eight months and be completed in 2014, the Department of Finance has quietly disclosed the historic home won't be ready for the prime minister until at least mid-2015.
                 Works to repair the slate roof, remove asbestos, upgrade security features and replace electrical wiring and climate systems began under Labor in September 2013 at an estimated cost of $3.19 million.
                 In April 2014, federal government tender documents revealed the price had already blown out to $4.45 million and an unspecified amount of funding was included in the government's 2014-15 budget.
                 Amid a growing leadership crisis, Mr Abbott's office referred questions about the National Circuit property to the Department of Prime Minister and Cabinet this week.
                 A spokesman confirmed Mr Abbott had not stayed at the Deakin home since coming to office.
                 A Finance spokeswoman said the delays were due to "significant heritage issues and required approval processes", reportedly related to the search for bathroom and toilet fittings and 1920s-style floor tiles that meet strict heritage requirements.
                 Mr Abbott's office and government departments have sought to keep details hidden from the public and the media. This week officials would only confirm "works are ongoing".
                 In May, Fairfax Media revealed Mr Abbott's office blocked the release of information about the restoration, fearing "negative comments".
                 Public servants were instructed to keep PM&C and Mr Abbott's office from being linked to the project in media reports.
                 Former prime ministers Kevin Rudd and Julia Gillard both used the official residence during their tenures, as well as 15 other prime ministers. Mr Abbott's family moved into Sydney's Kirribilli House in March last year.
                 The renovations, coordinated by Canberra-firm Manteena, have also seen improvements made to roofing, lights, a new kitchen installed, insulation replaced, plumbing upgraded and internal and external painting.
                 A small number of tradesmen were present on site on Wednesday.
                 Designed by architects Oakley and Parkes, prime minister Stanley Melbourne Bruce and his wife Ethel Bruce first moved into the colonial revival-style home in 1927.
                 Ms Gillard famously told journalists that possum urine was once seen making its way down the dining room wall during the visit of an unnamed world leader.
                 Mr Abbott has opted to stay in a $110-a-night room at Australian Federal Police College in Barton while the renovations are completed.
                 Taxpayers forked out $65,000 in lease-termination fees in April after it was revealed Mr Abbott wouldn't use a $3000-a-week rented home in Forrest chosen by the PM&C during the pre-election caretaker period.
                 In March 2014 a 65-year-old Victorian man crashed his car into the brick wall surrounding The Lodge.
                 The wall has since been repaired and the Attorney-General's Department launched a review of perimeter security controls following the incident.
                 Canberra historian and author of a book on The Lodge, Graeme Barrow, said the public had a right to know about the scope and cost of the current renovation work.
                 "When I last saw it a couple of years ago I was again struck at how small it is," he said.
                 "I thought that what is little more than a suburban house did not befit the status of the prime minister of this great country."
                 Mr Barrow said The Lodge should be protected as a heritage asset for public use and a new official residence built in Canberra.
                 "I appreciate its historic significance and what Tammy Fraser did to bring that history to the fore when she lived in The Lodge with Malcolm Fraser.
                 "A new Lodge could easily have been built with the ridiculous amount of money they are spending on it now," he said.
               </CardText>
             </Card>
          </MuiThemeProvider>
      </div>
    )
  }
}

export default Abbot
