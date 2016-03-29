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
			return ( this.props.callright[this.props.newstateflfwp].map(function(text,index){
		 		return(
				    <ListItem truncate key={index} onClick={_this.routeBind} id={"L_"+text.id} style={{fontFamily:"微软雅黑"}}>
				    	{text.title}
				    </ListItem>
					)
		        })
		   	);
		}
	},
	routeBind:function(e){
		let id=e.target.id.split("_")[1];
		let add="/detail?id="+id+"&"+this.props.yanzheng;
		var router = this._reactInternalInstance._context.router;
		router.replace(add);
	},
	

	render:function(){
		// console.log(this.props.yanzheng);
		// console.log(this.props.callright);
		
	 	return(
	 		<div className="rightdiv">
				<List static style={{overflow:"auto",fontWeight:"900"}} className="flfwrightlistbar">
 					{this.renderList1()}
 				</List>
			</div>
 		)	
	}	 		
})
module.exports =  FlfwRightlistCPT;