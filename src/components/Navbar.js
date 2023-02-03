import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className='w'>
        <div className='medican-w font'>Medican</div>
      </div>
      <div className='w d-flex justify-content-center'>
        <form className="d-flex search-bar-w" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search for medicines, health products, etc . . ."
                aria-label="Search"
            />
            <Link className="do" to="/results">
                <button className="btn to" type="submit">
                    Search
                </button>
            </Link>
          </form>
        </div>
        <div className='w'>
          <div className='space'></div>
      </div>
      </div>
    </>
  )
}

export default Navbar