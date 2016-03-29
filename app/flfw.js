import React from 'react';
import { Header } from 'amazeui-react';
import HeaderFlfw from './storage/HeaderFlfw.js';
import NavBarCPT from './api/NavBarCPT.js';
import Process  from './api/process.js';
import FlfwLeftlistCPT from './api/FlfwLeftlistCPT.js';
import FlfwRightlistCPT from './api/FlfwRightlistCPT.js';
import Search from './api/Search.js';
import FlfwLeftlistData from './storage/FlfwLeftlistData.js';
import RequestData from './storage/RequestData.js';
var Flfw = React.createClass({
	getInitialState:function(){
		var that=this;
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
			datasum:RequestData[2],
			newstateflfw:0
		}
	},
	onUpdate:function(newState){
		this.setState({
			num:newState
		});
		let that = this;
		if(this.state.yanzhengflfwright=="jigou"){
			this.setState({
				datasum:RequestData[2],
				newstateflfw:newState
			});
		}else if(this.state.yanzhengflfwright=="renyuan"){
			this.setState({
				datasum:RequestData[3],
				newstateflfw:newState
			});
		}
	},
	onUpdatetwo:function(newState,yanzheng){
		let that = this;
		this.setState({
			num:newState
		});
		if(yanzheng=="jigou"){
			this.setState({
				datasum:RequestData[2],
				newstateflfw:newState
			});
		}else if(yanzheng=="renyuan"){
			this.setState({
				datasum:RequestData[3],
				newstateflfw:newState
			});
		}	
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
		console.log(this.state.datasum);
		return (		
			<div className="Flfwpage">
				<Header {...HeaderFlfw} />
				<Search url="http://www.myflfw.com/law/App/User/search.action" callbackSearch={this.search} yanzheng={this.state.yanzhengflfwright} />
				<FlfwLeftlistCPT data={FlfwLeftlistData} callbackp={this.onUpdate} yanzheng="flfw"/>
				<FlfwRightlistCPT  callright={this.state.datasum} xulie={this.state.num} callbackpp={this.onUpdatetwo} callbackyanzheng={this.yanzhengbianzhi} yanzheng="flfw" yanzhengtwo={this.state.yanzhengflfwright} newstateflfwp={this.state.newstateflfw} />
				<div className="kongbaitwo"></div>
				<NavBarCPT index="法律服务" />
			</div>
		);
	}
})
export default Flfw;