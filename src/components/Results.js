import React,{useState,useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Cards from './Cards'
import Navbar from './Navbar'


const Results = () => {
  const host=process.env.REACT_APP_BASE_URL||"http://localhost:5000";
  const [data, setData] = useState([])
  const search = async (search) => {
    // http://localhost:5000/api/v1/medicanApi
    const response = await fetch(`${host}/api/v1/medicanApi`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({search})
    });
    const json = await response.json();
    setData(json);
    console.log(json);
  }
  search("volini");
  // useEffect(() => {
  //   // eslint-disable-next-line
  //   search("volini")
  // }, )
  
  search();
  return (
    <>
      <div className='d-flex' style={{flexDirection:"column"}}>
        <div>
          <Navbar/>
        </div>
        <div >
          <Cards/>
        </div>
      </div>
    </>
  )
}

export default Results