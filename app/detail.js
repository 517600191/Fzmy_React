import React from 'react';
import { Navbar , View,Container,Article,Icon,Image} from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import Process  from './api/process.js';
import Headerbar from './api/Headerbar.js';
class Detail extends React.Component{
	constructor(props){
		super(props);
		var that = this;
		this.state={
			callbackData : []
		}
		let yz=window.location.href.split("?")[1].split("&")[1];
		let yz2=window.location.href.split("?")[1].split("&")[2];
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
		}else if(yz=="pfjy"){
			let idnum=window.location.href.split("?")[1].split("&")[0].split("=")[1];
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/caseMa/AppCaseContent.action",
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
		}else if(yz=="flfw" && yz2=="jigou"){
			let idnum=window.location.href.split("?")[1].split("&")[0].split("=")[1];
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/Ser/getOrgDetail.action",
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
		}else if(yz=="flfw" && yz2=="renyuan"){
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
	}

	routeBind(e){
		console.log(e.target);
		let id=e.target.id.split("_")[1];
		let add="/detailrenyuan?id="+id+"&"+"flfw"+"&"+"renyuan";
		var router = this._reactInternalInstance._context.router;
		router.replace(add);
	}

	componentDidUpdate(){
		var _this=this;
		if(document.getElementById("xuanzhuan")!=null){
			var xuanzhuan=document.getElementById("xuanzhuan");
				xuanzhuan.remove();
		}
		if(window.location.href.split("?")[1].split("&")[1]=="flfw" && window.location.href.split("?")[1].split("&")[2]=="jigou"){
			var aa=document.getElementById("C_1");
				aa.innerHTML=this.state.callbackData.detail;
				aa.style.fontWeight="900";
			var img=document.getElementById("C_img");
				img.style.width="70%";
				img.style.marginLeft="15%";
				img.style.marginTop="15%";
				img.style.marginBottom="15%";
			var renyuan=document.getElementById("C_renyuan");
				renyuan.innerHTML=this.state.callbackData.concat;
				renyuan.children[2].style.color="#157EF4";
				renyuan.children[2].children[1].onclick=function(e){
					var chuandi=window.location.href.split("?")[1];
					let text=e.target.textContent;
					let add="/Baidumap?"+text+"?"+chuandi;
					var router = _this._reactInternalInstance._context.router;
					router.replace(add);
				}
				renyuan.children[4].style.color="#157EF4";
		}else if(window.location.href.split("?")[1].split("&")[1]=="flfw" && window.location.href.split("?")[1].split("&")[2]=="renyuan"){
			var aa=document.getElementById("intro");
				aa.innerHTML=this.state.callbackData.intro;
			var bb=document.getElementById("spe");
				bb.innerHTML=this.state.callbackData.spe;
			var cc=document.getElementById("serscope");
				cc.innerHTML=this.state.callbackData.serscope;
		}else{
			var aa=document.getElementById("C_1");
				aa.innerHTML=this.state.callbackData.content;
		}
	}

	renyuan(arr){
		var _this=this;
		if(arr.content!=undefined){
			return(
				arr.content.map(function(theme,index){
					return(
						<div>
							<div key={index} className="renyuannum">
								<div className="renyuanimg"><Image src={"http://www.myflfw.com/"+theme.pic} className="renyuantupian" responsive thumbnail /></div>
								<div className="renyuanjianjie">
									<div style={{color:"#157EF4",fontWeight:"900"}} id={"LL_"+theme.id} onClick={_this.routeBind.bind(_this)}>{theme.name}</div>
									<div style={{fontWeight:"900",fontFamily:"微软雅黑"}}>{theme.intro}</div>
								</div>
							</div>
							<div className="getiao"></div>
						</div>
					)
				})
			)
		}
	}

