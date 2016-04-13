import React from 'react';
import ReactDOM from 'react-dom';
import  {List,Input,Button,ListItem,Modal,ModalTrigger} from 'amazeui-react';
import Process  from '../api/process.js';
class ZxlslbCPT extends React.Component{
	constructor(props){
	  super(props);
	  this.state={
	  laws : [],
    tre: "",
    id:"",
	  estatus:"",
    trequirement:""
	  }
  }

  componentWillMount(){
  	let that = this;
    let process = new Process({
    	"url":"http://1.fzmy1.applinzi.com/index.php/Home/law/queryLawByEstatus?",
     	options:{
       	"name":"laws",
        "estatus":"'在线'",
        "callback":"laws"
    	},
      headers:{},
      callback:function(data){
    	  data = JSON.parse(data.slice(0,-1).slice("laws".length+1));
      	that.setState({
      	laws: data.rows
    	  });
      }
    });
    process.push();
  }

  /*专家咨询按键的点击事件，实现选择专家进行咨询页面跳转*/
  handleClick(e){
    let ilid = e.target.value;
    let add="/kstw?ilid="+ilid+"?estatus='专家咨询'"+"&"+this.props.yz;
    var router = this._reactInternalInstance._context.router;
    router.replace(add);
  }

  handleModal(e){
    let that = this;
    let newid = e.target.value;
   let process = new Process({
        "url":"http://1.fzmy1.applinzi.com/index.php/Home/law/queryLawById?",
        options:{
          "name":"laws",
          "id":newid,
          "callback":"tre"
        },
        headers:{},
        callback:function(data){
          data = JSON.parse(data.slice(0,-1).slice("tre".length+1));
          that.setState({
            tre: data.rows,
            trequirement:data.rows[0].trequirement,
            vname:data.rows[0].vname
          });         
        }
      });
      process.push();
  }

  render(){
    let _this = this;
    var modal = (
      <Modal 
        type="popup" 
        title={this.state.vname} 
        className="tremodal">
          {this.state.trequirement}
      </Modal>
    );

    let law = _this.state.laws.map(function(data,index){
      return (
        <div className="zxls">
          <div className="gap"></div>        
          <p className="vname">{data.vname}</p>
            <ModalTrigger modal={modal}>
              <div onClick={_this.handleModal.bind(_this)}>
                <ListItem className="trequirement" ref="id" value={data.id}>
                  {data.trequirement}
                </ListItem>
              </div>
            </ModalTrigger>
          <Button 
            amStyle="secondary" 
            ref="lawid" 
            className="zxbtn"
            amSize="xs"
            value={data.id} 
            onClick={_this.handleClick.bind(_this)}>
            咨询
          </Button>
        </div>
      );
    });
    
    return (
      <List static className="zxls">
      <p className="titlezx">今日在线专家</p>
        {law}
      </List>
    );
  }
}

export default ZxlslbCPT;