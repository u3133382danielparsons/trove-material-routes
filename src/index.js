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
import Hughes from './places/newspapers/pms/Hughes'
import Bruce from './places/newspapers/pms/Bruce'
import Scullin from './places/newspapers/pms/Scullin'
import Lyons from './places/newspapers/pms/Lyons'
import Page from './places/newspapers/pms/Page'
import Menzies from './places/newspapers/pms/Menzies'
import Fadden from './places/newspapers/pms/Fadden'
import Curtin from './places/newspapers/pms/Curtin'
import Forde from './places/newspapers/pms/Forde'
import Chifley from './places/newspapers/pms/Chifley'
import Holt from './places/newspapers/pms/Holt'
import McEwen from './places/newspapers/pms/McEwen'
import Gorton from './places/newspapers/pms/Gorton'
import McMahon from './places/newspapers/pms/McMahon'
import Whitlam from './places/newspapers/pms/Whitlam'
import Fraser from './places/newspapers/pms/Fraser'
import Hawke from './places/newspapers/pms/Hawke'
import Keating from './places/newspapers/pms/Keating'
import Howard from './places/newspapers/pms/Howard'
import Gillard from './places/newspapers/pms/Gillard'
import Rudd from './places/newspapers/pms/Rudd'
import Abbot from './places/newspapers/pms/Abbot'
import Turnbull from './places/newspapers/pms/Turnbull'

import CanberraCollage from './places/newspapers/CanberraCollage'
import CanberraIllustrated from './places/newspapers/CanberraIllustrated'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'

const root = document.getElementById('root')
injectTapEventPlugin()
ReactDOM.render(
  <div>

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
        <Route path='/places/all' component={All} />
        <Route path='/places/newspapers/canberraTimes' component={CanberraTimes}/>
        <Route path='/places/newspapers/canberraCollage' component={CanberraCollage}/>
        <Route path='/places/newspapers/canberraIllustrated' component={CanberraIllustrated}/>
        <Route path='/places/newspapers/pms/Barton' component={Barton}/>
        <Route path='/places/newspapers/pms/Deakin' component={Deakin}/>
        <Route path='/places/newspapers/pms/Watson' component={Watson}/>
        <Route path='/places/newspapers/pms/Reid' component={Reid}/>
        <Route path='/places/newspapers/pms/Fisher' component={Fisher}/>
        <Route path='/places/newspapers/pms/Cook' component={Cook}/>
        <Route path='/places/newspapers/pms/Hughes' component={Hughes}/>
        <Route path='/places/newspapers/pms/Bruce' component={Bruce}/>
        <Route path='/places/newspapers/pms/Scullin' component={Scullin}/>
        <Route path='/places/newspapers/pms/Lyons' component={Lyons}/>
        <Route path='/places/newspapers/pms/Page' component={Page}/>
        <Route path='/places/newspapers/pms/Menzies' component={Menzies}/>
        <Route path='/places/newspapers/pms/Fadden' component={Fadden}/>
        <Route path='/places/newspapers/pms/Curtin' component={Curtin}/>
        <Route path='/places/newspapers/pms/Forde' component={Forde}/>
        <Route path='/places/newspapers/pms/Chifley' component={Chifley}/>
        <Route path='/places/newspapers/pms/Holt' component={Holt}/>
        <Route path='/places/newspapers/pms/McEwen' component={McEwen}/>
        <Route path='/places/newspapers/pms/Gorton' component={Gorton}/>
        <Route path='/places/newspapers/pms/McMahon' component={McMahon}/>
        <Route path='/places/newspapers/pms/Whitlam' component={Whitlam}/>
        <Route path='/places/newspapers/pms/Fraser' component={Fraser}/>
        <Route path='/places/newspapers/pms/Keating' component={Keating}/>
        <Route path='/places/newspapers/pms/Hawke' component={Hawke}/>
        <Route path='/places/newspapers/pms/Howard' component={Howard}/>
        <Route path='/places/newspapers/pms/Gillard' component={Gillard}/>
        <Route path='/places/newspapers/pms/Rudd' component={Rudd}/>
        <Route path='/places/newspapers/pms/Abbot' component={Abbot}/>
        <Route path='/places/newspapers/pms/Turnbull' component={Turnbull}/>
      </div>
    </Switch></div>,
  root
);
registerServiceWorker();
