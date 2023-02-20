import React,{useState,useContext} from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import HandleContext from '../context/handleContext'


const Home2 = () => {
    const {searchAllSites,setSearched} = useContext(HandleContext);
    const [search, setSearch] = useState('');
    const onClick = (e) => {
        // e.preventDefault();
        console.log(search);
        const forserached = search.charAt(0).toUpperCase() + search.slice(1);
        setSearched(forserached);
        searchAllSites(search);
    }
    const handleOnChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

  return (
    <>
        <div className='container d-flex justify-content-center align-items-center home'style={{backgroundSize: "cover",backgroundColor:"black"}} >
            <div className='container d-flex justify-content-center align-items-center  overlay'>
            <div className='cols'>
                <div className='w'>
                    <img src={logo} alt='logo' className='logo'/>
                </div>
                <div className='w d-flex justify-content-center'>
                    <form className="d-flex search-bar" role="search">
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
            </div>
            </div>
        </div>
        {/* <div className='overlay'></div> */}
    </>
  )
}

export default Home2