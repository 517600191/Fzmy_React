import React from 'react';
import ReactDOM from  'react-dom';
import  { TabBar , Icon,Tabs ,Nav,NavItem,TabsItem,amStyles} from 'amazeui-react';
import FlfwLeftlistData from '../storage/FlfwLeftlistData.js';
import PfjyLeftlistData from '../storage/PfjyLeftlistData.js';

var flagtwo="LLL_0";
var FlfwLeftlistCPT = React.createClass({
	renderList1:function(){
		var _this=this;
		return(
			this.props.data.map(function(title,index){
				if(index==0){
					return (
						<NavItem style={{color:"#0e90d2"}} className="leftli am-link-muted" key={index} href="" onClick={_this.one} id={"LLL_"+index}>
							<Icon icon={title.icon} />
							<p>{title.title}</p>
						</NavItem>
					)
				}else{
					return(
						<NavItem className="leftli am-link-muted" key={index} href="" onClick={_this.one} id={"LLL_"+index}>
							<Icon icon={title.icon} />
							<p>{title.title}</p>
						</NavItem>
					)
				}
			})
		)
	},	
	one:function(e){
		let newstate=0;
		if(this.props.yanzheng=="flfw"){
			for(let i=0;i<FlfwLeftlistData.length;i++){
				if(e.target.textContent==FlfwLeftlistData[i].title||e.target.parentNode.textContent==FlfwLeftlistData[i].title){
					newstate=i;
					var d1=document.getElementById(flagtwo);
					d1.style.color="";
					e.target.parentElement.style.color="#0e90d2";
					flagtwo=e.target.parentElement.id;
				}
			}
		}else if(this.props.yanzheng=="pfjy"){
			for(let i=0;i<PfjyLeftlistData.length;i++){
				if(e.target.textContent==PfjyLeftlistData[i].title||e.target.parentNode.textContent==PfjyLeftlistData[i].title){
					newstate=i;
					var d1=document.getElementById(flagtwo);
					d1.style.color="";
					e.target.parentElement.style.color="#0e90d2";
					flagtwo=e.target.parentElement.id;
				}
			}
		}
		this.props.callbackp(newstate);
	},
	componentWillMount:function(){
		flagtwo="LLL_0";
	},
	render:function(){
		return (
			<div className="leftdiv">
				<Nav className="LeftNav">
					{this.renderList1()}
				</Nav>
			</div>
		)
	}
});
module.exports = FlfwLeftlistCPT;