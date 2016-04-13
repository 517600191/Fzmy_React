import React from 'react';
import ReactDOM from  'react-dom';
import  { List,ListItem,Grid,AvgGrid,Sticky,Image,Col,Selected,ButtonToolbar,Button,ModalTrigger,Modal} from 'amazeui-react';
import Headerbar from './api/Headerbar.js';
var DayyQuestionType = React.createClass({
	getInitialState:function(){
		return{
			btnVal:[''],
			profileVal:""
			}
	},
	buttonClick:function(event){
		this.state.btnVal[0]=event.target.textContent;
	},
	
	typevalidate:function(){
		var error="";
		if(this.state.btnVal[0]==[]){
			error="请选择问题类型"
		}else{
			this.state.profileVal=window.location.href.split("?")[1].split("_")[0];
			let add="/Dayy/DayyContact?"+"&"+this.state.profileVal+this.state.btnVal[0];
			var router = this._reactInternalInstance._context.router;
			router.replace(add);
		}
		this.setState({
			typeerror:error
		})
	},
	render(){
		return(
			<div className="bkg ">
				<Headerbar index="对案预约" prev={[{link:'/Dayy',icon:'chevron-left'}]} />
					<Image src="app/logo.jpg" responsive/>
				
				<div className="Step">
					<AvgGrid sm={11} className="StepList">
									
						<li className="step1">1</li>
						<hr/>
						<li className="step2 num1">2</li>
						<hr/>
						<li className="step3">3</li><br/>
								
					</AvgGrid>
					<AvgGrid sm={3} className="StepContentList">
						<li><span className="cot1">基本资料</span></li>
						<li><span className="cot2">服务需求</span></li>
						<li><span className="cot3">联系方式</span></li>
					</AvgGrid>
							
				
			</div>
			<div className="QuestionTypeButton">
					<p>请选择问题类型:</p>
					<ButtonToolbar className="ButtonList" onClick={this.typeButton}>
						<Button radius onClick={this.buttonClick} className="ButtonLeft">婚姻继承</Button>
						<Button radius onClick={this.buttonClick} className="ButtonRight">债权债务</Button>
						<Button radius onClick={this.buttonClick} className="ButtonLeft">损害赔偿</Button>
						<Button radius onClick={this.buttonClick} className="ButtonRight">劳动工伤</Button>
						<Button radius onClick={this.buttonClick} className="ButtonLeft">交通事故</Button>
						<Button radius onClick={this.buttonClick} className="ButtonRight">企业法务</Button>
						<Button radius onClick={this.buttonClick} className="ButtonLeft">刑案代理</Button>
						<Button radius onClick={this.buttonClick} className="ButtonRight">房产土地</Button>
						<Button radius onClick={this.buttonClick} className="ButtonLeft">法务代办</Button>
						<Button radius onClick={this.buttonClick} className="ButtonRight">其他</Button>
						<ModalTrigger 
						  modal={<Modal type="alert" title="温馨提示" className="modal-left">{this.state.typeerror}</Modal>}>
						<Button amStyle="primary" radius className="Step2NextButton" onClick={this.typevalidate}>
					 	 下一步
						</Button>
						</ModalTrigger>
					</ButtonToolbar>
			</div>
			</div>
			)
	}
	
})
export default  DayyQuestionType;