import React,{useState,useContext, useEffect} from 'react'
import Slider from '@mui/material/Slider';
import HandleContext from '../context/handleContext'

import { createTheme, ThemeProvider } from '@mui/material/styles';



const Filter = () => {
  const {setPrice,price,result,setFilterData,setCount} = useContext(HandleContext);
  const arr=[];
 for (let i = 0; i < result.length; i++) {
   arr[i]=result[i].mrp;
 }
 let max = Math.max(...arr);
 let min = Math.min(...arr);
  const [lprice,setLPrice] = useState(max);
  const [ldiscount,setLDiscount] = useState(100);

  useEffect(() => {
  setLPrice(max);
  }, [max])

  // Changing State of Price
  const handlePriceRange = (event, newValue) => {
    setPrice(newValue);
    setLPrice(newValue);
    if (Array.isArray(result)) { // check if data is an array
      const filteredData = result.filter(item => Number(item.mrp) <= price);
      setCount(1);
      setFilterData(filteredData);
      // console.log(filteredData); // output the filtered data to the console
    } else {
      console.error("data is not an array");
    }
  }
  const handleDiscountRange = (event, newValue) => {
    setLDiscount(newValue);
    // console.log(newValue)
  }
 
  const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748',
        contrastText: '#fff',
      },
    },
  });
    
  return (
    <>
      <div className='filterSection mx-3'>
        <h4 className='filterHeading my-3'>Filters</h4>
        <div className='divider'></div>
        <h5 className='filterPriceHeading'>Price</h5>
        <div className='d-flex justify-context-center jcc'>
        <div style={{margin: '20px 0px',display: 'flex', width: 'fit-content'}}>
          <span>{min===Infinity?0:min}</span>
          <ThemeProvider theme={theme}>
            <Slider
              className='slider'
              value={lprice}
              onChange={handlePriceRange}
              valueLabelDisplay="auto"
              min={min===Infinity?0:min}
              max={max===-Infinity?100:max}
              defaultValue={max}
              color="neutral"
            />
            </ThemeProvider>
            <span>{max===-Infinity?100:max}</span>
          </div>
        </div>
        <div className='divider'></div>
        <h5 className='filterPriceHeading'>Discount</h5>
        <div className='d-flex justify-context-center jcc'>
        <div style={{margin: '20px 0px',display: 'flex', width: 'fit-content'}}>
          <span>0</span>
          <ThemeProvider theme={theme}>
            <Slider
              className='slider'
              value={ldiscount}
              onChange={handleDiscountRange}
              valueLabelDisplay="auto"
              color='neutral'
            />
            </ThemeProvider>
            <span>{ldiscount}</span>
          </div>
        </div>
        <div className='divider'></div>
        <h5 className='filterPriceHeading'>Pharma Sites</h5>
        <div className='d-flex justify-context-center align-self-start mx-5'>
          <div className='d-flex flex-column'>
            <div className='d-flex'>
              <input type="checkbox" id="apollo" name="apollo" value="apollo"/>
              <label htmlFor="apollo" className='apollo mx-3 my-1'>Apollo</label>
            </div>
            <div className='d-flex'>
              <input type="checkbox" id="truemeds" name="truemeds" value="truemeds"/>
              <label htmlFor="truemeds" className='truemeds mx-3 my-1'>Truemeds</label>
            </div>
            <div className='d-flex'>
              <input type="checkbox" id="pharmeasy" name="pharmeasy" value="pharmeasy"/>
              <label htmlFor="pharmeasy" className='pharmeasy mx-3 my-1'>Pharmeasy</label>
            </div>
            <div className='d-flex'>
              <input type="checkbox" id="netmeds" name="netmeds" value="netmeds"/>
              <label htmlFor="netmeds" className='netmeds mx-3 my-1'>Netmeds</label>
            </div>
          </div>
        </div>
        <div className='space'></div>
      </div>      
    </>
  )
}

export default Filter