import Process  from '../api/process.js';
	var pfwharr=[];
		pfwharr.length=5;
	if(localStorage.PfwhData!=undefined){
		var b = localStorage.getItem('PfwhData');
		var c = JSON.parse(b);    // 将 JSON 字符串转成对象
		var time = c.time;
		var date = c.date;
		if ((parseInt(time) + parseInt(date)) <  Date.parse(new Date())) {
		    // 如果 date + time 小于当前时间的时间戳，说明已经超过3600秒的时效时间
		    localStorage.removeItem('PfwhData');
		}else{
		    // 如果 date + time 大于当前时间戳，说明没过期
		    // var d = c.a;    // 之前保存的变量值
		    // 然后要怎么用就怎么用
		    pfwharr=JSON.parse(localStorage.getItem('PfwhData')).pfwharr;
		}
		
	}

	if(localStorage.PfwhData==undefined){
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
						pfwharr[ii-1]=aa.results;
						var obj = new Object();
							obj.pfwharr = pfwharr;                // 要保存的变量
							obj.time = 1000*60*10;            // 过期时间
							obj.date = Date.parse(new Date());       // 保存变量时的那个时间点，这里以时间戳为例
						var objString = JSON.stringify(obj);    // 由于 localStorage 只能保存字符串内容，所以这里要先把对象转换成 JSON 字符串
						localStorage.setItem('PfwhData',objString);
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
						var obj = new Object();
							obj.pfwharr = pfwharr;                // 要保存的变量
							obj.time = 1000*60*10;            // 过期时间
							obj.date = Date.parse(new Date());       // 保存变量时的那个时间点，这里以时间戳为例
						var objString = JSON.stringify(obj);    // 由于 localStorage 只能保存字符串内容，所以这里要先把对象转换成 JSON 字符串
						localStorage.setItem('PfwhData',objString);
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
					var obj = new Object();
						obj.pfwharr = pfwharr;                // 要保存的变量
						obj.time = 1000*60*10;            // 过期时间
						obj.date = Date.parse(new Date());       // 保存变量时的那个时间点，这里以时间戳为例
					var objString = JSON.stringify(obj);    // 由于 localStorage 只能保存字符串内容，所以这里要先把对象转换成 JSON 字符串
					localStorage.setItem('PfwhData',objString);
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
					var obj = new Object();
						obj.pfwharr = pfwharr;                // 要保存的变量
						obj.time = 1000*60*10;            // 过期时间
						obj.date = Date.parse(new Date());       // 保存变量时的那个时间点，这里以时间戳为例
					var objString = JSON.stringify(obj);    // 由于 localStorage 只能保存字符串内容，所以这里要先把对象转换成 JSON 字符串
					localStorage.setItem('PfwhData',objString);
				}
			});
			process.push();
		}
	}
	}
	var RequestPfwhData = {
		pfwharr
	}

export default RequestPfwhData;