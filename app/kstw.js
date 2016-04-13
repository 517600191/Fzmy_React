import React from 'react';
import ReactDOM from 'react-dom';
import  {Input,Form,Grid,ModalTrigger,Modal,Button} from 'amazeui-react';
import SelectCPT from './api/SelectCPT.js';
import Headerbar from './api/Headerbar.js';
import Process  from './api/process.js';

class Kstw extends React.Component{
	constructor(props){
    	super(props);
	    this.state={
	    	vtitle:"",
	        vphonenum:"",
	        lawtype:"",
	        tcontent:"",
	        ilid:"",
	        message:[],
	        isActive:false,
	        modalStr:"",
	        estatus:"'专家咨询'",
	        uname:localStorage.userName,
	        iuid:localStorage.userId,
	        zj:"/",
	    }
    }

    componentWillMount(){
	  	let that = this;
	  	let ilidnew = window.location.href.split('=')[1].split('?')[0];
	  	let estatusnew = window.location.href.split('&_')[0].split('=')[2].split("'")[1];
		that.setState({
			ilid:ilidnew,
			estatus:estatusnew
		}); 
		if(window.location.href.split('&')[1]=="yyyzzz"){
			this.setState({
				zj:"/ZjlbCPT"
			});
		}
    }

    /*获取法律门类*/
 	getLawvalue(newvalue){
	 	let that = this;
	 	that.setState({
	 		lawtype:newvalue
	 	});
 	}

 	/*获取title、phonenum、content的值并改变对应初始值*/
  	changValue(e){
  		let that = this;
  		that.setState({
	  		vtitle:this.refs.title.getValue(),
	 		vphonenum:this.refs.phonenum.getValue(),
	 		tcontent:this.refs.content.getValue() 		
  		});
  	}

  	/*提交咨询*/
  	handleSubmit(e){
 		let that = this;
 		if(this.state.vtitle!="" && this.state.vphonenum!="" && this.state.tcontent!="" && this.state.lawtype!="" && localStorage.userId>=0){
		 	if(!that.state.iuid || that.state.iuid == ""){
		      that.setState({
		        modalStr:"请登录"
		      });
		    }else{
				let process = new Process({
					"url":"http://1.fzmy1.applinzi.com/index.php/Home/Message/addMessage",
					options:{
						"vtitle":this.state.vtitle,
						"estatus":this.state.estatus,
						"vphonenum":this.state.vphonenum,
						"vlawtype":this.state.lawtype,
						"tcontent":this.state.tcontent,
						"ilid":this.state.ilid,
						"iuid":localStorage.userId,
						"callback":"message"
				},
				headers:{},
				callback:function(data){
					data = JSON.parse(data.slice(0,-1).slice("message".length+1));
				    if(data.success == true){
				        that.setState({
					        modalStr:"发表成功",
					        isActive:true
				        })
				    }else{
				         that.setState({
				          modalStr:"发表失败，请重试",
				          isActive:true
				        })
				    }
				}
			});
			process.push();
			}
 		}else{
 			that.setState({
				modalStr:"发表失败，请重试",
		        isActive:true
		    })
 		}
    }

    /*提交咨询后的提示框的点击跳转事件*/
  	handleClick(e){
  		e.preventDefault();
 		if(this.state.modalStr=="请登录"){
	      	let add="/login";
	      	var router = this._reactInternalInstance._context.router;
	      	router.replace(add);
 		}else{
	  		let add="/kstw";
	    	var router = this._reactInternalInstance._context.router;
	    	router.replace(add);
 		}
 	}

	render (){
		let _this=this;
		  	var modal =  (function(){
                return 	<Modal 
                		  	type="alert" 
                		  	title="提示" 
                		 	onClick={_this.handleClick.bind(_this)}>
                			{_this.state.modalStr}
                		</Modal>
            }());

		return(
			<div>
				<Headerbar index={this.state.estatus} link='/login' 
					prev={[{link:this.state.zj,icon:'chevron-left'}]} 
					next={[{link:'/zxlb',title:'查看提问'}]} />
				<Form horizontal className="form1">
					<Grid>
			   			<Input 
			   				placeholder="咨询标题"
			   				ref="title" 
			   				value={this.state.title} 
			   				id="zxtitle" 
			   				icon="pencil"
			   				onChange={_this.changValue.bind(_this)} />
			   			
			   			<div>
			   				<Input 
			   					placeholder="手机号码"
			   					ref="phonenum" 
			   					value={this.state.phonenum} 
			   					id="zxphone" 
			   					icon="phone"
			   					onChange={_this.changValue.bind(_this)} />
			   			</div>

			   				<Input 
			   					type="textarea" 
			   					ref="content" 
			   					value={this.state.content} 
			   					id="zxcontent" 
			   					icon="book"
			   					placeholder="请详细面试事件发生的时间、地点、经过及想获得的帮助"
			   					onChange={_this.changValue.bind(_this)} />

			    		<SelectCPT callbackGetvalue={_this.getLawvalue.bind(_this)}/>	

			      		<ModalTrigger modal={modal} open={this.state.isActive}>		      
			      			<Button  
			      				amStyle="primary" 
			      				className="btnsubmit"
			      				onClick={_this.handleSubmit.bind(_this)}>
			      				提交
			      			</Button>		      	
	    				</ModalTrigger> 
	    			</Grid>
	    		</Form>
    		</div>
		);
	}	
}
export default Kstw;