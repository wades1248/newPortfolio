import React, {Component,} from 'react'
import projects from './projectStore'

class MyProjects extends Component {
    render(){
        function ProjectList(projects){
            return(
                projects.map(item => Display(item))
            )
        }
        function Display(item){
            return(
                <li key={item.key} className={item.title}>
                    <div className='project'>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <h3>Technologies:</h3>
                        <p>{item.tech}</p>
                        <h3>Links:</h3>
                        <a href={item.links.live} target='blank'>Live Page</a><br></br>
                        <a href={item.links.repo} target='blank'>GitHub Repo</a>
                    </div>
                    <div className='image'>
                        <img src={item.images.images[0]} alt={item.images.alt}/>
                    </div>
                    <div className='image extra'>
                        <img src={item.images.images[1]} alt={item.images.alt}/>
                    </div >
                    <div className ='imgae extra'>
                        <img src={item.images.images[2]} alt={item.images.alt}/>
                    </div>
                </li>
            )
        }
        return(
            <div className='projects' id='projects'>
                <h1>Projects:</h1>
                <ul>
                    {ProjectList(projects)}
                </ul>
            </div>
        )
    }
}
export default MyProjects;