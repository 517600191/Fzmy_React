import React from 'react';
import ReactDOM from  'react-dom';
import Process  from './api/process.js';
import  { List,ListItem,Grid,AvgGrid,Sticky,Image,ModalTrigger,Modal,Col,Selected,ButtonToolbar,Button,Input} from 'amazeui-react';
import DayyPtypeData from './DayyPtypeData.js'
import DayyprovinceData from './DayyprovinceData.js'
import DayycityData from './DayycityData.js'
import province from './storage/province.js'
import Headerbar from './api/Headerbar.js';
var DayyProfile =React.createClass({ 

	getInitialState:function(){
		return{
		who:[''],
		age:"",
		city:[""],
		area:[""]
		}
	},
	whoselect:function(event){
		this.state.who[0] = event; 
	},
	ageInput:function(event){
		this.state.age=event.target.value;
	},
	cityselect:function(event){
		this.state.city[0]=event;

	},
	areaselect:function(event){
		this.state.area[0]=event;
	},
validatewho:function(){
	var error="";
	if(this.state.who[0]==[]){
		error="请选择与预约人关系";
	}else if(this.state.age==""||this.state.age.length>2){
		error="请正确填写年龄";
	}else if(this.state.city[0]==[]||this.state.area[0]==[]){
		error="请选择城市或地区";
	}else{
		let add="/Dayy/DayyQuestionType?"+"&"+this.state.who[0]+"&"+this.state.age+"&"+this.state.city[0]+"&"+this.state.area[0];
		var router = this._reactInternalInstance._context.router;
		router.replace(add);
	}
	this.setState({
		whoerror:error
	});
},



	render(){
		
		return(	

			<div className="bkg">
				<Headerbar index="对案预约" prev={[{link:'/',icon:'chevron-left'}]} />
					<Image src="app/logo.jpg" responsive/>
						<div className="Step">
						
							<AvgGrid sm={11} className="StepList">
									
									<li className="step1 num1">1</li>
									<hr/>
									<li className="step2">2</li>
									<hr/>
									<li className="step3">3</li><br/>
								
							</AvgGrid>
							<AvgGrid sm={3} className="StepContentList">
									<li><span className="cot1">基本资料</span></li>
									<li><span className="cot2">服务需求</span></li>
									<li><span className="cot3">联系方式</span></li>
							</AvgGrid>
							
						</div>
					
				
					<ButtonToolbar className="YYSelect">
						<p>代表谁找律师:</p>
						<Selected data={DayyPtypeData} 
						 value={this.state.who[0]}
						  className="SelectContent"  
						  onChange={this.whoselect} />
						<p>年龄:</p>
						<Input  className="ageInput"  
						placeholder="请输入您的年龄" 
						ref="ageInput" 
						value={this.state.agevalue} 
						onChange={this.ageInput} />
						<p>事情发生地:</p>
						<Selected data={DayyprovinceData}  maxHeight={150} onChange={this.cityselect} className="SelectProvince" />
						<Selected data={DayycityData}  maxHeight={150} onChange={this.areaselect} className="SelectCity" />
						<ModalTrigger   modal={<Modal type="alert"   className=" modal-left" title="温馨提示" >{this.state.whoerror}</Modal>}>
						<Button amStyle="primary"radius className="StepNextButton" onClick={this.validatewho}  >
						  下一步
						</Button>
						</ModalTrigger>
					</ButtonToolbar>
				</div>
			
			)
	}
})
export default DayyProfile; 