import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Switch,Route,Link } from 'react-router-dom'
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
    </div>
    </Switch>,
  root
);
registerServiceWorker();
