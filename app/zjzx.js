import React from 'react';
import Headerbar from './api/Headerbar.js';
import ZjlbCPT from './api/ZjlbCPT.js';

class Zjzx extends React.Component{
	constructor(props){
		super(props);
		var yz=window.location.href.split("?")[1].split("&")[0];
		this.state={
			yanzheng:yz
		};
	}
	render(){
		return (
			<div>
				<Headerbar index="专家咨询" link='/zjzx' prev={[{link:'/',icon:'chevron-left'}]}  />
				<ZjlbCPT yz={this.state.yanzheng}/>
			</div>
		);
	}
	
}
export default Zjzx;