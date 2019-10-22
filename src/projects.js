import React, {Component,} from 'react'
import projects from './projectStore'
import ProjectCard from './projectcard'

class MyProjects extends Component {
    render(){
        function ProjectList(projects){
            return(
                projects.map(item => <ProjectCard item={item} key={item.key}/>)
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