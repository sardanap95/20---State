import TestimonyCard from "../components/testimony";
function Testimony() {
  return (
    <section id="about-area" className="about-area">
      <article className="container">
        <div className="row text-center">
          <div className="col-12">
            <div className="about-title">
              <h1 className="text-uppercase title-h1">Colleague's say about me</h1>
            </div>
          </div>
        </div>
      </article>
      <TestimonyCard />
    </section>
  );
}

export default Testimony;
