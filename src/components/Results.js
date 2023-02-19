import React,{useContext} from 'react'
// import { Link } from 'react-router-dom'
import Cards from './Cards'
import Navbar from './Navbar'
import HandleContext from '../context/handleContext'
import Filter from './Filter'


const Results = () => {
  const {data,searched} = useContext(HandleContext);

  
  
  
  return (
    
    <>
      <div className='d-flex' style={{flexDirection:"column"}}>
        <div>
          <Navbar/>
        </div>
        <div className='showResults'><span style={{color: "rgb(0 0 0)",display:!searched?"none":"block",marginRight:"5px"}}>Showing all results for </span><span style={{fontWeight:"bold"}}>{searched}</span></div>
        <div className='containFilter' style={{display:"flex"}}>
          <Filter/>
          <div className='showComparison'>
            {Array.isArray(data) && data.map((data) =>{
              return (
                <div key={data.index}>
                  <Cards data={data}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Results