import React from 'react';
import ReactDOM from  'react-dom';
import  { TabBar ,ListItem, List,View, Container, Icon , Badge,Group,amStyles,AvgGrid,Grid,Col,NavItem} from 'amazeui-react';

var LawListCPT = React.createClass({
	renderList1:function(){
		var _this=this;
		if(this.props.arrnum[this.props.newstateflfwp]!=undefined){
			return(
				this.props.arrnum[this.props.newstateflfwp].map(function(theme,index){
					return(
						<ListItem truncate key={index} id={"L_"+theme.id} onClick={_this.routeBind} style={{fontWeight:900,fontFamily:"微软雅黑"}}>
							{theme.title}
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
		return(
			<List static style={{marginTop:0,marginBottom:0,overflow:"auto"}} className="lawlistn1">
				{this.renderList1()}
				<div className="kongbai"></div>
			</List>
		);
	}
})
module.exports = LawListCPT;