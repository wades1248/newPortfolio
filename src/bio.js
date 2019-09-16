import React, {Component} from 'react'

class Bio extends Component{
    render(){
        return(
            <div className='bio' id='bio'>
                <h1>About Me:</h1>
                <p>A future graduate from Thinkful’s Engineering Flex program, I like to with things with wood,
                    graphite on paper, and now with code and script. For me, building an app or site follows much the same
                    process as creating a drawing or painting: start with an idea, put an outline on paper, flush out the
                    details, and work until it’s perfect. In my free time I enjoy board games and 
                    table tops, hiking, and swimming.
                </p>
                <div className='.image'>
                    <img alt='cartoon protrait of Spencer' src='icon.jpeg'/>
                </div>
            </div>
        )
    }
}
export default Bio