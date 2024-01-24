import './index.css'

const AddProject = () => {
    return(
        <div className="add-project-container"> 
            <div className="header">
                <h2 className='header-text'>Add Project</h2>
            </div>
            <hr className="hr" />

            <div className="sub-form">
            <form className="form" onSubmit="">
              <label htmlFor="PName" className="label">
                Project Name
              </label>
              <input
                type="text"
                className="input"
                id="PName"
                onChange= ""
                value= ""
              />
              <label htmlFor="PLink" className="label">
                Project Link
              </label>
              <input
                type="text"
                className="input"
                id="PLink"
                onChange= ""
                value= ""
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
                onChange= ""
                value=""
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
    )
}

export default AddProject