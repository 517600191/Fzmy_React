import React from 'react';
import NavBarCPT from './api/NavBarCPT.js';
import { Header } from 'amazeui-react';
import HeaderPfjy from './storage/HeaderPfjy.js';
import Process  from './api/process.js';
import FlfwLeftlistCPT from './api/FlfwLeftlistCPT.js';
import PfjyRightlistCPT from './api/PfjyRightlistCPT.js';
import Search from './api/Search.js';
import PfjyLeftlistData from './storage/PfjyLeftlistData.js';
import RequestData from './storage/RequestData.js';
var Pfjy = React.createClass({
	getInitialState:function(){
		let that = this;
		setTimeout(function(){
			that.setState({	
				shijianbianliang:that.state.shijianbianliang+1,
			})
		},1000*5)
		return{
			num:0,
			houselist:[],
			yanzhengflfwright:"jigou",
			shijianbianliang:0,
			datasum:RequestData[4],
			newstateflfw:0
		}
	},
	onUpdate:function(newState){
		let that = this;
		this.setState({
			datasum:RequestData[4],
			newstateflfw:newState
		});
	},
	search:function(newState){
		let arrr=[newState];
		this.setState({
			datasum:arrr,
			newstateflfw:0,
		});
	},
	yanzhengbianzhi:function(newState){
		this.setState({
			yanzhengflfwright:newState
		})
		
	},
	render(){
		return (
			<div>
				<Header {...HeaderPfjy} />
				<Search url="http://www.myflfw.com/law/App/caseMa/getSearchOneMenuNews.action" callbackSearch={this.search} />
				<FlfwLeftlistCPT data={PfjyLeftlistData} callbackp={this.onUpdate} yanzheng="pfjy"/>
				<PfjyRightlistCPT  callright={this.state.datasum} xulie={this.state.num} callbackpp={this.onUpdatetwo} callbackyanzheng={this.yanzhengbianzhi} yanzheng="pfjy" newstateflfwp={this.state.newstateflfw} />
				<div className="kongbaitwo"></div>
				<NavBarCPT index="普法教育" />
			</div>
		);
	}
})
export default Pfjy;