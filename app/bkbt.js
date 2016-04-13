import React from 'react';
import ReactDOM from  'react-dom';
import  { List,ListItem,Grid,AvgGrid,Sticky,Image,Divider,Icon,Col,Selected,ButtonToolbar,Button,ModalTrigger,Modal,Input} from 'amazeui-react';
import Headerbar from './api/Headerbar.js';

var Bkbt =React.createClass({

	render(){
		return(
			
			<div className="BkbtBg">
				<Headerbar index="法治龙门阵" prev={[{link:'/',icon:'chevron-left'}]}  />
				<div className="logo">
					
				</div>
				<div className="options">
					<div className="live">
						
						<div className="live-icon-container">
							<Icon className="live-icon" icon="video-camera" />
						</div>
						<p className="options-title-p"> 法治直播室</p>
					</div>
					<div className="fm">
						
						<div className="fm-icon-container">
							<Icon className="fm-icon" icon="volume-up" />
						</div>
						<p className="options-title-p"> 法治的声音</p>
					</div>
					<a href="#/Bkbt/BkbtFlxc" className="klxf-a">
						<div className="learn">
							
							<div className="learn-icon-container">
								<Icon className="learn-icon" icon="smile-o" />
							</div>
							<p className="options-title-p"> 快乐学法</p>
						</div>
					</a>
					<div className="ylyf">
						<div className="ylyf-icon-container">
							<Icon className="ylyf-icon" icon="gavel" />
						</div>
						<p className="options-title-p"> 有理有法</p>
					</div>
					
				</div>
			</div>

		)
	}
})

module.exports = Bkbt;