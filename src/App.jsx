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

        <div className="row mb-2">
          <div className="col-md-6">
            <PostPreviewCard
              category="Technology"
              categoryClass="text-primary-emphasis"
              title="Daniel Red launches a new web platform"
              date="February 28"
              excerpt="A revised modern Bootstrap RTL layout focused on readability, speed, and responsive design."
            />
          </div>
          <div className="col-md-6">
            <PostPreviewCard
              category="Design"
              categoryClass="text-success-emphasis"
              title="Clean UI with personal branding"
              date="February 27"
              excerpt="The page is customized with Daniel Red branding and simplified sections for better user flow."
            />
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">Daniel Red Blog</h3>

            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1">About this revision</h2>
              <p className="blog-post-meta">February 2026 by <a href="#">Daniel Red</a></p>
              <p>
                This revised template keeps the Bootstrap blog style while making the content personal,
                clean, and ready for your portfolio updates.
              </p>
              <hr />
              <p>
                The structure is split into reusable React components to make future changes easier.
                You can now update headlines, posts, or sections without rewriting the whole page.
              </p>
            </article>
          </div>

          <div className="col-md-4">
            <div className="position-sticky" style={{ top: '2rem' }}>
              <div className="p-4 mb-3 bg-body-tertiary rounded">
                <h4 className="fst-italic">About Daniel Red</h4>
                <p className="mb-0">
                  Developer focused on web applications, modern UI, and practical solutions using
                  React and Bootstrap.
                </p>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled mb-0">
                  <li><a href="#">GitHub</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Portfolio</a></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-body-secondary bg-body-tertiary">
        <p className="mb-1">Daniel Red • Bootstrap RTL Blog Revision</p>
        <p className="mb-0"><a href="#">Back to top</a></p>
      </footer>
    </div>
  )
}

export default App
