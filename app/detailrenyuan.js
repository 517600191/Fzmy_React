import React from 'react';
import { Navbar , View,Container,Article,Icon,Image} from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import Process  from './api/process.js';
import Headerbar from './api/Headerbar.js';
class DetailRenyuan extends React.Component{
	constructor(props){
		super(props);
		var that = this;
		let idnum=window.location.href.split("?")[1].split("&")[0].split("=")[1];
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/Ser/getServiceStaffDet.action",
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
			}
		});
		process.push();
		this.state={
			callbackData : []
		}
		
		
			
	}

	routeBind(e){
		console.log(e.target);
		let id=e.target.id.split("_")[1];
		let add="/detail?id="+id+"&"+"flfw"+"&"+"renyuan";
		var router = this._reactInternalInstance._context.router;
		router.replace(add);
		var that = this;
		let idnum=window.location.href.split("?")[1].split("&")[0].split("=")[1];
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/Ser/getServiceStaffDet.action",
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
			}
		});
		process.push();
	}

	componentDidUpdate(){
		var _this=this;
		if(document.getElementById("xuanzhuan")!=null){
			var xuanzhuan=document.getElementById("xuanzhuan");
				xuanzhuan.remove();
		}
		var aa=document.getElementById("intro");
			aa.innerHTML=this.state.callbackData.intro;
		var bb=document.getElementById("spe");
			bb.innerHTML=this.state.callbackData.spe;
		var cc=document.getElementById("serscope");
			cc.innerHTML=this.state.callbackData.serscope;
		
	}

	render(){
		console.log(this.state.callbackData);
		return (
			<div>
				<Headerbar index="人员详情" prev={[{link:'/flfw',icon:'chevron-left'}]} />
				<div style={{textAlign:"center"}}><img src={"http://www.myflfw.com/"+this.state.callbackData.pic} style={{width:"150",marginTop:"30",marginBottom:"30"}}/></div>
				<div style={{textAlign:"center",fontSize:"30",fontWeight:"900"}}>{this.state.callbackData.name}</div>
				<div style={{textAlign:"center",fontSize:"20",fontWeight:"900",marginTop:"20"}}>个人简介</div>
				<div id="intro" style={{textAlign:"center",fontWeight:"900",fontFamily:"微软雅黑",padding:"20"}}></div>
				<div style={{textAlign:"center",fontSize:"20",fontWeight:"900",marginTop:"20"}}>个人经历</div>
				<div id="spe" style={{textAlign:"center",fontWeight:"900",fontFamily:"微软雅黑",padding:"20"}}></div>
				<div style={{textAlign:"center",fontSize:"20",fontWeight:"900",marginTop:"20"}}>擅长领域</div>
				<div id="serscope" style={{textAlign:"center",fontWeight:"900",fontFamily:"微软雅黑",padding:"20"}}></div>
				<div style={{textAlign:"center",fontSize:"20",fontWeight:"900",marginTop:"20"}}>个人详情</div>
				<div id="gerenxiangqing" style={{fontFamily:"宋体",padding:"20"}}>
					<p style={{marginLeft:"20",marginTop:"5",fontWeight:"900"}}>手机:<span style={{color:"#157EF4"}}>{this.state.callbackData.contact}</span></p>
					<p style={{marginLeft:"20",marginTop:"5",fontWeight:"900"}}>电话:<span style={{color:"#157EF4"}}>{this.state.callbackData.telePhone}</span></p>
					<p style={{marginLeft:"20",marginTop:"5",fontWeight:"900"}}>邮箱:<span>{this.state.callbackData.email}</span></p>
					<p style={{marginLeft:"20",marginTop:"5",fontWeight:"900"}}>执业证号:<span>{this.state.callbackData.idCard}</span></p>
					<p style={{marginLeft:"20",marginTop:"5",fontWeight:"900"}}>执业机构:<span>{this.state.callbackData.orgName}</span></p>
					<p style={{marginLeft:"20",marginTop:"5",fontWeight:"900"}}>联系地址:<span style={{color:"#157EF4"}}>{this.state.callbackData.address}</span></p>
				</div>
				<div className="jiazai" id="xuanzhuan"><Icon spin icon="spinner" style={{fontSize:"30",color:"white"}}/></div>
				<div className="kongbai"></div>
			</div>
		)
	}
}
export default DetailRenyuan;