function HeroFeature() {
  return (
    <div className="hero-gradient mb-5">
      <div className="col-lg-8 px-0">
        <h1 className="display-3 fw-bold mb-3">
          ✨ Daniel Red
        </h1>
        <h2 className="display-6 mb-4">Modern Development & Creative Design</h2>
        <p className="lead my-3" style={{ fontSize: '1.25rem' }}>
          Building stunning web experiences with cutting-edge technology. A portfolio showcasing 
          innovative React applications, responsive designs, and modern UI patterns.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <a href="#" className="d-inline-flex">
            🚀 Explore Projects
          </a>
          <a href="#" className="d-inline-flex">
            📬 Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default HeroFeature
