import React, { Component } from "react";
import testimonies from "../testimonies.json";

export class testimony extends Component {
  render() {
    return (
      <div className="container">
        {testimonies.map((testimony, index) => {
          return (
            <div
              className={index % 2 !== 0 ? "row align-items-end justify-content-end d-flex" : "row"}
            >
              <div className="col-lg-8 col-12" key={index}>
                <div className="card testimony-card m-3">
                  <div className="card-body">
                    <blockquote className="blockquote mb-0 testimony-text">
                      <p>{testimony.description}</p>
                      <footer className="blockquote-footer">
                        <img src={testimony.image} className="testimony-image m-2" alt="" />
                        {testimony.name} in <cite title="Source Title">{testimony.jobTitle}</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default testimony;
