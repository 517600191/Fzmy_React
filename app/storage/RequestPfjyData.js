import Process  from '../api/process.js';
	var pfjyarr=[];
		pfjyarr.length=5;
	if(localStorage.PfjyData!=undefined){
		var b = localStorage.getItem('PfjyData');
		var c = JSON.parse(b);    // 将 JSON 字符串转成对象
		var time = c.time;
		var date = c.date;
		if ((parseInt(time) + parseInt(date)) <  Date.parse(new Date())) {
		    // 如果 date + time 小于当前时间的时间戳，说明已经超过3600秒的时效时间
		    localStorage.removeItem('PfjyData');
		}else{
		    // 如果 date + time 大于当前时间戳，说明没过期
		    // var d = c.a;    // 之前保存的变量值
		    // 然后要怎么用就怎么用
		    pfjyarr=JSON.parse(localStorage.getItem('PfjyData')).pfjyarr;
		}
		
	}

	if(localStorage.PfjyData==undefined){
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
								var obj = new Object();
								obj.pfjyarr = pfjyarr;                // 要保存的变量
								obj.time = 1000*60*10;            // 过期时间
								obj.date = Date.parse(new Date());       // 保存变量时的那个时间点，这里以时间戳为例
							var objString = JSON.stringify(obj);    // 由于 localStorage 只能保存字符串内容，所以这里要先把对象转换成 JSON 字符串
							localStorage.setItem('PfjyData',objString);	

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
						var obj = new Object();
							obj.pfjyarr = pfjyarr;                // 要保存的变量
							obj.time = 1000*60*10;            // 过期时间
							obj.date = Date.parse(new Date());       // 保存变量时的那个时间点，这里以时间戳为例
						var objString = JSON.stringify(obj);    // 由于 localStorage 只能保存字符串内容，所以这里要先把对象转换成 JSON 字符串
						localStorage.setItem('PfjyData',objString);			
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
						var obj = new Object();
							obj.pfjyarr = pfjyarr;                // 要保存的变量
							obj.time = 1000*60*10;            // 过期时间
							obj.date = Date.parse(new Date());       // 保存变量时的那个时间点，这里以时间戳为例
						var objString = JSON.stringify(obj);    // 由于 localStorage 只能保存字符串内容，所以这里要先把对象转换成 JSON 字符串
						localStorage.setItem('PfjyData',objString);	
					}
				});
				process.push();
			}
		}
	}

	
	var RequestPfjyData = {
		pfjyarr
	}

export default RequestPfjyData;