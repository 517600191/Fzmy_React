/**
 *   请求服务接口
 *   @author [guotingchaopr@gmail.com]
 */
'use strict';
import qs  from "qs";
export default class Process{
	constructor(params){
		this.url = params.url;
		this.method = params.method || "GET";
		this.callback = params.callback;
		this.params = qs.stringify(params.options);
		this.headers  = params.headers;
	}
	push(){
		if(!(this.url|| this.callback)){
			throw new Error("孩子,首先必须确认 url 和 callback 属性有值!");
			return;
		}
		let _callback = this.callback;
		function getajaxHttp() {
   	 		var xmlHttp;
    		try {
        	// Firefox, Opera 8.0+, Safari
        		xmlHttp = new XMLHttpRequest();
       		} catch (e) {
            	// Internet Explorer
	            try {
	                xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
	            } catch (e) {
	            	try {
	               	 	xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	            	} catch (e) {
	                	alert("您的浏览器不支持AJAX！");
	                	return false;
	            	}
        		}
   	 		}
    		return xmlHttp;
		}
/**
 * 发送ajax请求
 * url--url
 * methodtype(post/get)
 * con (true(异步)|false(同步))
 * parameter(参数)
 * functionName(回调方法名，不需要引号,这里只有成功的时候才调用)
 * (注意：这方法有二个参数，一个就是xmlhttp,一个就是要处理的对象)
 * obj需要到回调方法中处理的对象
 */
		function ajaxrequest(url,methodtype,con,parameter,functionName,obj){
   		 	var xmlhttp=getajaxHttp();
    		xmlhttp.onreadystatechange=function(){
        		if(xmlhttp.readyState==4){
            	//HTTP响应已经完全接收才调用
            		if(xmlhttp.status == 200){
            			try{
            				_callback(xmlhttp.responseText);
						}catch(err){
            				_callback(null)
            			}
           	 		}
            		functionName(xmlhttp,obj);
       		 	}
    		};
		    xmlhttp.open(methodtype,url,con);
		    xmlhttp.send(parameter);
		}

		function createxml(){
		    var xml="<user><userid>asdfasdfasdf<\/userid><\/user>";
		    return xml;
		}

		function createjson(){
		    var json={id:0,username:"好人"};
		    return json;
		}
		function c(){
		}
		ajaxrequest("http://127.0.0.1:8081?link="+this.url+(this.method=="POST"?"":"&"+this.params),"get",true,createjson(),c,document);
	}
}