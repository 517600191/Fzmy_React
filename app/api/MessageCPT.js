import React from 'react';
import ReactDOM from 'react-dom';
import  {List,ListItem} from 'amazeui-react';
import Headerbar from '../api/Headerbar.js';
import Process  from '../api/process.js';
class MessageCPT extends React.Component{
  constructor(props){
    super(props);
    this.state={
    lists : [],
    newlists:[],
    count:"",
    pages:[]
    }
  }

  componentWillMount(){   
    let that = this;
    let process = new Process({
      "url":"http://1.fzmy1.applinzi.com/index.php/Home/message/queryAllMessage?",
      options:{
        "name":"lists",
        "callback":"lists",
      },
      headers:{},
      callback:function(data){
        data = JSON.parse(data.slice(0,-1).slice("lists".length+1));
        var newlists = [];
        for(var i=0;i<(data.rows.count);i++){
          newlists[i]=data.rows[i];
        }
        that.setState({
          lists: newlists,
          count:data.rows.count
        });
      }
    });
   process.push();
  }

  /*实现帖子详情的路由跳转*/
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

  render(){
    let _this = this;
    let lis = _this.state.lists.map(function(data,index){
      return (
        <div key={index} 
             ref="iid" 
             onClick={_this.handleClick.bind(_this)}>
          <p className="qsstatus">{data.estatus}</p>
          <span className="qsspan1">{data.id}</span>
          <p className="qstitle">{data.vtitle}</p>
          <ListItem id="qscontent" truncate>
            {data.tcontent}
          </ListItem>
          <div className="gap"></div>
        </div>
      );
    });
    
    return (
      <div>
        <Headerbar index="咨询列表" 
          prev={[{link:'/',icon:'chevron-left'}]}  />
        <List static>
          {lis}
        </List>
      </div>
    );
	}
}

export default MessageCPT;