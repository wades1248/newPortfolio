import React, {Component} from 'react'

class Contact extends Component{
    render(){
        return(
            <footer  className="contact" id='contact'>
				<address><h2>CONTACT INFO:</h2>
					<ul>
						<li key='1'>Phone: <a href="tel:+1-513-487-8064">513-487-8064</a></li>
						<li key='2'>email: <a href="mailto:wades1248@gmail.com>wades1248@gmail.com" target='blank'>wades1248@gmail.com</a></li>
					</ul>
					<div className="logoBox">
						<a className="logoLink" href="https://github.com/wades1248" target="blank"><img alt="github logo" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a>
						<a className="logoLink" href='https://www.linkedin.com/in/spencer-wade-a7914a185/'><img alt= 'likned in logo' src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'/></a>
					</div>
				</address>
			</footer>
        )
    }
}
export default Contact