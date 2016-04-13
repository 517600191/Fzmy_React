import React from 'react';
import ReactDOM from  'react-dom';
import Process  from './api/process.js';
import  { List,ListItem,Grid,AvgGrid,Sticky,Image,Divider,Icon,Col,Selected,ButtonToolbar,Button,ModalTrigger,Modal,Input} from 'amazeui-react';
import Headerbar from './api/Headerbar.js';

var  BkbtFlxc=React.createClass({
	getInitialState:function(){
		return{
			dynamic_list:[],
			detid:[""]
		}
	},
	componentWillMount:function(){
		let that = this;
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/Law/getLawNews.action",
			options:{
				"name":"dynamic_list",
				"menuid":"1",
				"offset":"0",
				"limit":"20"
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("dynamic_list".length+1));
				that.setState({
					dynamic_list:data.results
				});
			}
		});
		process.push();
	},
	

	EnterDet:function(e){
		this.state.detid[0]=e.target.id;
		let add="/Bkbt/BkbtFlxc/BkbtFlxcDet?"+"&"+e.target.id;
		var router = this._reactInternalInstance._context.router;
		router.replace(add);
	},
	render(){
		let newlist=this.state.dynamic_list.map(function(title,index){
			return(
					<ListItem key={index}  >
						
						<p id={"a_"+title.id} onc>{title.title}</p>
						
					</ListItem>
				)
		})
			return(
					<div className="news-bkg">
						<Headerbar index="快乐学法" prev={[{link:'/bkbt',icon:'chevron-left'}]}  />
						<List static className="newslist-ul" onClick={this.EnterDet}>
							{newlist}
						</List>
					</div>
				)
		}
})

module.exports = BkbtFlxc;