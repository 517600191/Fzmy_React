import React from 'react';
import { Header } from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import LawBarCPT from './api/LawBarCPT.js';
import LawListCPT from './api/LawListCPT.js';
import FzdtThemeData from './storage/FzdtThemeData.js';
import HeaderFzdt from './storage/HeaderFzdt.js';
import Process  from './api/process.js';
import Search  from './api/Search.js';

var Fzdt = React.createClass({
	getInitialState: function(){
		let that = this;
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/Law/getLawNews.action",
			options:{
				"name":"fzdt_list",
				"menuid":1,
				"offset":"0",
				"limit":"20"
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("fzdt_list".length+1));
				that.setState({
					fzdt_list: data.results
				});
			}
		});
		process.push();
		return {
			num:0,
			fzdt_list : []
		};
		
	},
	onfzdtListData : function(newState){
		this.setState({
			num:newState,
		});
		let that = this;
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/Law/getLawNews.action",
			options:{
				"name":"fzdt_list",
				"menuid":newState+1,
				"offset":"0",
				"limit":"20"
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("fzdt_list".length+1));
				that.setState({
					fzdt_list: data.results
				});

			}
		});
		process.push();
	},
	onserach : function(newState){
		this.setState({
			fzdt_list: newState
		});
	},
	render: function() {
		return (
			<div>
				<Header {...HeaderFzdt} />
				<Search callbackSearch={this.onserach} url="http://www.myflfw.com/law/App/Law/searchLawsNews.action" />
				<LawBarCPT data={FzdtThemeData} callbackParent={this.onfzdtListData} yanzheng={"fzdt"} />
				<LawListCPT arrnum={this.state.fzdt_list} yanzheng={"fzdt"} />
				<NavBarCPT index="法治动态" />
			</div>
		);
	}
});
module.exports = Fzdt;