import React, {Component,} from 'react'

class ProjectCard extends Component{
    state = {
        currentPhoto: 0
    }
    next = () => {
        if(this.state.currentPhoto === this.props.item.images.images.length-1){
            this.setState({currentPhoto: 0})
        }else{
            this.setState({currentPhoto: this.state.currentPhoto+1 })
        }
    }
    render(){
        return(
            <li key={this.props.item.key} className={this.props.item.title}>
                    <div className='project'>
                        <h2>{this.props.item.title}</h2>
                        <p>{this.props.item.description}</p>
                        <h3>Technologies:</h3>
                        <p>{this.props.item.tech}</p>
                        <h3>Links:</h3>
                        <a href={this.props.item.links.live} target='blank'>Live Page</a><br></br>
                        <a href={this.props.item.links.repo} target='blank'>GitHub Repo</a>
                    </div>
                    <div className='image'>
                        <img src={this.props.item.images.images[`${this.state.currentPhoto}`]} alt={this.props.item.images.alt} onClick={(e) =>this.next(this.props.item)}/>
                        <p className='caption' onClick={(e) =>this.next(this.props.item)}>click for next photo ({this.state.currentPhoto+1}/{this.props.item.images.images.length})</p>
                    </div>
                </li>
        )
    }
}

export default ProjectCard