import './App.css'
import BlogHeader from './components/BlogHeader'
import HeroFeature from './components/HeroFeature'
import PostPreviewCard from './components/PostPreviewCard'

function App() {
  return (
    <div className="bg-body text-body min-vh-100">
      <BlogHeader />

      <main className="container py-4">
        <HeroFeature />

        <div className="row mb-5 g-4">
          <div className="col-md-6 animate-left">
            <PostPreviewCard
              category="Technology"
              categoryClass="text-primary-emphasis"
              title="🚀 Daniel Red launches a new web platform"
              date="February 28, 2026"
              excerpt="A cutting-edge Bootstrap RTL layout with React components, featuring modern animations, gradients, and responsive design principles."
            />
          </div>
          <div className="col-md-6 animate-right">
            <PostPreviewCard
              category="Design"
              categoryClass="text-success-emphasis"
              title="🎨 Revolutionary UI/UX Experience"
              date="February 27, 2026"
              excerpt="Stunning visual design with glassmorphism effects, smooth transitions, and a bold color palette that brings content to life."
            />
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
              <h3 className="fst-italic mb-0 me-3">📝 Latest from Daniel Red</h3>
              <div className="ms-auto">
                <span className="badge bg-danger">New</span>
              </div>
            </div>

            <article className="blog-post">
              <h2 className="display-5 fw-bold mb-3">Modern Web Development in 2026</h2>
              <p className="blog-post-meta">
                February 2026 by <a href="#">Daniel Red</a>
              </p>
              <p className="lead">
                The web development landscape has evolved dramatically, bringing new possibilities 
                for creating immersive and performant user experiences.
              </p>
              <hr className="my-4" />
              <p>
                This project showcases the power of combining React's component architecture with 
                Bootstrap's utility-first styling approach. Every element is carefully crafted to 
                deliver both aesthetic appeal and functional excellence.
              </p>
              <blockquote className="blockquote my-4 ps-4 border-start border-danger border-3">
                <p className="mb-0">
                  "Great design is not just what it looks like and feels like. 
                  Great design is how it works."
                </p>
                <footer className="blockquote-footer mt-2">Steve Jobs</footer>
              </blockquote>
              <p>
                The architecture emphasizes reusability, maintainability, and scalability—three 
                pillars essential for modern web applications. Each component serves a specific 
                purpose while contributing to the cohesive whole.
              </p>
            </article>

            <article className="blog-post">
              <h2 className="display-6 fw-bold mb-3">Component-Driven Development</h2>
              <p className="blog-post-meta">
                February 2026 by <a href="#">Daniel Red</a>
              </p>
              <p>
                Breaking down complex interfaces into manageable, reusable components is the 
                cornerstone of efficient React development. This approach not only speeds up 
                development but also ensures consistency across your application.
              </p>
              <ul className="list-unstyled mt-3">
                <li className="mb-2">✅ Modular and maintainable codebase</li>
                <li className="mb-2">✅ Enhanced reusability across projects</li>
                <li className="mb-2">✅ Simplified testing and debugging</li>
                <li className="mb-2">✅ Better team collaboration</li>
              </ul>
            </article>
          </div>

          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '2rem' }}>
              <div className="sidebar-card mb-4">
                <h4 className="fst-italic fw-bold">👨‍💻 About Daniel Red</h4>
                <p className="mb-0">
                  Full-stack developer passionate about creating beautiful, functional web 
                  experiences. Specializing in React, modern CSS, and responsive design with 
                  a focus on user experience and performance optimization.
                </p>
              </div>

              <div className="sidebar-card mb-4">
                <h4 className="fst-italic fw-bold">🎯 Skills</h4>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">React</span>
                  <span className="badge bg-success">Bootstrap</span>
                  <span className="badge bg-info">JavaScript</span>
                  <span className="badge bg-warning">CSS3</span>
                  <span className="badge bg-danger">HTML5</span>
                  <span className="badge bg-secondary">Git</span>
                </div>
              </div>

              <div className="sidebar-card">
                <h4 className="fst-italic fw-bold">🔗 Connect</h4>
                <div className="d-flex flex-column gap-2">
                  <a href="#" className="d-flex align-items-center gap-2">
                    <span>🐙</span> GitHub
                  </a>
                  <a href="#" className="d-flex align-items-center gap-2">
                    <span>💼</span> LinkedIn
                  </a>
                  <a href="#" className="d-flex align-items-center gap-2">
                    <span>🌐</span> Portfolio
                  </a>
                  <a href="#" className="d-flex align-items-center gap-2">
                    <span>✉️</span> Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="modern-footer">
        <div className="container text-center">
          <p className="mb-2 display-6" style={{ fontSize: '1.5rem' }}>✨ Daniel Red</p>
          <p className="mb-3 text-muted">Building the web, one component at a time</p>
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
          <p className="mb-0 text-muted small">
            © 2026 Daniel Red. Made with ❤️ using React & Bootstrap
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
