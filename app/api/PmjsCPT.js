import React from 'react';
import ReactDOM from 'react-dom';
import  {Input,Form,Grid,ModalTrigger,Modal,Button} from 'amazeui-react';
import Headerbar from './Headerbar.js';
class PmjsCPT extends React.Component{
	componentDidMount(){
		var _this=this;
		var refcvs=_this.props.iidd;
		var widthlength=document.documentElement.clientWidth;
		var cvs=document.getElementById(_this.props.iidd);
		cvs.width=widthlength;
		cvs.height = 80;
		var ctx=cvs.getContext("2d");
			ctx.beginPath();
			ctx.arc(30,40,20,0,360);
			ctx.strokeStyle="white";
			ctx.lineWidth=2;
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(widthlength-30,40,20,0,360);
			ctx.strokeStyle="white";
			ctx.lineWidth=2;
			ctx.stroke();
			
			ctx.beginPath();
			ctx.arc(widthlength/2,40,30,0,360);
			ctx.strokeStyle="white";
			ctx.lineWidth=2;
			ctx.stroke();

			ctx.font = "18px Courier New";
			ctx.fillStyle = "white";
			ctx.fillText(_this.props.mingzileft, widthlength/2-110, 65);
			ctx.fillText(_this.props.mingziright, widthlength/2+40, 65);
			ctx.font = "25px Courier New";

			ctx.beginPath();
			ctx.strokeStyle="white";
			ctx.moveTo(widthlength/2-40,40);
			ctx.lineTo(60,40);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(widthlength/2+40,40);
			ctx.lineTo(widthlength-60,40);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.strokeStyle="white";
			ctx.moveTo(70,35);
			ctx.lineTo(60,40);
			ctx.lineTo(70,45);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(widthlength-70,35);
			ctx.lineTo(widthlength-60,40);
			ctx.lineTo(widthlength-70,45);
			ctx.stroke();
			
		var circler=0;
		var flag=0;
		var flagtwo=0;
		var flagthree=0;
		this.refs.cvs.addEventListener("touchstart",function(e){
			flag=1;
			let length=e.touches[0].clientX;
			if(length>=widthlength/2-30 && length<=widthlength/2+30){
				flagthree=1;
			}else{
				flagthree=0;
			}
		},false);

		
		this.refs.cvs.addEventListener("touchmove",function(e){
			e.preventDefault();
			if(flag==1 && flagthree==1){
				ctx.clearRect(0,0,widthlength,100);
				circler=e.touches[0].clientX;
				ctx.beginPath();
				ctx.arc(circler,40,30,0,360);
				ctx.strokeStyle="white";
				ctx.lineWidth=2;
				ctx.stroke();
				if(ctx.isPointInPath(10,40)==true){
					flagtwo=1;
				}
				if(ctx.isPointInPath(widthlength-10,40)==true){
					flagtwo=2;
				}
				if(circler>40 && circler<widthlength-40){
					flagtwo=0;
				}

				ctx.beginPath();
				ctx.arc(30,40,20,0,360);
				ctx.strokeStyle="white";
				ctx.lineWidth=2;
				ctx.stroke();

				ctx.beginPath();
				ctx.arc(widthlength-30,40,20,0,360);
				ctx.strokeStyle="white";
				ctx.lineWidth=2;
				ctx.stroke();

				ctx.font = "18px Courier New";
				ctx.fillStyle = "white";
				ctx.fillText(_this.props.mingzileft, widthlength/2-110, 65);
				ctx.fillText(_this.props.mingziright, widthlength/2+40, 65);
				ctx.font = "25px Courier New";

				ctx.beginPath();
				ctx.strokeStyle="white";
				ctx.moveTo(widthlength/2-40,40);
				ctx.lineTo(60,40);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(widthlength/2+40,40);
				ctx.lineTo(widthlength-60,40);
				ctx.stroke();
				
				ctx.beginPath();
				ctx.strokeStyle="white";
				ctx.moveTo(70,35);
				ctx.lineTo(60,40);
				ctx.lineTo(70,45);
				ctx.stroke();

				ctx.beginPath();
				ctx.moveTo(widthlength-70,35);
				ctx.lineTo(widthlength-60,40);
				ctx.lineTo(widthlength-70,45);
				ctx.stroke();
			}
		});
		this.refs.cvs.addEventListener("touchend",function(e){
			flagthree=0;
			if(flagtwo==1){
				let add=_this.props.dizhileft;
				var router = _this._reactInternalInstance._context.router;
				router.replace(add);
			}
			if(flagtwo==2){
				let add=_this.props.dizhiright;
				var router = _this._reactInternalInstance._context.router;
				router.replace(add);
			}
			ctx.clearRect(0,0,widthlength,100);
			
			ctx.beginPath();
			ctx.arc(30,40,20,0,360);
			ctx.strokeStyle="white";
			ctx.lineWidth=2;
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(widthlength-30,40,20,0,360);
			ctx.strokeStyle="white";
			ctx.lineWidth=2;
			ctx.stroke();
			
			ctx.beginPath();
			ctx.arc(widthlength/2,40,30,0,360);
			ctx.strokeStyle="white";
			ctx.lineWidth=2;
			ctx.stroke();

			ctx.font = "18px Courier New";
			ctx.fillStyle = "white";
			ctx.fillText(_this.props.mingzileft, widthlength/2-110, 65);
			ctx.fillText(_this.props.mingziright, widthlength/2+40, 65);
			ctx.font = "25px Courier New";

			flag=0;

			ctx.beginPath();
			ctx.strokeStyle="white";
			ctx.moveTo(widthlength/2-40,40);
			ctx.lineTo(60,40);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(widthlength/2+40,40);
			ctx.lineTo(widthlength-60,40);
			ctx.stroke();
			
			ctx.beginPath();
			ctx.strokeStyle="white";
			ctx.moveTo(70,35);
			ctx.lineTo(60,40);
			ctx.lineTo(70,45);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(widthlength-70,35);
			ctx.lineTo(widthlength-60,40);
			ctx.lineTo(widthlength-70,45);
			ctx.stroke();
		});	
	}
	render(){

		let _this=this;
		return(
			<canvas className="canvas" id={_this.props.iidd} ref="cvs"></canvas>
		)
	}
}

export default PmjsCPT;