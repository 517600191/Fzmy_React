import React from 'react';
import ReactDOM from  'react-dom';
import Process  from './api/process.js';
import  { List,ListItem,Grid,AvgGrid,Sticky,Image} from 'amazeui-react';
import DayyProfile from './DayyProfile.js'
import DayyQuestionType from './DayyQuestionType.js'
import DayyContact from './DayyContact.js'
var Dayy = React.createClass({
	render(){
		return(
			<div>
				<DayyProfile  />
				
			</div>
			)
	}
})
module.exports = Dayy;