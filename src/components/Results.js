import React,{useContext} from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import HandleContext from '../context/handleContext'
import Filter from './Filter'
import SkeletonLoading from './SkeletonLoading'


const Results = () => {
  const {data,searched,isLoading} = useContext(HandleContext);

  
  
  
  return (
    
    <>
      <div className='d-flex' style={{flexDirection:"column",overflow:"hidden"}}>
        <div>
          <Navbar/>
        </div>
        <div className='showResults'><span style={{color: "rgb(0 0 0)",display:!searched?"none":"block",marginRight:"5px"}}>Showing all results for </span><span style={{fontWeight:"bold"}}>{searched}</span></div>
        <div className='containFilter' style={{display:"flex"}}>
          <Filter/>
          <div className='showComparison'>
            {
              isLoading?
              <>
              <SkeletonLoading/>
              <SkeletonLoading/>
              <SkeletonLoading/>
              </>
              :

            Array.isArray(data) && data.map((data) =>{
              return (
                <div key={data.index}>
                <Cards data={data}/>
                </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Results