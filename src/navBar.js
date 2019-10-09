import React, {Component} from 'react'

class NavBar extends Component{
    state ={
        active: false
    }
    activate = event=> {
        if(this.state.active === true){
            this.setState({active: false})
        }else{
        this.setState({active: true})
        }
    }
    render(){
        function showMenu(state, activate){
            if(state.active === true){
                return(
                    <div className="menu">
                        <a href='#bio' onClick={activate}>About</a>
                        <a href='#projects' onClick={activate}>Projects</a>
                        <a href='#contact' onClick={activate}>Contact</a>
                    </div>
                )
            }else{
                return(
                    null
                )
            }
        }
        return(
            <div>
                <div className='nav'>
                    <div className='burger' onClick={this.activate}>
                        <span></span>
				        <span></span>
				        <span></span>
                    </div>
                </div>
                {showMenu(this.state, this.activate)}
            </div>
        )
    }
}
export default NavBar