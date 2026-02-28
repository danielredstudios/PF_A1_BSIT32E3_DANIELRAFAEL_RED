function PostPreviewCard({ category, categoryClass, title, date, excerpt }) {
  // Icon mapping for categories
  const categoryIcons = {
    'Technology': '💻',
    'Design': '🎨',
    'Business': '💼',
    'World': '🌍'
  }

  return (
    <div className="modern-card row g-0 flex-md-row mb-4 h-md-250 position-relative">
      <div className="col p-4 d-flex flex-column position-static">
        <span className={`card-category ${categoryClass}`}>
          {categoryIcons[category] || '📌'} {category}
        </span>
        <h3 className="mb-2 fw-bold">{title}</h3>
        <div className="mb-2 text-body-secondary small">
          📅 {date}
        </div>
        <p className="card-text mb-3 text-muted">{excerpt}</p>
        <a href="#" className="icon-link mt-auto">
          Read More →
        </a>
      </div>
      <div className="col-auto d-none d-lg-block" style={{ minWidth: '200px' }}>
        <div 
          style={{
            width: '200px',
            height: '250px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4rem'
          }}
        >
          {categoryIcons[category] || '📄'}
        </div>
      </div>
    </div>
  )
}

export default PostPreviewCard
