import React from 'react'
import coupon from '../images/coupon.png'

const Cards = (props) => {
  const {data}=props;
  const redirectForLink = (url)=>{
    window.open(url, '_blank', 'noreferrer');
  }
  const Discount = (mrp,price)=>{
    let discount = ((mrp-price)/mrp)*100;
    const dis=discount.toFixed(2);
    return  Math.round(dis);
  }

  return (
    <>
      <section>
        <div className="container py-1" style={{width:"75vw"}}>
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 d-flex justify-content-center">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface" style={{width:"fitContent",display:"flex"}}>
                        <img  src={data.image} alt='Not Available'
                          className="w-100 imageLink" />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div className="mask" ></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-9 col-xl-9 info">
                      <h5>{data.name}</h5>
                      <div className="d-flex align-items-center mb-1">
                        <h5 className="mb-1 me-1 fs">MRP: ₹{data.mrp}</h5>
                      </div>
                      <h6 className="text-success fsl d-flex">Discounted Price</h6>
                      <div className="d-flex flex-row" style={{height:"140px"}}>
                        <div className="d-flex flex-column justify-content-center">
                          <h5 className="mx-3 truemedsTitle comInfo fs">Truemeds</h5>
                          <h5 className="mx-3 apolloTitle comInfo fs">Apollo</h5>
                          <h5 className="mx-3 pharmeasyTitle comInfo fs" style={{display: `${data.pharmeasyPrice==0?"none":"block"}`}} >Pharmeasy</h5>
                          <h5 className="mx-3 netmedsTitle comInfo fs" style={{display: `${data.netmedsPrice==0?"none":"block"}`}} >Netmeds</h5>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h5 className="mx-2 truemedsPrice comInfo fs">₹{data.truemedsPrice}</h5>
                          <h5 className="mx-2 apolloPrice comInfo fs">₹{data.apolloPrice}</h5>
                          <h5 className="mx-2 pharmeasyPrice comInfo fs" style={{display: `${data.pharmeasyPrice==0?"none":"block"}`}} >₹{data.pharmeasyPrice}</h5>
                          <h5 className="mx-2 netmedsPrice comInfo fs" style={{display: `${data.netmedsPrice==0?"none":"block"}`}} >₹{data.netmedsPrice}</h5>
                        </div>
                        <div className="d-flex flex-column justify-content-center disCol">
                          <h5 className="mx-2 truemedsDiscount comInfo fs text-success"><img className='couponImg' src={coupon} alt="error"></img>{Discount(data.mrp,data.truemedsPrice)}% OFF</h5>
                          <h5 className="mx-2 apolloDiscount comInfo fs text-success"><img className='couponImg' src={coupon} alt="error"></img>{Discount(data.mrp,data.apolloPrice)}% OFF</h5>
                          <h5 className="mx-2 pharmeasyDiscount comInfo fs text-success" style={{display: `${data.pharmeasyPrice==0?"none":"block"}`}} ><img className='couponImg' src={coupon} alt="error"></img>{Discount(data.mrp,data.pharmeasyPrice)}% OFF</h5>
                          <h5 className="mx-2 netmedsDiscount comInfo fs text-success" style={{display: `${data.netmedsPrice==0?"none":"block"}`}} ><img className='couponImg' src={coupon} alt="error"></img>{Discount(data.mrp,data.netmedsPrice)}% OFF</h5>
                        </div>
                        <div className="d-flex flex-column justify-content-center mx-2">
                          <button className="btn btn-success btn-sm mx-3 buynow truemedsLink" type="button" onClick={()=>redirectForLink(data.truemedsLink)}>Buy Now</button>
                          <button className="btn btn-success btn-sm mx-3 buynow aplloLink" type="button" onClick={()=>redirectForLink(data.apolloLink)}>Buy Now</button>
                          <button className="btn btn-success btn-sm mx-3 buynow pharmeasyLink" style={{display: `${data.pharmeasyPrice==0?"none":"block"}`}} type="button" onClick={()=>redirectForLink(data.pharmeasyLink)}>Buy Now</button>
                          <button className="btn btn-success btn-sm mx-3 buynow netmedsLink" style={{display: `${data.netmedsPrice===0?"none":"block"}`}} type="button" onClick={()=>redirectForLink(data.netmedsLink)}>Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards