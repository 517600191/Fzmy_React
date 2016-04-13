import React from 'react';
import Headerbar from './api/Headerbar.js';

class Zxfw extends React.Component{
	constructor(props){
		super(props);
		var that = this;
		this.state={
			callbackData : "/detail?"+window.location.href.split("?")[2],
		}
	}
	componentDidMount(){
		var map = new BMap.Map("allmap2");
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				map.enableScrollWheelZoom(true);
				var mk = new BMap.Marker(r.point);
				var circle = new BMap.Circle(r.point,600,{fillColor:"blue", strokeWeight: 1 ,fillOpacity: 0.3, strokeOpacity: 0.3});
				map.addOverlay(mk);
				map.addOverlay(circle);
				map.centerAndZoom(r.point,14);
				map.panTo(r.point);
				var myKeys = ["公安局", "检察院", "法院"];
				var local = new BMap.LocalSearch(map, {
					renderOptions:{map: map, panel:"r-result"},
					pageCapacity:5
				});
				local.searchInBounds(myKeys, map.getBounds());
			}
			else {
				alert('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true})
	}
	render(){
		return (
			<div>
				<Headerbar index="找寻服务" prev={[{link:'/',icon:'chevron-left'}]}  />
				<div id="allmap2"></div>
			</div>
		);
	}
	
}
export default Zxfw;