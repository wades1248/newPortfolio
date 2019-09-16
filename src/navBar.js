import React, {Component} from 'react'

class NavBar extends Component{
    state ={
        active: false
    }
    activate = event=> {
        event.preventDefault()
        if(this.state.active === true){
            this.setState({active: false})
        }else{
        this.setState({active: true})
        }
    }
    render(){
        function showMenu(state){
            if(state.active === true){
                return(
                    <div className="menu">
                        <a href='#bio'>About</a><br></br>
                        <a href='#projects'>Projects</a><br></br>
                        <a href='#contact'>Contact</a><br></br>
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
                {showMenu(this.state)}
            </div>
        )
    }
}
export default NavBar