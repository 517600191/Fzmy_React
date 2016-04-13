import React from 'react';
import { Header } from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import LawBarCPT from './api/LawBarCPT.js';
import LawListCPT from './api/LawListCPT.js';
import PfwhThemeData from './storage/PfwhThemeData.js';
import HeaderPfwh from './storage/HeaderPfwh.js';
import Process  from './api/process.js';
import Search  from './api/Search.js';
import RequestPfwhData from './storage/RequestPfwhData.js';
import Headerbar from './api/Headerbar.js';
var Pfwh = React.createClass({
	getInitialState: function(){
		var that=this;
		setTimeout(function(){
			that.setState({	
				shijianbianliang:that.state.shijianbianliang+1,
			})
		},1000*5)
		return {
			num:0,
			pfwh_list : [],
			shijianbianliang:0,
			datasum:RequestPfwhData.pfwharr,
			newstateflfw:0,
			shiping:"un"
		};
	},
	onpfwhListData : function(newState){
		let that = this;
		this.setState({
			datasum:RequestPfwhData.pfwharr,
			newstateflfw:newState
		});
		if(newState==2){
			this.setState({
				shiping:"sp",
			});
		}else{
			this.setState({
				shiping:"un",
			});
		}
	},
	onserach : function(newState){
		let arrr=[newState];
		this.setState({
			datasum:arrr,
			newstateflfw:0,
		});
	},
	render: function() {	
		return (
			<div>
				<Headerbar index="普法文化" prev={[{link:'/',icon:'chevron-left'}]} />
				<Search callbackSearch={this.onserach} url="http://www.myflfw.com/law/App/mediaMa/AppSearchMediaByTitle.action" />
				<div className="lawbarleft">
					<LawBarCPT data={PfwhThemeData} callbackParent={this.onpfwhListData} yanzheng={"pfwh"} />
				</div>
				<div className="lawlistright">
					<LawListCPT arrnum={this.state.datasum} yanzheng={"pfwh"} yanzhengshiping={this.state.shiping} newstateflfwp={this.state.newstateflfw} />
				</div>
				<NavBarCPT index="普法文化" />
			</div>
		);
	}
});
module.exports = Pfwh;