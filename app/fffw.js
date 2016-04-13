import React from 'react';
import Headerbar from './api/Headerbar.js';

var Fffw = React.createClass({
	
	render:function(){
		return (
			<div>
				<Headerbar index="律师帮帮你" link='/fffw' prev={[{link:'/',icon:'chevron-left'}]}  />
				
			</div>
		);
	}
});
module.exports = Fffw;