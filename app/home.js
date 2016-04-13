import React from 'react';
import { Slider,Header,AvgGrid,Button,Icon,Grid,Col,ListItem,List,Modal,ModalTrigger} from 'amazeui-react';
import NavBarCPT from './api/NavBarCPT.js';
import Headerbar from './api/Headerbar.js';
import Process  from './api/process.js';
import ThemeCPT from './api/ThemeCPT.js';
import PmjsCPT from './api/PmjsCPT.js';
var flagbell=0;
class Home extends React.Component{
 	constructor(props){
		super(props);
		this.state={
			lunbo : [],
			flag:false,
			start:0,
			count:1,
			list:[],
			lists : [],
		    newlists:[],
		    pages:[],
		}
	}
	componentWillMount(){
		if(localStorage.userId==undefined){
			localStorage.userId=-1;
		}
		let that = this;
		let process = new Process({
			"url":"http://www.myflfw.com/law/App/homeMa/AppHomeImg.action",
			options:{
				"name":"lunbo",
				"callback":"1"
			},
			headers:{},
			callback:function(data){
				data = JSON.parse(data.slice(0,-1).slice("lunbo".length+1));
				that.setState({
					lunbo: data
				});
			}
		});
		process.push();
		this.getNews();


	}

	componentDidMount(){
		let that = this;
	    let process = new Process({
	      "url":"http://1.fzmy1.applinzi.com/index.php/Home/message/queryAllMessage?",
	      options:{
	        "name":"lists",
	        "callback":"lists",
	        "uid":localStorage.userId,
	      },
	      headers:{},
	      callback:function(data){
	        data = JSON.parse(data.slice(0,-1).slice("lists".length+1));
	        var jslength=0;
	        for(var js2 in data.rows){
	          jslength++;
	        }
	        var newlists = [];
	        for(var i=0;i<jslength-1;i++){
	          newlists[i]=data.rows[i];
	        }
	        that.setState({
	          lists: newlists,
	        });
	      }
	    });
	   process.push();

	   flagbell=0;
		document.getElementsByClassName("am-icon-bell")[0].onclick=function(){
			if(flagbell==0){
				document.getElementsByClassName("homecebianOne")[0].className="amr-main homecebianTwo";
				flagbell=1;
				setTimeout(function(){
					document.getElementsByClassName("cebianlanthemeone")[0].className="cebianlanthemetwo";
				},500);
			}else if(flagbell==1){
				document.getElementsByClassName("homecebianTwo")[0].className="amr-main homecebianOne";
				flagbell=0;
				document.getElementsByClassName("cebianlanthemetwo")[0].className="cebianlanthemeone";
			}
		};
	}
	
	routerto(e){		
		let link = e.target.parentElement.dataset.link;
		var router = this._reactInternalInstance._context.router;
					router.replace(link);
	}
	getNews(){
		let sendCount = this.state.count;
		let sendCount2 = sendCount+1;
		this.setState({
			count:sendCount2
		});
		let start = sendCount2;
		 let that = this;
		 let process = new Process({
			"url":"http://1.fzmy1.applinzi.com/index.php/Home/Message/querySomeMessage",
			options:{
				"start":1,
				"limit":start,
				"callback":"news",
			},
			headers:{},
			callback:function(data){
				
				data = JSON.parse(data.slice(0,-1).slice("news".length+1));
				var results = [];
				for(var i=0;i<start;i++){
					results[i] = data.rows[i];
				}
				that.setState({
					list: results,
					flag :true
					});
			} 
		});
		process.push();
	}
	slideDownStep1(dist){  // dist 下滑的距离，用以拉长背景模拟拉伸效果 
		var _this=this;
        var slideDown1 = document.getElementById("slideDown1");
	        slideDown1.style.display = "block"; 
	        slideDown1.style.height = (parseInt("20px") - dist) + "px";
	    setTimeout(function(){
	    	slideDown1.style.display = "none"; 
	        slideDown1.style.height = "20px";
	        _this.getNews();
	    },2000); 
    } 
    //第二步：下拉，然后松开， 
    slideDownStep2(){  
        var slideDown1 = document.getElementById("slideDown1"); 
	        slideDown1.style.display = "none"; 
	        slideDown1.style.height = "20px"; 
        //刷新数据 
        //location.reload(); 
    } 
    //第三步：刷新完成，回归之前状态 
    slideDownStep3(){  
        var slideDown1 = document.getElementById("slideDown1");
        	slideDown1.style.display = "none"; 
    } 

    
    touchStart(event){ 
        //var touch = event.touches[0]; //这种获取也可以，但已不推荐使用 
			 var _start = 0;           
        var touch = event.targetTouches[0];              
            _start = touch.pageY; 
            this.setState({start:_start})        
    } 
    
    touchMove(event){ 
        var touch = event.targetTouches[0]; 
        var _end = 0;
        var _start = this.state.start;
            _end = (_start - touch.pageY); 
            //下滑才执行操作 
            if(_end > 0){ 
            	this.slideDownStep1(_end);                     
            }            

    	event.stopPropagation();
    } 

    touchEnd(event){ 
     	let _this=this;
    	event.stopPropagation();
        var _end = 0; 
        if(_end >0){  
        }else{  
            this.slideDownStep2(); 
            _this.getNews();
            //刷新成功则 
            //模拟刷新成功进入第三步                
             if(_this.state.flag){
             	_this.slideDownStep3();
             }                                              
        } 
    } 
	getNewsDetail(e){
		let id = e.target.dataset.mid;
		let add="/tzxq?imid="+id;
		var router = this._reactInternalInstance._context.router;
			router.replace(add);
	}
	handleClick (e){
	    var aa = e.target.children[1];
	    if(aa){
	      var imid = e.target.children[1].textContent;
	    }else{
	      var imid = e.target.parentNode.children[1].textContent;
	    }
	    let add="/tzxq?imid="+imid;
	    var router = this._reactInternalInstance._context.router;
	    router.replace(add);    
	}
	componentDidUpdate(){

	}
    
