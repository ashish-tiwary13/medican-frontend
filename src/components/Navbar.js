import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import HandleContext from '../context/handleContext'

const Navbar = () => {
  const {searchAllSites} = useContext(HandleContext);
  const [search, setSearch] = useState('');
    const onClick = (e) => {
        // e.preventDefault();
        console.log(search);
        searchAllSites(search);
    }
    const handleOnChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
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
                onChange={handleOnChange} value={search}
            />
            <Link className="do" to="/results">
                <button className="btn to" type="submit" onClick={onClick}>
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