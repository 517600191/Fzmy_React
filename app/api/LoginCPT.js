import React from 'react';
import ReactDOM from  'react-dom';
import  {Router, Navbar ,Icon ,Container,Button,Form,Input,FormGroup,Grid,Col,Modal,ModalTrigger} from 'amazeui-react';
import NavBarCPT from './NavBarCPT.js';
import Process  from './process.js';

class LoginCPT extends React.Component{
	constructor(props){
       super(props);        
		this.state={
			result: [],
			loginTip:'',
			isAction:false,
			LoginResult:false
		}
    }

	login(){
		 let that = this;
		 let userLoginName = this.refs.userName.getValue();
		 let userPsw = this.refs.userPsw.getValue();
		 this.setState({userName:''});
		 this.setState({userPsw:''});
		 if(userLoginName&&userPsw){
			 	let process = new Process({
				"url":"http://www.myflfw.com/law/App/User/login.action",
				options:{
					"name":"login",
					"username":userLoginName,
					"psw":userPsw,
					"callback":"234",
				},
				headers:{},
				callback:function(data){
					
					data = JSON.parse(data.slice(0,-1).slice("login".length+1));
					that.setState({
						result: data
					});
					if(that.state.result){
						localStorage.setItem("userDetail", that.state.result);
						localStorage.setItem("userName", that.state.result.name);
						localStorage.setItem("userId",that.state.result.id);
						var router = that._reactInternalInstance._context.router;
						router.replace("/");
					}else{
						that.setState({
							loginTip:"该用户还没有注册，赶快注册一下吧",
							isAction:true,
							loginResult:true
						});
						
					}
				} 
			});
			process.push();
		}else{
				that.setState({
							loginTip:"用户或密码未填写",
							isAction:true,
							loginResult:false
				});
			}	
	}
	
	pageJump(){
		let loginResult = this.state.loginResult;
		let that = this;
		if(loginResult){
			var router = that._reactInternalInstance._context.router;
					router.replace("/reg");
		}else{

		}
	}

	render(){
		let _this = this;
		var modal =  (function(){
            return <Modal 
            			type="alert"  
            			title="提示" 
            			onClick={_this.pageJump.bind(_this)}>
           				{_this.state.loginTip}
            	   </Modal>
        }());
		return(	
			<Container style={{padding:'20px'}}>
				 <p className="app_title">法制绵阳</p>
		        <Form>
			        <fieldset className="am-form-set">
					       <Input 
						       placeholder="用户名" 
						       id="border_username" 
						       icon="user" 
						       ref="userName"
					       />
						  <Input 
							  type="password" 
							  placeholder="密码"  
							  id="border_psw" 
							  ref="userPsw"
							  icon="lock" 
						  />		         
			        </fieldset>
			        <ModalTrigger modal={modal} open={this.state.isAction}>
   							<Button 
	   							amStyle="primary" block 
	   							onClick={this.login.bind(this)}>
	   							登录
   							</Button>
  						</ModalTrigger>
			    </Form>
			  </Container>
			);
	}
}

export default LoginCPT;