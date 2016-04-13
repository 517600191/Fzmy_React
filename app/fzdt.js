import React from 'react';
import { Header } from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import LawBarCPT from './api/LawBarCPT.js';
import LawListCPT from './api/LawListCPT.js';
import FzdtThemeData from './storage/FzdtThemeData.js';
import HeaderFzdt from './storage/HeaderFzdt.js';
import Process  from './api/process.js';
import Search  from './api/Search.js';
import RequestFzdtData from './storage/RequestFzdtData.js';
import Headerbar from './api/Headerbar.js';
var Fzdt = React.createClass({
	getInitialState: function(){
		var that=this;
		setTimeout(function(){
			that.setState({	
				shijianbianliang:that.state.shijianbianliang+1,
			})
		},1000*5)
		return {
			num:0,
			fzdt_list : [],
			shijianbianliang:0,
			datasum:RequestFzdtData.fzdtarr,
			newstateflfw:0
		};
		
	},
	onfzdtListData : function(newState){
		let that = this;
		this.setState({
			datasum:RequestFzdtData.fzdtarr,
			newstateflfw:newState
		});
	},
	onserach : function(newState){
		let arrr=[newState];
		this.setState({
			datasum:arrr,
			newstateflfw:0,
		});
	},	
	render: function(){
		return (
			<div>
				<Headerbar index="法治动态" prev={[{link:'/',icon:'chevron-left'}]} />
				<Search callbackSearch={this.onserach} url="http://www.myflfw.com/law/App/Law/searchLawsNews.action" />
				<div className="lawbarleft">
					<LawBarCPT data={FzdtThemeData} callbackParent={this.onfzdtListData} yanzheng={"fzdt"} />
				</div>
				<div className="lawlistright">
					<LawListCPT arrnum={this.state.datasum} yanzheng={"fzdt"} newstateflfwp={this.state.newstateflfw} />
				</div>
				<NavBarCPT index="法治动态" />
			</div>
		);
	}
});
module.exports = Fzdt;