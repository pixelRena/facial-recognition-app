import React from 'react';

const Footer = () => {
	return (
		<div className='footer'>
			<p className="text-uppercase black link">© <a 
				href='https://github.com/jsxNeko/facial-recognition-app'
				style={{'textDecoration':'none'}}>
				Serenuy/@github</a> 
			<script>document.write(new Date().getFullYear())</script>
			</p>
		</div>
		);
}

export default Footer;
