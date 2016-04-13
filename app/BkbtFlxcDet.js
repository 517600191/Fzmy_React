import React from 'react';
import ReactDOM from  'react-dom';
import Process  from './api/process.js';
import  { List,ListItem,Grid,AvgGrid,Sticky,Image,Divider,Icon,Col,Selected,ButtonToolbar,Button,ModalTrigger,Modal,Input} from 'amazeui-react';
import Headerbar from './api/Headerbar.js';

var BkbtFlxcDet=React.createClass({
	getInitialState:function(){
		return{
			dynamicListDetail:[],
			bb:""
			}
		},
componentWillMount:function(){
		let detid=window.location.href.split("&")[1].split("_")[1];
		let that = this;
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/Law/getLawNewsDet.action",
			options:{
				"name":"dynamicListDetail",
				"id":detid
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("dynamicListDetail".length+1));
				that.setState({
					dynamicListDetail:data
				});

			}
		});

		process.push();
	},
componentDidUpdate:function(){
		 var bg = document.getElementsByClassName("showdet")[0]
		bg.innerHTML+=this.state.dynamicListDetail.content
		
},


bkghidden:function(){
	var bkg = document.getElementsByClassName("share-bkg")[0]
	 var jiathis = document.getElementsByClassName("bshare-custom")[0]
	setTimeout(function(){
		bkg.style.opacity="0";
		bkg.style.transition=".8s";
		jiathis.style.transition=".8s"
		jiathis.style.position="relative"
		jiathis.style.top="100%"
	},100)
	bkg.style.visibility="hidden";
},
ret:function(){

	let add="/Bkbt/BkbtFlxc?"
		var router = this._reactInternalInstance._context.router;
		router.replace(add);
	
},
reload:function(e){
	
},
componentDidMount:function(e){
	document.getElementsByClassName("am-icon-share-square-o")[0].style.fontSize="30px";
	document.getElementsByClassName("am-icon-share-square-o")[0].onclick=function(){
		var conbkg =document.getElementsByClassName("Detbg")[0]
		var bkg = document.getElementsByClassName("share-bkg")[0]
		var jiathis = document.getElementsByClassName("bshare-custom")[0]
			bkg.style.visibility="visible";
			bkg.style.opacity="0";
			jiathis.style.position="relative"
			jiathis.style.top="100%"
		setTimeout(function(){
			bkg.style.transition=".8s";
			bkg.style.opacity=1;
			jiathis.style.transition=".8s"
			jiathis.style.top="75%"
		},100)
	};
},
	render(){
		let that=this.state.dynamicListDetail;
		return(
			<div className="Detbg" >
				<Headerbar index="快乐学法详情" prev={[{link:'/bkbt/BkbtFlxc',icon:'chevron-left'}]} next={[{icon: 'share-square-o'}]} />
				<h1 className="title-h1">{that.title}</h1>
				<div className="showdet">	
				</div>
				<div className="share-bkg" onClick={this.bkghidden}>
					
					
				 <div className="bshare-custom icon-medium-plus">

				 	<p className="share-content">分享到:</p>
				 	
					 <div className="iconC">
					 <a title="分享到微信" className="bshare-weixin"></a>
					 <a title="分享到QQ空间" className="bshare-qzone" ></a>
					 <a title="分享到新浪微博" className="bshare-sinaminiblog"></a>
					 <a title="分享到人人网" className="bshare-renren"></a>
					 <a title="分享到腾讯微博" className="bshare-qqmb"></a>
					</div>
				 </div>
	
				</div>
			</div>

			)
		
	}
})

module.exports=BkbtFlxcDet;
