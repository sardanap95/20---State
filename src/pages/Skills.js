function Skills() {
  return (
    <section id="skills" className="skills-area">
      <div className="container-fluid">
        <article className="row">
          <div className="col-lg-12 text-center">
            <h1 className="text-uppercase">Skills</h1>
            <p>
              A skill is an ability to do something well. With an experience of 3+ years in IT I
              have developed skills like: Problem Solving, Teamwork, Leadership, Analytical Skills.
            </p>
            <p> A lot more to learn...! </p>
          </div>
        </article>

        <div className="row ">
          <article className="col-lg-3 col-md-6 col-sm-12">
            <div className="skills">
              <div className="skills-img text-center py-4">
                <img src="./img/banner/MySQL.png" alt="skills-1" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase font-roboto">MySQL</h5>
                <p className="card-text text-secondary">
                  MySQL is a relational database management system based on SQL – Structured Query
                  Language.
                </p>
              </div>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-sm-12">
            <div className="skills">
              <div className="skills-img text-center py-4">
                <img src="./img/banner/HTML.png" alt="skills-2" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase font-roboto">HTML</h5>
                <p className="card-text text-secondary">
                  Hypertext Markup Language is the standard markup language for documents designed
                  to be displayed in a web browser.
                </p>
              </div>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-12 ">
            <div className="skills ">
              <div className="skills-img text-center py-4">
                <img src="./img/banner/Web-design.png" alt="skills-3" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase font-roboto">Web design</h5>
                <p className="card-text text-secondary">
                  Web design is the process of creating websites.The different areas of web design
                  include web graphic design; interface design.
                </p>
              </div>
            </div>
          </article>
          <article className="col-lg-3 col-md-6 col-sm-12">
            <div className="skills">
              <div className="skills-img text-center py-4">
                <img src="./img/banner/java.png" alt="skills-4" />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase font-roboto">Java</h5>
                <p className="card-text text-secondary">
                  Java is a write-once, run-anywhere programming language.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;
