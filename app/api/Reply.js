import React from 'react';
import ReactDOM from 'react-dom';
import  {Input,ModalTrigger,Modal,Icon,Button} from 'amazeui-react';
import Process  from '../api/process.js';
class Reply extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value : "",
      isActive:false,
      isAction:false,
      modalStr:"",
      modalString:"",
      imid:"",
      uname:localStorage.userName
    }
  }

  /*获取回复框的内容*/
  changevalue(e){
    let that = this; 
    that.setState({
      value:e.target.value
    });
  
  }

  /*提交回复*/
  handleSubmit(e){
    e.preventDefault();
    let imid = window.location.href.split('=')[1].split('&_')[0];
    console.log(imid);
    let that = this;
    if(!that.state.uname || that.state.uname == ""){
      that.setState({
        modalStr:"请登录"
      });
    }else{
      let process = new Process({
        "url":"http://1.fzmy1.applinzi.com/index.php/Home/reply/addReply",
        options:{
          "imid":imid,
          "tcontent":this.state.value,
          "iuid":localStorage.userId,
          "callback":"lists",
          "uname":this.state.uname
        },
        headers:{},
        callback:function(data){
          data = JSON.parse(data.slice(0,-1).slice("lists".length+1));
          console.log(data.success);
          if(data.success == true){
            that.setState({
              imid:imid,
              modalStr:"回复成功",
              isActive:true
            });
          }else{
             that.setState({
              modalStr:"回复失败，请重试",
              isActive:true
            })
          }
        }
      });
      console.log(1);
      process.push();
    }
  } 

  /*提交回复后的弹出框的点击事件*/
  handleClick(e){
    e.preventDefault();
    if (this.state.modalStr == "请登录") {
      let add="/login";
      var router = this._reactInternalInstance._context.router;
      router.replace(add);
    }else{
      window.location.reload();
    }
  }

modalRender(){
  var icon  = React.createElement(Icon,{
    id:"replyplane",
    icon:"paper-plane",
    onClick:this.handleSubmit.bind(this)
  });

  var modal = React.createElement(Modal,{
    type:"alert",
    title:"提示",
    onClick:this.handleClick.bind(this)
  },this.state.modalStr);

  var modalT = React.createElement(
       ModalTrigger,
       {modal:modal},
       icon
  );
  return modalT;
}
  render(){
    return (
      <div id="replydiv">
         <input  
            id="replyinput" 
            placeholder="添加回复" 
            value={this.state.value} 
            onChange={this.changevalue.bind(this)} /> 
         {this.modalRender()} 
      </div>    
    )
  }
}

export default Reply;