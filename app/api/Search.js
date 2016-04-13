import React from 'react';
import ReactDOM from  'react-dom';
import  { Navbar ,Icon ,Container,Button,Form,Input,FormGroup,Grid,Col} from 'amazeui-react';
import NavBarCPT from './NavBarCPT.js';
import Process  from './process.js';

class Search extends React.Component{
	constructor(props){
       super(props);        
		this.state={
			result: []
		}
		
    }
	handleChange(event){
		 this.setState({userInput:event.target.value});
		 console.log(event.target.value);
	}
	submitAndClear(){
		let that = this;
		let date = this.state.userInput;
		this.setState({userInput:''});
		if(this.props.yanzheng=="renyuan"){
			let process = new Process({
				"url":this.props.url,
				options:{
					"name":"dynamic_searchlist",
					"search":date,
					"callback":"234",
					"searchtype":"7"
				},
				headers:{},
				callback:function(data){
					console.log(data);
					data = JSON.parse(data.slice(0,-1).slice("dynamic_searchlist".length+1));
					that.setState({
						result: data
					});
					that.props.callbackSearch(that.state.result);
				} 
			});
			process.push();
		}else{
			let process = new Process({
				"url":this.props.url,
				options:{
					"name":"dynamic_searchlist",
					"search":date,
					"callback":"234",
					"searchtype":"1"
				},
				headers:{},
				callback:function(data){
					console.log(data);
					data = JSON.parse(data.slice(0,-1).slice("dynamic_searchlist".length+1));
					that.setState({
						result: data
					});
					that.props.callbackSearch(that.state.result);
				} 
			});
			process.push();
		}
	}	
	
	render(){
		return (
				<Container className="searchDiv">
					<Grid className="doc-g">
    					<Col sm={9}>
							<input type="text"  placeholder="Search..." value={this.state.userInput}  ref='myInput' onChange={this.handleChange.bind(this)} className="searchinput am-form-field" />
						</Col>
    					<Col sm={3}>
							<button onClick={this.submitAndClear.bind(this)} className="am-btn am-btn-primary searchbutton" >提交</button>				
						</Col>
					</Grid>
				</Container>			
			   );
	}
}
export default Search;