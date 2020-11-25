import ProjectCard from "../components/project";
function Projects() {
  return (
    <section id="project" className="project-area">
      <div className="container">
        <div className="row">
          <div className="project-title pb-5 text-center w-100">
            <h1 className="text-uppercase title-h1 text-center"> Projects </h1>
          </div>
        </div>
      </div>
      <ProjectCard />
    </section>
  );
}

export default Projects;
