import React from 'react';
import ReactDOM from  'react-dom';
import Process  from './api/process.js';
import DayyProfile from './DayyProfile.js';
import DayyQuestionType from './DayyQuestionType.js';
import  { List,ListItem,Grid,AvgGrid,Sticky,Image,Col,Selected,ButtonToolbar,Button,ModalTrigger,Modal,Input} from 'amazeui-react';
import Headerbar from './api/Headerbar.js';
var DayyContact = React.createClass({
	getInitialState:function(){
		return{
			representative:"",
			age:"",
			address:"",
			type:"",
			name:"",
			phonenum:"",
			
			}
		},
	nameInput:function(event){
		this.state.name=event.target.value;
	},
	phonenumInput:function(event){
		this.state.phonenum=event.target.value;
	},
	Contactvalidate:function(){
	  	var alert="";
		if(this.state.name==""||this.state.name.length>4){
	  		alert="未输入你的称谓或格式是不正确 :(";
	  	}else if(this.state.phonenum==""||this.state.phonenum.length!=11){
	  		alert="未输入手机号码获格式不正确 :(";
	  	}else{
  			 let representative=window.location.href.split("?")[1].split("_")[0].split("&")[2];
			 let age=window.location.href.split("?")[1].split("_")[0].split("&")[3];
			 let city=window.location.href.split("?")[1].split("_")[0].split("&")[4];
			 let area=window.location.href.split("?")[1].split("_")[0].split("&")[5];
			 let type=window.location.href.split("?")[1].split("_")[0].split("&")[6];
			 let address=city+area;
			 let name = this.state.name;
			 let phonenum = this.state.phonenum;
			 let that = this;
			 let date = this.state.userInput;
			 this.setState({userInput:''});
			let process = new Process({
				"url":"http://1.fzmy1.applinzi.com/index.php/Home/Appointment/addAppointment",
			options:{
				"vname":name,
				"vphonenum":phonenum,
				"iage":age,
				"etype":type,
				"erepresentative" :representative,
				"vaddress":address
				},
			headers:{},
			callback:function(data){ 
				data = JSON.parse(data.slice(0,-1).slice("dynamic_searchlist".length+1));
				that.setState({
					result: data
				});
				
			} 

			});

			process.push();
			alert="提交成功了 :)";
		}
		this.setState({
			Contactalert:alert
		})
			
	  },
	
	render(){
		return(	
			<div className="bkg">
				<Headerbar index="对案预约" prev={[{link:'/Dayy/DayyQuestionType',icon:'chevron-left'}]} />
					<Image src="app/logo.jpg" responsive/>
				<div className="Step">
					<AvgGrid sm={11} className="StepList">
										
						<li className="step1">1</li>
						<hr/>
						<li className="step2">2</li>
						<hr/>
						<li className="step3 num1">3</li><br/>
									
					</AvgGrid>
					<AvgGrid sm={3} className="StepContentList">
						<li><span className="cot1">基本资料</span></li>
						<li><span className="cot2">服务需求</span></li>
						<li><span className="cot3">联系方式</span></li>
					</AvgGrid>
							
				</div>
				<div className="ContactList">
						<p>留下你的手机号码获得案件预判和专业律师提供的免费法律意见。</p>
						<Input placeholder='您的称谓,如张先生/李女士'  ref="nameInput" onChange={this.nameInput} radius />
						<Input placeholder='请输入你的手机号码号码' ref="nameInput" onChange={this.phonenumInput}radius />
					<ButtonToolbar>
						<ModalTrigger 
						 onConfirm={this.onConfirm} 
						 modal={<Modal type="alert"  className="modal-left" title="温馨提示" >{this.state.Contactalert}</Modal>}>
						 <Button radius amStyle="primary" onClick={this.Contactvalidate} >
						 提交申请
						 </Button>
						</ModalTrigger>
					</ButtonToolbar>
				</div>
			</div>
			
			)
		}
	})
export default DayyContact;