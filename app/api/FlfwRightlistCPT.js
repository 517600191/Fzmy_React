import React from 'react';
import ReactDOM from  'react-dom';
import  { List,ListItem,Grid,AvgGrid,Sticky } from 'amazeui-react';
import Process  from './process.js';
var FlfwRightlistCPT = React.createClass({
	getInitialState:function(){
		return{
			peoplelist:[]
		}
	},
	renderList1 : function(){
		var _this=this;
		if(this.props.callright[this.props.newstateflfwp]!=undefined){
			return(
				this.props.callright[this.props.newstateflfwp].map(function(text,index){
					return(
						<ListItem truncate key={index} id={"L_"+text.id} style={{fontFamily:"微软雅黑"}}>
							<p className="flfwrightlistp" onClick={_this.routeBind} style={{fontSize:"20"}}>{text.name}</p>
							<p className="flfwrightlistp" onClick={_this.routeBind} style={{fontSize:"14"}}>{text.jgname}</p>
						</ListItem>
					)
				})
			);
		}
	},
	routeBind:function(e){
		let id=e.target.parentElement.id.split("_")[1];
		let add="/detail?id="+id+"&"+this.props.yanzheng+"&"+this.props.yanzhengtwo;
		var router = this._reactInternalInstance._context.router;
		router.replace(add);
	},
	ontopchangejigou:function(e){
		this.props.callbackyanzheng("jigou");
		this.props.callbackpp(this.props.xulie,"jigou");
	},

	ontopchangerenyuan:function(e){
		this.props.callbackyanzheng("renyuan");
		this.props.callbackpp(this.props.xulie,"renyuan");
	},
	render:function(){
	 	return(
	 		<div className="rightdiv">
				<AvgGrid sm={2}>
 			  		<li onClick={this.ontopchangejigou} style={{fontSize:"20",fontWeight:"900"}}>机构</li>
 			  		<li onClick={this.ontopchangerenyuan} style={{fontSize:"20",fontWeight:"900"}}>人员</li>
 			  	</AvgGrid>
				<List static style={{overflow:"auto"}} className="flfwrightlistbar">
 					{this.renderList1()}
 				</List>
			</div>
 		)	
	}	 		
})
module.exports =  FlfwRightlistCPT;