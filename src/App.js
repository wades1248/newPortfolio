import React, {Component} from 'react';
import './App.css';
import TitlePage from './titlePage'
import NavBar from './navBar'
import Bio from './bio'
import MyProjects from './projects'
import Contact from './contact'

class App extends Component {
  render(){
    return (
     <main className="App">
       <TitlePage/>
       <NavBar/>
       <div className='content'>
        <Bio/>
        <MyProjects/>
        <Contact/>
       </div>
      </main>
    );
  }
}

export default App;