    zhuxiao(){
    	localStorage.removeItem("userName");
    	localStorage.userId=-1;
    	window.location.reload();
    }
    onConfirm(aa){
    	var arrshanchuid = document.getElementsByClassName("qsspan1");
		for(var i=0;i<arrshanchuid.length;i++){
			if(arrshanchuid[i].textContent==aa){
				arrshanchuid[i].parentElement.remove();
			}
		}
    	let that = this;
		let process = new Process({
			"url":"http://1.fzmy1.applinzi.com/index.php/Home/Message/updateMessageDelet",
			options:{
				"id":aa,
			},
			headers:{},
			callback:function(data){
				
			}
		});
		process.push();
		

    }
    onCancel(aa){

    }

	render(){
		let _this = this;
		var modal =  (function(){
            return 	<Modal 
            		  	type="alert" 
            		  	title="您已经注销" 
            		 	onClick={_this.zhuxiao.bind(_this)}>
            		</Modal>
        }());
        var modal2 =  (function(){
            return 	<Modal 
            		  	type="confirm" 
            		  	title="确认要删除这条消息吗?">
            		</Modal>
        }());
		var lubo = this.state.lunbo.map(function(data,index){
			return (
				 <Slider.Item key={index}>
			      	<img src={"http://www.myflfw.com/"+data.imgUrl} />
			    </Slider.Item>
			);
		});
		var titleStorage=localStorage.getItem('userName')||'未登录';
		var news = this.state.list.map(function(data,index){
			return (				
     				 <ListItem truncate key={index} data-mid={data.id} onClick={_this.getNewsDetail.bind(_this)}>
        				<i>{data.id}</i><b id="typename">【{data.estatus}】</b>{data.vtitle}
       				</ListItem>				
				);
		});
		let lis = _this.state.lists.map(function(data,index){
			return (
				<div key={index} ref="iid">
					<p className="qsstatus">
						{data.estatus}
						<ModalTrigger modal={modal2} onCancel={_this.onCancel.bind(_this,data.id)} onConfirm={_this.onConfirm.bind(_this,data.id)}>
							<Button className="listshanchu">删除</Button>
						</ModalTrigger>
					</p>
					<span className="qsspan1">{data.id}</span>
					<p className="qstitle" onClick={_this.handleClick.bind(_this)}>{data.vtitle}</p>
					<ListItem id="qscontent" truncate onClick={_this.handleClick.bind(_this)}>
						{data.tcontent}
					</ListItem>
					<div className="gap"></div>
				</div>
			);
		});
		return(
			 <main className="amr-main homecebianOne" >
			 	<Headerbar index = '首页' link="/" prev={[{link:'/login',title:titleStorage}]}
			 	 next={[{link:'#right-link', icon: 'bell'}]} />
				<div id="content" onTouchMove={this.touchMove.bind(this)} onTouchStart={this.touchStart.bind(this)}  onTouchEnd={this.touchEnd.bind(this)} >
					<Slider theme="c2">
		    			{lubo}
		  			</Slider>
					
	    			<PmjsCPT mingzileft={"快速提问"} mingziright={"电话热线"} dizhileft={"/kstw?ilid=0?estatus='专家咨询'"} dizhiright={"/dhrx"} iidd={"cvs_2"}/>
        			<Grid className="doc-g"  className="footer">
			  			<Col  sm={6}  data-link="/bkbt" id="data1" onClick={this.routerto.bind(this)}><Icon  className="iconsize" icon="eraser" /><span className="fontcolor">&nbsp;&nbsp;法治龙门阵</span></Col>   			
						
						<Col  sm={6}  data-link="/zjzx?yyyzzz"  id="data2" onClick={this.routerto.bind(this)}><Icon  className="iconsize" icon="user-secret" /><span className="fontcolor">&nbsp;&nbsp;专家咨询</span></Col>
	    			</Grid>
	    			<Grid className="doc-g"  className="footer">
			  			<Col  sm={6}  data-link="/fffw" id="data5" onClick={this.routerto.bind(this)}><Icon  className="iconsize" icon="heartbeat" /><span className="fontcolor">&nbsp;&nbsp;律师帮帮你</span></Col>   			
						
						<Col  sm={6}  data-link="/zxfw"  id="data6" onClick={this.routerto.bind(this)}><Icon  className="iconsize" icon="search" /><span className="fontcolor">&nbsp;&nbsp;法治地图</span></Col>
	    			</Grid>
		  		 	<PmjsCPT mingzileft={"对案预约"} mingziright={"法务管家"} dizhileft={"/dayy"} dizhiright={"/fwgj"} iidd={"cvs_3"}/>

	    			<div id="news">
	    				<div id="state">咨询动态 &nbsp;&nbsp;&nbsp;<Icon icon="navicon" /></div>
	    				<List static>{news}</List>
    				</div>
    			 	 <div id="slideDown"> 
            			<div id="slideDown1"> 
                			<p><Icon spin icon="spinner" /></p> 
            			</div>
        			</div>
    			</div>
				<NavBarCPT  index="首页" />

				<div className="cebianlanthemeone">
					<div className="am-header am-header-default cebianlanone">
						<Button amStyle="primary" className="cebianlantwo">消息中心</Button>
						<ModalTrigger modal={modal}>
							<Button amStyle="primary" className="cebianlantwo">注销</Button>
						</ModalTrigger>
					</div>
					<List static className="cebianlanthreeone">
			          {lis}
			        </List>
				</div>
			</main>
		);
	}
	
}
export default Home;