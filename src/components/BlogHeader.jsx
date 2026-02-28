function BlogHeader() {
  return (
    <div className="container">
      <header className="glass-header">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="link-secondary fw-semibold" href="#" style={{ textDecoration: 'none' }}>
              📧 Subscribe
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-decoration-none" href="#">
              Daniel Red
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="btn btn-custom btn-sm" href="#">✨ Join Now</a>
          </div>
        </div>
      </header>

      <div className="nav-scroller mb-4">
        <nav className="nav justify-content-between">
          <a className="nav-item nav-link link-body-emphasis active" href="#">🌍 World</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">💻 Technology</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">🎨 Design</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">💼 Business</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">🏛️ Politics</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">💊 Health</a>
          <a className="nav-item nav-link link-body-emphasis" href="#">✈️ Travel</a>
        </nav>
      </div>
    </div>
  )
}

export default BlogHeader
