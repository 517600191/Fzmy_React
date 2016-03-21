import React from 'react';
import ReactDOM from  'react-dom';
import  { TabBar , View,Nav, Container, Icon , Badge,Group,amStyles,AvgGrid,Grid,Col,NavItem} from 'amazeui-react';
import FzdtThemeData from '../storage/FzdtThemeData.js';
import PfwhThemeData from '../storage/PfwhThemeData.js';

var flag="LL_0";

class LawBarCPT extends React.Component{

	constructor(props){
		super(props);
		this.state={
			hreff:""
		}
	}

	componentDidMount(){
		if(this.props.yanzheng=="fzdt"){
			this.setState({
				hreff: "#/fzdt"
			});
		}else if(this.props.yanzheng=="pfwh"){
			this.setState({
				hreff: "#/pfwh"
			});
		}
	}

	themeBind(e){
		var newState=0;
		if(this.props.yanzheng=="fzdt"){
			for(let i=0;i<FzdtThemeData.length;i++){
				if(e.target.innerHTML==FzdtThemeData[i].name){
					newState=i;
					var d1=document.getElementById(flag);
					d1.className="";
					e.target.parentElement.className="am-active";
					flag=e.target.parentElement.id;
				}
			}
		}else if(this.props.yanzheng=="pfwh"){
			for(let i=0;i<PfwhThemeData.length;i++){
				if(e.target.innerHTML==PfwhThemeData[i].name){
					newState=i;
					var d1=document.getElementById(flag);
					d1.className="";
					e.target.parentElement.className="am-active";
					flag=e.target.parentElement.id;
				}
			}
		}

		this.setState({	
			num:newState,
		})
		
		this.props.callbackParent(newState);
	}

	render(){
		let num=this.props.data;
		let themeData=this.themeBind.bind(this);
		var _this=this;
		let barnum=this.props.data.map(function(theme,index){
			if(index==0){
				return(
					<NavItem href={_this.state.hreff} active onClick={themeData} key={index} style={{textAlign:"center",fontSize:18,display:"inline",flex:1}} id={"LL_"+index}>{theme.name}</NavItem>
				)
			}else{
				return(
					<NavItem href={_this.state.hreff} onClick={themeData} key={index} style={{textAlign:"center",fontSize:18,display:"inline",flex:1}} id={"LL_"+index}>{theme.name}</NavItem>
				)
			}
		});
		return(
			<div style={{overflow:"auto"}}>
				<Nav pills style={{height:50,display:"flex"}} className="lawbarn1">
					{barnum}
				</Nav>
			</div>
		);
	}
}
export default LawBarCPT;