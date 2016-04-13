import React from 'react';
import ReactDOM from  'react-dom';
import { Router, Route, hashHistory} from 'react-router'
import { Navbar , View} from 'amazeui-react';
import Home  from './home.js';
import Fzdt  from './fzdt.js';
import Flfw  from './flfw.js';
import Pfjy  from './pfjy.js';
import Pfwh  from './pfwh.js';
import Detail  from './detail.js';
import Login  from './login.js';
import Reg  from './reg.js';
import Bkbt from './bkbt.js';
import Dayy from './Dayy.js';
import Dhrx from './dhrx.js';
import Fffw from './fffw.js';
import Fwgj from './fwgj.js';
import Kstw from './kstw.js';
import Zjzx from './zjzx.js';
import Zxfw from './zxfw.js';
import Lawreg from './lawreg.js';
import tzxq from './tzxq.js';
import ZjlbCPT from './api/ZjlbCPT.js';
import ZjzxCPT from './ZjzxCPT.js';
import DayyContact from './DayyContact.js'
import DayyQuestionType from './DayyQuestionType.js';
import BkbtFlxc from "./BkbtFlxc.js";
import BkbtFlxcDet from "./BkbtFlxcDet.js";
import PmjsCPT from './api/PmjsCPT.js';
import Baidumap from './Baidumap.js';
import Zxlb from './zxlb.js';
import DetailRenyuan from './detailrenyuan.js';
class App extends React.Component{
	render(){
		return(
			<Router history={hashHistory}>
    			<Route path="/" component={Home} />
    			<Route path="/fzdt" component={Fzdt} />
    			<Route path="/flfw" component={Flfw} />
    			<Route path="/pfjy" component={Pfjy} />
    			<Route path="/pfwh" component={Pfwh} />
          <Route path="/detail" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/reg" component={Reg} />
          <Route path="/bkbt" component={Bkbt} />
          <Route path="/Dayy" component={Dayy} />
          <Route path="/dhrx" component={Dhrx} />
          <Route path="/fffw" component={Fffw} />
          <Route path="/fwgj" component={Fwgj} />
          <Route path="/kstw" component={Kstw} />
          <Route path="/zjzx" component={Zjzx} />
          <Route path="/zxfw" component={Zxfw} />
          <Route path="/lawreg" component={Lawreg} />
          <Route path="/tzxq" component={tzxq} />
          <Route path="/ZjlbCPT" component={ZjlbCPT} />
          <Route path="/ZjzxCPT" component={ZjzxCPT} />
          <Route path="/Dayy/DayyQuestionType" component={DayyQuestionType} />
          <Route path="/Dayy/DayyContact" component={DayyContact} />
          <Route path="/Bkbt/BkbtFlxc" component={BkbtFlxc} />
          <Route path="/Bkbt/BkbtFlxc/BkbtFlxcDet" component={BkbtFlxcDet} />
          <Route path="/PmjsCPT" component={PmjsCPT} />
          <Route path="/Baidumap" component={Baidumap} />
          <Route path="/zxlb" component={Zxlb} />
          <Route path="/detailrenyuan" component={DetailRenyuan} />
  			</Router>
  		);
	}
}
ReactDOM.render(<App />, document.querySelector("#app"));
