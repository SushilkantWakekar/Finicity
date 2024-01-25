import {Component} from 'react'


import './index.css'
import ProjectItem from '../ProjectItem'

const InitialList = [
  {
    id: 1,
    ProjectName: 'District Tourism',
    ProjectLink: 'https://gadchirolimh33.ccbp.tech',
    Description:
      'Developed tourism website where users can browse through the content, videos and images of popular destinations.',
  },
  {
    id: 2,
    ProjectName: 'IPL Dashboard',
    ProjectLink: 'https://swdebugipl.ccbp.tech',
    Description:
      'Built an interactive hub for IPL teams and matches information.',
   
  },
  {
    id: 3,
    ProjectName: 'Food Munch',
    ProjectLink: 'https://foodmunchsp12.ccbp.tech',
    Description:
      'Discover the world of food with this responsive website that showcases a comprehensive list of food items.',
  },
]



class AddProject extends Component {
  
  state = {
    projectsList: InitialList,
    ProjectLink: '',
    ProjectName: '',
    Description: '',
  }

  addProject = event => {
    event.preventDefault()
    const {projectsList, ProjectName, ProjectLink, Description} = this.state
    const newObj = {
      id: projectsList.length + 1,
      ProjectName,
      ProjectLink,
      Description,
      
    }

    this.setState(prevState => ({
      projectsList: [...prevState.projectsList, newObj],
      ProjectName: '',
      ProjectLink: '',
      Description: '',
    }))
  }

  onChangeProjectLink = event => {
    this.setState({
      ProjectLink: event.target.value,
    })
  }

  onChangeProjectName = event => {
    this.setState({
      ProjectName: event.target.value,
    })
  }

  onChangeProjectDescription = event => {
    this.setState({
      Description: event.target.value,
    })
  }
 
    render(){
      const {projectsList, ProjectName, ProjectLink, Description} = this.state;

      return(
        <>
        <div className="add-project-container"> 
            <div className="header">
                <h2 className='header-text'>Add Project</h2>
            </div>
            <hr className="hr" />

            <div className="sub-form">
            <form className="form" onSubmit= {this.addProject}>
              <label htmlFor="PName" className="label">
                Project Name
              </label>
              <input
                type="text"
                className="input"
                id="PName"
                onChange= {this.onChangeProjectName}
                value= {ProjectName}
              />
              <label htmlFor="PLink" className="label">
                Project Link
              </label>
              <input
                type="text"
                className="input"
                id="PLink"
                onChange= {this.onChangeProjectLink}
                value= {ProjectLink}
              />

              <label htmlFor="discription" className="label">
                Description
              </label>
              <textarea
                rows="7"
                cols="100"
                type="text"
                id="discription"
                className="text-area"
                onChange= {this.onChangeProjectDescription}
                value= {Description}
              />
              <button type="submit" className="submitButton">
                Add
              </button>
            </form>
          </div>
          <div>
            <img
              className="img"
              src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1704392119/g7gkuelxopm8zqkmfiws.jpg"
              alt="Vector"
            />
          </div>

        </div>

        <div className='project-container'>
           
            <h1 className="add-p-heading">Projects</h1>
            <hr className="hr" />
         
          <ul className="ul">
            {projectsList.map(each => (
              <ProjectItem key={each.id} Data={each} />
            ))}
          </ul>

          <div>
            <img
              className="img"
              src="https://res.cloudinary.com/dytgpb4j5/image/upload/v1704392119/g7gkuelxopm8zqkmfiws.jpg"
              alt="Vector"
            />
          </div>
        </div>

        
        </>
    )
    }
}

export default AddProject