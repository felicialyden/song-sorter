'use client'

const Dropdown = () => {

  return (
    <div id="dropdown" className="dropdown m-4" onClick={() => document.getElementById('dropdown')?.classList.toggle('is-active')}>
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
      <span>Pick an album</span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu" role="menu">
    <div className="dropdown-content">
      <a href="/sorter/evermore" className="dropdown-item">
        evermore
      </a>
    </div>
  </div>
</div>
  )
}

export default Dropdown