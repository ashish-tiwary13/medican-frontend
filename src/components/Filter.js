import React,{useState} from 'react'
import Slider from '@mui/material/Slider';

const Filter = () => {
  const [price,setPrice] = useState(100);
  const [discount,setDiscount] = useState(100);

  // Changing State of Price
  const handlePriceRange = (event, newValue) => {
    setPrice(newValue);
    // console.log(newValue)
  }
  const handleDiscountRange = (event, newValue) => {
    setDiscount(newValue);
    // console.log(newValue)
  }
    
  return (
    <>
      <div className='filterSection mx-3'>
        <h4 className='filterHeading my-3'>Filters</h4>
        <div className='divider'></div>
        <h5 className='filterPriceHeading'>Price</h5>
        <div className='d-flex justify-context-center'>
        <div style={{margin: '20px 0px',display: 'flex', width: 'fit-content'}}>
          <span>0</span>
            <Slider
              className='slider'
              value={price}
              onChange={handlePriceRange}
              valueLabelDisplay="auto"
            />
            <span>{price}</span>
          </div>
        </div>
        <div className='divider'></div>
        <h5 className='filterPriceHeading'>Discount</h5>
        <div className='d-flex justify-context-center'>
        <div style={{margin: '20px 0px',display: 'flex', width: 'fit-content'}}>
          <span>0</span>
            <Slider
              className='slider'
              value={discount}
              onChange={handleDiscountRange}
              valueLabelDisplay="auto"
            />
            <span>{discount}</span>
          </div>
        </div>
        <div className='divider'></div>
        <h5 className='filterPriceHeading'>Pharma Sites</h5>
        <div className='d-flex justify-context-center align-self-start mx-5'>
          <div className='d-flex flex-column'>
            <div className='d-flex'>
              <input type="checkbox" id="apollo" name="apollo" value="apollo"/>
              <label for="apollo" className='apollo mx-3 my-1'>Apollo</label>
            </div>
            <div className='d-flex'>
              <input type="checkbox" id="truemeds" name="truemeds" value="truemeds"/>
              <label for="truemeds" className='truemeds mx-3 my-1'>Truemeds</label>
            </div>
            <div className='d-flex'>
              <input type="checkbox" id="pharmeasy" name="pharmeasy" value="pharmeasy"/>
              <label for="pharmeasy" className='pharmeasy mx-3 my-1'>Pharmeasy</label>
            </div>
            <div className='d-flex'>
              <input type="checkbox" id="netmeds" name="netmeds" value="netmeds"/>
              <label for="netmeds" className='netmeds mx-3 my-1'>Netmeds</label>
            </div>
          </div>
        </div>
        <div className='space'></div>
      </div>      
    </>
  )
}

export default Filter