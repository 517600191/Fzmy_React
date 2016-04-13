import React from 'react';
import ReactDOM from  'react-dom';
import  { TabBar , View,Nav, Container, Icon , Badge,Group,amStyles,AvgGrid,Grid,Col,NavItem} from 'amazeui-react';
import FzdtThemeData from '../storage/FzdtThemeData.js';
import PfwhThemeData from '../storage/PfwhThemeData.js';
var flag="LL_0";
var LawBarCPT = React.createClass({
	getInitialState:function(){
		return{
			hreff:""
		}
	},
	renderList1:function(){
		var _this=this;
		return(
			this.props.data.map(function(theme,index){
				if(index==0){
					return(
						<NavItem href="" active onClick={_this.themeBind} key={index} className="lawbariconsum" style={{color:"#0e90d2"}} id={"LL_"+index}>
							<Icon icon={theme.icon} className="lawbariconn1" />
							<div className="lawbariconn2">{theme.name}</div>
						</NavItem>
					)
				}else{
					return(
						<NavItem href="" onClick={_this.themeBind} key={index} className="lawbariconsum" style={{color:"#666666"}} id={"LL_"+index}>
							<Icon icon={theme.icon} className="lawbariconn1" />
							<div className="lawbariconn2">{theme.name}</div>
						</NavItem>
					)
				}
			})
		)
	},
	componentWillMount:function(){
		flag="LL_0";
	},
	themeBind:function(e){
		var newState=0;
		if(this.props.yanzheng=="fzdt"){
			for(let i=0;i<FzdtThemeData.length;i++){
				if(e.target.parentElement.children[1].textContent==FzdtThemeData[i].name){
					newState=i;
					var d1=document.getElementById(flag);				
					d1.style.color="#666666";
					e.target.parentElement.style.color="#0e90d2";
					flag=e.target.parentElement.id;
				}
			}
		}else if(this.props.yanzheng=="pfwh"){
			for(let i=0;i<PfwhThemeData.length;i++){
				if(e.target.parentElement.children[1].textContent==PfwhThemeData[i].name){
					newState=i;
					var d1=document.getElementById(flag);				
					d1.style.color="#666666";
					e.target.parentElement.style.color="#0e90d2";
					flag=e.target.parentElement.id;
				}
			}
		}
		this.props.callbackParent(newState);
	},
	componentDidMount:function(){
		if(this.props.yanzheng=="fzdt"){
			this.setState({
				hreff: "#/fzdt"
			});
		}else if(this.props.yanzheng=="pfwh"){
			this.setState({
				hreff: "#/pfwh"
			});
		}
	},
	render:function(){
		return(
			<div className="lawbarnavn1">
				<Nav className="lawbarnavn2">
					{this.renderList1()}
				</Nav>
			</div>
		);
	}
})
module.exports = LawBarCPT;