	render(){
		// console.log(window.location.href.split("?")[1].split("&")[1]);
		console.log(this.state.callbackData);
		if(window.location.href.split("?")[1].split("&")[1]=="flfw" && window.location.href.split("?")[1].split("&")[2]=="jigou"){
			return (
				<div>
					<Headerbar index="机构详情" prev={[{link:'/flfw',icon:'chevron-left'}]} />
					<h1 style={{textAlign:"center",padding:"20"}}>{this.state.callbackData.name}</h1>
					<div className="logoimg"><img src={"http://www.myflfw.com/"+this.state.callbackData.picurl} id="C_img"/></div>
					<div id="C_1" style={{fontFamily:"微软雅黑",padding:"20"}}></div>
					<div style={{padding:"20"}}>{this.renyuan(this.state.callbackData)}</div>
					<div id="C_renyuan" style={{padding:"20"}}></div>
					<div className="jiazai" id="xuanzhuan"><Icon spin icon="spinner" style={{fontSize:"30",color:"white"}}/></div>
					<div className="kongbai"></div>	
				</div>
			);
		}else if(window.location.href.split("?")[1].split("&")[1]=="flfw" && window.location.href.split("?")[1].split("&")[2]=="renyuan"){
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
			);
		}else if(window.location.href.split("?")[1].split("&")[1]=="fzdt"){
			return (
				<div>
					<Headerbar index="法治动态详情" prev={[{link:'/fzdt',icon:'chevron-left'}]} />
					<h1 style={{textAlign:"center",padding:"20"}}>{this.state.callbackData.title}</h1>
					<div id="C_1" style={{fontWeight:"900",fontFamily:"微软雅黑",padding:"20"}}></div>
					<div className="jiazai" id="xuanzhuan"><Icon spin icon="spinner" style={{fontSize:"30",color:"white"}}/></div>
					<div className="kongbai"></div>
				</div>
			);
		}else if(window.location.href.split("?")[1].split("&")[1]=="pfjy"){
			return (
				<div>
					<Headerbar index="普法教育详情" prev={[{link:'/pfjy',icon:'chevron-left'}]} />
					<h1 style={{textAlign:"center",padding:"20"}}>{this.state.callbackData.title}</h1>
					<div id="C_1" style={{fontWeight:"900",fontFamily:"微软雅黑",padding:"20"}}></div>
					<div className="jiazai" id="xuanzhuan"><Icon spin icon="spinner" style={{fontSize:"30",color:"white"}}/></div>
					<div className="kongbai"></div>
				</div>
			);
		}else if(window.location.href.split("?")[1].split("&")[1]=="pfwh" && window.location.href.split("?")[1].split("&")[2]=="un"){
			return (
				<div>
					<Headerbar index="普法文化详情" prev={[{link:'/pfwh',icon:'chevron-left'}]} />
					<h1 style={{textAlign:"center",padding:"20"}}>{this.state.callbackData.title}</h1>
					<div id="C_1" style={{fontWeight:"900",fontFamily:"微软雅黑",padding:"20"}}></div>
					<div className="jiazai" id="xuanzhuan"><Icon spin icon="spinner" style={{fontSize:"30",color:"white"}}/></div>
					<div className="kongbai"></div>
				</div>
			);
		}else if(window.location.href.split("?")[1].split("&")[1]=="pfwh" && window.location.href.split("?")[1].split("&")[2]=="sp"){
			return (
				<div>
					<Headerbar index="普法文化详情" prev={[{link:'/pfwh',icon:'chevron-left'}]} />
					<h1 style={{textAlign:"center",padding:"20"}}>{this.state.callbackData.title}</h1>
					<div><video src={"http://www.myflfw.com/"+this.state.callbackData.url} controls className="videomp4"></video></div>
					<div className="jiazai" id="xuanzhuan"><Icon spin icon="spinner" style={{fontSize:"30",color:"white"}}/></div>
					<div className="kongbai"></div>
				</div>
			);
		}
	}
}
export default Detail;