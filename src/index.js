import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Switch,Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './App'
import Nsw from './places/Nsw'
import Vic from './places/Vic'
import Sa from './places/Sa'
import Qld from './places/Qld'
import Wa from './places/Wa'
import Tas from './places/Tas'
import Act from './places/Act'
import Nt from './places/Nt'
import Nat from './places/Nat'
import All from './places/All'
import CanberraTimes from './places/newspapers/CanberraTimes'
import Barton from './places/newspapers/pms/Barton'
import Deakin from './places/newspapers/pms/Deakin'
import Watson from './places/newspapers/pms/Watson'
import Reid from './places/newspapers/pms/Reid'
import Fisher from './places/newspapers/pms/Fisher'
import Cook from './places/newspapers/pms/Cook'
import CanberraCollage from './places/newspapers/CanberraCollage'
import CanberraIllustrated from './places/newspapers/CanberraIllustrated'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const root = document.getElementById('root')
injectTapEventPlugin()
ReactDOM.render(
  <Switch>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/places/nsw' component={Nsw}/>
        <Route path='/places/vic' component={Vic}/>
        <Route path='/places/sa' component={Sa}/>
        <Route path='/places/qld' component={Qld}/>
        <Route path='/places/wa' component={Wa}/>
        <Route path='/places/tas' component={Tas}/>
        <Route path='/places/act' component={Act}/>
        <Route path='/places/nt' component={Nt}/>
        <Route path='/places/Nat' component={Nat}/>
        <Route path='/places/all' component={All}/>
        <Route path='/places/newspapers/canberraTimes' component={CanberraTimes}/>
        <Route path='/places/newspapers/canberraCollage' component={CanberraCollage}/>
        <Route path='/places/newspapers/canberraIllustrated' component={CanberraIllustrated}/>
        <Route path='/places/newspapers/pms/Barton' component={Barton}/>
        <Route path='/places/newspapers/pms/Deakin' component={Deakin}/>
        <Route path='/places/newspapers/pms/Watson' component={Watson}/>
        <Route path='/places/newspapers/pms/Reid' component={Reid}/>
        <Route path='/places/newspapers/pms/Fisher' component={Fisher}/>
        <Route path='/places/newspapers/pms/Cook' component={Cook}/>
      </div>
    </Switch>,
  root
);
registerServiceWorker();
