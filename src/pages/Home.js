function Home() {
  return (
    <section id="Home" className="site-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 site-title">
            <h3 className="title-text">Hello World!</h3>
            <h1 className="title-text text-uppercase">I am Pushpi</h1>
            <h4 className="title-text text-uppercase">IT Support Analyst</h4>
            <div className="site-buttons">
              <div className="d-flex flex-row flex-wrap">
                <a
                  href="https://www.linkedin.com/in/pushpi-sardana-b39a8178/"
                  className="btn button primary-button mr-4 text-uppercase"
                >
                  Hire Me
                </a>
                <a href="PS Resume  (3).pdf" className="btn button secondary-button text-uppercase">
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 banner-image">
            <img
              src="https://raw.githubusercontent.com/sardanap95/20-State/master/src/assests/img/banner/banner-image.png"
              alt="banner-img"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
