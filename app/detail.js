import React from 'react';
import { Navbar , View,Container,Article} from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import Process  from './api/process.js';
class Detail extends React.Component{
	constructor(props){
		super(props);
		var that = this;
		this.state={
			callbackData : []
		}
		let yz=window.location.href.split("?")[1].split("&")[1];
		if(yz=="fzdt"){
			let idnum=window.location.href.split("?")[1].split("&")[0].split("=")[1];
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/Law/getLawNewsDet.action",
				options:{
					"name":"callbackData",
					"id":idnum
				},
				headers:{},
				callback:function(data){
					data = JSON.parse(data.slice(0,-1).slice("callbackData".length+1));
					that.setState({
						callbackData: data
					});
					that.props.callbackData=data;
				}
			});
			process.push();
		}else if(yz=="pfwh"){
			let idnum=window.location.href.split("?")[1].split("&")[0].split("=")[1];
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/mediaMa/AppMediaContent.action",
				options:{
					"name":"callbackData",
					"id":idnum
					},
				headers:{},
				callback:function(data){
					data = JSON.parse(data.slice(0,-1).slice("callbackData".length+1));
					that.setState({
						callbackData: data
					});
					that.props.callbackData=data;
				}
			});
			process.push();
		}
	}

	componentDidUpdate(){
		var aa=document.getElementById("C_1");
		aa.innerHTML=this.state.callbackData.content;
	}

	render(){
		return (
			<Container>
				<h1 style={{textAlign:"center"}}>{this.state.callbackData.title}</h1>
				<div id="C_1"></div>	
				<NavBarCPT index="detail" />
			</Container>
		);
	}
}
export default Detail;