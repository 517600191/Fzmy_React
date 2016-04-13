import React from 'react';
import Headerbar from './api/Headerbar.js';

class Baidumap extends React.Component{
	constructor(props){
		super(props);
		var that = this;
		this.state={
			callbackData : "/detail?"+window.location.href.split("?")[2],
		}
	}
	componentDidMount(){
		var	text=window.location.href.split("?")[1];
		console.log(text);
		var map = new BMap.Map("allmap");
		map.enableScrollWheelZoom(true);// 允许鼠标滑轮放大缩小
		var myGeo = new BMap.Geocoder();
		myGeo.getPoint(text, function(point){
			if (point){
				console.log(point);
				map.addOverlay(new BMap.Marker(point));
				map.centerAndZoom(point,19);
				map.panTo(point);
			}else{
				alert("您选择地址没有解析到结果!");
			}
		});
	}
	render(){
		console.log(this.state.callbackData);
		return (
			<div>
				<Headerbar index="地图" prev={[{link:this.state.callbackData,icon:'chevron-left'}]}  />
				<div id="allmap"></div>
			</div>
		);
	}
	
}
export default Baidumap;