import React from 'react';
import { Header } from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import LawBarCPT from './api/LawBarCPT.js';
import LawListCPT from './api/LawListCPT.js';
import PfwhThemeData from './storage/PfwhThemeData.js';
import HeaderPfwh from './storage/HeaderPfwh.js';
import Process  from './api/process.js';
import Search  from './api/Search.js';

var Pfwh = React.createClass({
	getInitialState: function(){
		let that = this;
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/mediaMa/AppMediaList.action",
			options:{
				"name":"pfwh_list",
				"menuid":1,
				"offset":"0",
				"limit":"20"
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("pfwh_list".length+1));	
				that.setState({
					pfwh_list: data.results
				});
			}
		});
		process.push();
		return {
			num:0,
			pfwh_list : [],
		};
	},
	onpfwhListData : function(newState){
		if(newState==3){
			newState=4;
		}else if(newState==4){
			newState=5;
		}
		this.setState({
			num:newState,
		});
		let that = this;
		let process = new Process({

			"url":"http://www.myflfw.com/law/App/mediaMa/AppMediaList.action",
			options:{
				"name":"pfwh_list",
				"menuid":newState+1,
				"offset":"0",
				"limit":"20"
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("pfwh_list".length+1));
				that.setState({
					pfwh_list: data.results
				});
			}
		});
		process.push();
	},
	onserach : function(newState){
		this.setState({
			pfwh_list: newState
		});
	},
	render: function() {	
		return (
			<div>
				<Header {...HeaderPfwh} />
				<Search callbackSearch={this.onserach} url="http://www.myflfw.com/law/App/mediaMa/AppSearchMediaByTitle.action" />
				<LawBarCPT data={PfwhThemeData} callbackParent={this.onpfwhListData} yanzheng={"pfwh"} />
				<LawListCPT arrnum={this.state.pfwh_list} yanzheng={"pfwh"} />
				<NavBarCPT index="普法文化" />
			</div>
		);
	}
});
module.exports = Pfwh;