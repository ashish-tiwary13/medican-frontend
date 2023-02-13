import React,{useContext} from 'react'
// import { Link } from 'react-router-dom'
import Cards from './Cards'
import Navbar from './Navbar'
import HandleContext from '../context/handleContext'


const Results = () => {
  const {data} = useContext(HandleContext);
  
  
  return (
    <>
      <div className='d-flex' style={{flexDirection:"column"}}>
        <div>
          <Navbar/>
        </div>
        <div >
          {Array.isArray(data) && data.map((data) =>{
            return (
              <div key={data.index}>
                <Cards data={data}/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Results