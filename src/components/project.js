import React, { Component } from "react";
import projects from "../projects.json";

export class project extends Component {
  render() {
    return (
      <div className="container">
        <div className="row ">
          {projects.map((project, index) => {
            return (
              <div className="col-lg-6 col-12" key={index}>
                <div className="card project-card m-3 ">
                  <img src={project.image} className="card-img-top" alt="..." height="60%" />
                  <div className="card-body">
                    <h5 className="card-title">{project.name}</h5>
                    <p className="card-text">{project.description}</p>
                    <a href={project.link} className="btn btn-primary">
                      See code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default project;
