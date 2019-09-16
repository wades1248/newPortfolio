import React, {Component} from 'react'

class Contact extends Component{
    render(){
        return(
            <footer  className="contact" id='contact'>
				<address><h2>CONTACT INFO:</h2>
					<ul>
						<li key='1'>Phone: <a href="tel:+1-513-487-8064">513-487-8064</a></li>
						<li key='2'>email: <a href="mailto:wades1248@gmail.com>wades1248@gmail.com" target='blank'>wades1248@gmail.com</a></li>
						<li key='3'>github: <a href="https://github.com/wades1248" target="blank">https://github.com/wades1248</a></li>
						<li key='4'>linkedin: TBA</li>
					</ul>
				</address>
			</footer>
        )
    }
}
export default Contact