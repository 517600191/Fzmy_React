import Process  from '../api/process.js';
	var fzdtarr=[];
		fzdtarr.length=5;
	if(localStorage.FzdtData!=undefined){
		var b = localStorage.getItem('FzdtData');
		var c = JSON.parse(b);    // 将 JSON 字符串转成对象
		var time = c.time;
		var date = c.date;
		if ((parseInt(time) + parseInt(date)) <  Date.parse(new Date())) {
		    // 如果 date + time 小于当前时间的时间戳，说明已经超过3600秒的时效时间
		    localStorage.removeItem('FzdtData');
		}else{
		    // 如果 date + time 大于当前时间戳，说明没过期
		    // var d = c.a;    // 之前保存的变量值
		    // 然后要怎么用就怎么用
		    fzdtarr=JSON.parse(localStorage.getItem('FzdtData')).fzdtarr;
		}
		
	}

	if(localStorage.FzdtData==undefined){
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
						var obj = new Object();
							obj.fzdtarr = fzdtarr;                // 要保存的变量
							obj.time = 1000*60*10;            // 过期时间
							obj.date = Date.parse(new Date());       // 保存变量时的那个时间点，这里以时间戳为例
						var objString = JSON.stringify(obj);    // 由于 localStorage 只能保存字符串内容，所以这里要先把对象转换成 JSON 字符串
						localStorage.setItem('FzdtData',objString);
					}
				});
				process.push();
			})(i)
		}
	}
	var RequestFzdtData = {
		fzdtarr
	}

export default RequestFzdtData;