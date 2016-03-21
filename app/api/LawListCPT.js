import React from 'react';
import ReactDOM from  'react-dom';
import  { TabBar ,ListItem, List,View, Container, Icon , Badge,Group,amStyles,AvgGrid,Grid,Col,NavItem} from 'amazeui-react';

class LawListCPT extends React.Component{
	routeBind(e){
		let id=e.target.id.split("_")[1];
		let add="/detail?id="+id+"&"+this.props.yanzheng;
		var router = this._reactInternalInstance._context.router;
		router.replace(add);
	}
	render(){
		let routeData=this.routeBind.bind(this);
		let num=this.props.data;
		let barnum=this.props.arrnum.map(function(theme,index){
			return(
				<ListItem truncate key={index} id={"L_"+theme.id} onClick={routeData} style={{fontWeight:900}}>
					{theme.title}
				</ListItem>
			)
		});
		return(
			<List static style={{marginTop:0,marginBottom:0,overflow:"auto"}} className="lawlistn1">
				{barnum}
			</List>
		);
	}
}
export default LawListCPT;