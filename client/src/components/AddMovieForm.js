import React, { useState } from "react";

const initialFormValues = {
    id: '',
    title: "",
    director: "",
    metascore: 0,
    genre: "",
    description:"",
}

export default function AddMovieForm(props) {
    const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div>
      <div className="col">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">
                Add New Movie
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Title</label>
                <input
                  value={formValues.title}
                //   onChange={handleChange}
                  name="title"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Director</label>
                <input
                  value={formValues.director}
                //   onChange={handleChange}
                  name="director"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Genre</label>
                <input
                  value={formValues.genre}
                //   onChange={handleChange}
                  name="genre"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Metascore</label>
                <input
                  value={formValues.metascore}
                //   onChange={handleChange}
                  name="metascore"
                  type="number"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={formValues.description}
                //   onChange={handleChange}
                  name="description"
                  className="form-control"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <input type="submit" className="btn btn-info" value="Save" />
              {/* <Link to={`/movies/1`}>
                <input
                  type="button"
                  className="btn btn-default"
                  value="Cancel"
                />
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
