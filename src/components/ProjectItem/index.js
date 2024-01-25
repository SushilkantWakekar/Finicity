import {Component} from 'react'

import './index.css'

class ProjectItem extends Component {
  render() {
    const {Data} = this.props

    return (
      <li className='project-card'>
        
          <h1 >{Data.ProjectName}</h1>
          <p >{Data.Description}</p>
          <button type="button" className="view-butoon">
            <a
              href={Data.ProjectLink}
              target="_blank"
              rel="noreferrer"
              className="anch"
            >
              View Project
            </a>
          </button>
        
      </li>
    )
  }
}

export default ProjectItem
