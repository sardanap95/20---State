function About() {
  return (
    <section id="about" className="about-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 align-items-center justify-content-center d-flex">
            <div className="about-image">
              <img src="./img/brands/PS_2.JPG" alt="About us" className="img-fluid about-image " />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 about-title">
            <h2 className="text-uppercase pt-5">
              <span>Let me</span>
              <span>introduce</span>
              <span>myself</span>
            </h2>
            <div className="paragraph py-4 w-75">
              <p className="para">
                Motivated, Problem Solver, Team Player, Analytical Thinker ...!
              </p>
              <p className="para">
                I have succussfully completed my diploma in Computer System Technician from
                Algonquin College. Recently i am working with Sectigo as Support Analyst. I have
                learned professional skills such as providing technical support to the users over
                the phone and emails. Prior to that, I was working with Nova Networks as Account
                lead. I have been praised as a good leader, Team player and quality oriented person
                by my team members in the company and Recently I have started a Web development
                course from Carleton.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
