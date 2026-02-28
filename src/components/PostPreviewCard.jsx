function PostPreviewCard({ category, categoryClass, title, date, excerpt }) {
  return (
    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <strong className={`d-inline-block mb-2 ${categoryClass}`}>{category}</strong>
        <h3 className="mb-0">{title}</h3>
        <div className="mb-1 text-body-secondary">{date}</div>
        <p className="card-text mb-auto">{excerpt}</p>
        <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">Continue reading</a>
      </div>
      <div className="col-auto d-none d-lg-block">
        <svg
          aria-label="Placeholder: thumbnail"
          className="bd-placeholder-img"
          height="250"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
      </div>
    </div>
  )
}

export default PostPreviewCard
