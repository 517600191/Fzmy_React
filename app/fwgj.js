import React from 'react';
import Headerbar from './api/Headerbar.js';
import Process  from './api/process.js';
import  { List,ListItem,Grid,AvgGrid,Sticky,Image,Divider,ModalTrigger,Modal,Col,Selected,ButtonToolbar,Button,Input} from 'amazeui-react';

class Fwgj extends React.Component{
	render(){
		return(
			<div className="fwgj-bkg">
				<Headerbar index="法务管家" link='/fwgj' prev={[{link:'/',icon:'chevron-left'}]}  />
				<div className="fwgj-logo">
				</div>
				<div className="fwgj-title-cont text">
					<div className="text-position">
						<h1>法务管家 为您管好法律事务</h1>
						<h4 className="fwgj-h4">专业 及时 低成本</h4>
						<p className="fwgj-p">您还在为每年耗费数万元聘请法律顾问或是为庞大的法务部门支出而苦恼吗?</p>
						<hr className="hr1"/>
						<h3>法务风险防控,管家为您全程护航</h3>
						<p>全面提供法律事务的<span className="fwgj-span">事前预防、事中控制、事后补救</span>服务</p>
						<AvgGrid sm={2} className="avg-ul">
							<li className="li-bkg-1"><p>日常经营管理法律事务</p></li>
							<li className="li-bkg-1"><p>股权管理并购设立法律事务</p></li>
							<li className="li-bkg-2"><p>董事会、监事会、股东会决策法律事务</p></li>
							<li className="li-bkg-2"><p>合同文书起草、审核制度规范等专项服务</p></li>
							<li className="li-bkg-3"><p>催款、维权、争议、诉讼事务管理</p></li>
							<li className="li-bkg-3"><p>法律咨询、法律培训、法律方案定制服务</p></li>
							<li className="li-bkg-4"><p>企业法律风险评估</p></li>
							<li className="li-bkg-4"><p>危机公关、公共关系处理咨询服务</p></li>
						</AvgGrid>
						<hr className="hr1"/>
						<div className="vs-img">
						</div>
						<h2 className="sy-h2">事业稳健发展，需要法律专家</h2>
						<h2 className="net-h2">认准“互联网+”法务管家</h2>
					</div>
					<ul className="last-ul">
						<li>
							<span>专注</span>
							<p>专注互联网+、高新技术、O2O线上线下服务体系;专注法律事务服务。</p>
						</li>
						<hr className="last-ul-hr"/>
						<li>
							<span>专业</span>
							<p>庞大的法务管家团队+精湛的专业律师团队+高端的法学专家团队+管饭的法律实务团队。</p>
						</li>
						<hr className="last-ul-hr"/>
						<li>
							<span>全面</span>
							<p>全面提供非诉法法律事务，诉讼业务;提供能够全面的经营管理，风险防控法律事务。</p>
						</li>
						<hr className="last-ul-hr"/>
						<li>
							<span>快捷</span>
							<p>微信、网络、APP、电话全渠道入口;线上线下互动融合平台，专业值守，随时随地，更高效，更及时，更方面，更省事！</p>
						</li>
						<hr className="last-ul-hr"/>
					</ul>

				</div>


			</div>
			)
	}
	
}
export default Fwgj;