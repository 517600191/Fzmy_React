import Process  from '../api/process.js';
	var fzdtarr=[];
	var flfwarr=[];
	var flfwbrr=[];
	var pfjyarr=[];
	var pfwharr=[];
	fzdtarr.length=5;
	flfwarr.length=5;
	flfwbrr.length=5;
	pfjyarr.length=5;
	pfwharr.length=5;

	for(var i=1;i<6;i++){
		(function(ii){
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/Law/getLawNews.action",
				options:{
					"limit":"20",
					"offset":"0",
					"menuid":ii,
					"name":"houselist"
				},
				headers:{},
				callback:function(data){
					let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
					fzdtarr[ii-1]=aa.results;
				}
			});
			process.push();
		})(i)
	}

	for(var i=0;i<5;i++){
		if(i<3){
			(function(ii){
				let process = new Process({
					"url":"http://www.myflfw.com/law/App/mediaMa/AppMediaList.action",
					options:{
						"limit":"20",
						"offset":"0",
						"menuid":ii+1,
						"name":"houselist"
					},
					headers:{},
					callback:function(data){
						let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
						pfwharr[ii]=aa.results;
					}
				});
				process.push();
			})(i)
		}else if(i==3){
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/mediaMa/AppMediaList.action",
				options:{
					"limit":"20",
					"offset":"0",
					"menuid":5,
					"name":"houselist"
				},
				headers:{},
				callback:function(data){
					let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
					pfwharr[3]=aa.results;
				}
			});
			process.push();
		}else if(i==4){
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/mediaMa/AppMediaList.action",
				options:{
					"limit":"20",
					"offset":"0",
					"menuid":6,
					"name":"houselist"
				},
				headers:{},
				callback:function(data){
					let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
					pfwharr[4]=aa.results;
				}
			});
			process.push();
		}
	}

	for(var i=1;i<6;i++){
		(function(ii){
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/Ser/getOrgs.action",
				options:{
					"limit":"1000",
					"offset":"0",
					"menuid":ii,
					"name":"houselist"
				},
				headers:{},
				callback:function(data){
					let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
					flfwarr[ii-1]=aa.results;
				}
			});
			process.push();
		})(i)
	}

	for(var i=1;i<6;i++){
		(function(ii){
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/Ser/getServiceStaffs.action",
				options:{
					"limit":"3000",
					"offset":"0",
					"menuid":ii+6,
					"name":"houselist"
				},
				headers:{},
				callback:function(data){
					let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
					flfwbrr[ii-1]=aa.results;
				}
			});
			process.push();
		})(i)
	}

	for(var i=0;i<5;i++){
		if(i<3){
			(function(ii){
				let process = new Process({
					"url":"http://www.myflfw.com/law/App/caseMa/getOneMenusAllNews.action",
					options:{
						"onemenuId":ii+1,
						"name":"houselist"
					},
					headers:{},
					callback:function(data){
						let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
						pfjyarr[ii]=aa;
						console.log(pfjyarr);		
					}
				});
				process.push();
			})(i)
		}else if(i==3){
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/caseMa/getOneMenusAllNews.action",
				options:{
					"onemenuId":5,
					"name":"houselist"
				},
				headers:{},
				callback:function(data){
					let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
					pfjyarr[3]=aa;
					console.log(pfjyarr);		
				}
			});
			process.push();
		}else if(i==4){
			let process = new Process({
				"url":"http://www.myflfw.com/law/App/caseMa/getAdministrationMenu.action",
				options:{
					"name":"houselist"
				},
				headers:{},
				callback:function(data){
					let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
					pfjyarr[4]=aa;
					console.log(pfjyarr);	
				}
			});
			process.push();
		}
	}
// setInterval(function(){

// 	let process = new Process({
// 		"url":"http://www.myflfw.com/law/App/Ser/getOrgs.action",
// 		options:{
// 			"limit":"10",
// 			"offset":"0",
// 			"menuid":'1',
// 			"name":"houselist"
// 		},
// 		headers:{},
// 		callback:function(data){
// 			let aa = JSON.parse(data.slice(0,-1).slice("houselist".length+1));
// 			arr.push(aa.results);
// 			arr.shift();
// 			console.log(arr);		
// 		}
// 	});
// 	process.push();
// },5000);
var RequestData = [
	fzdtarr,pfwharr,flfwarr,flfwbrr,pfjyarr
];

export default RequestData;