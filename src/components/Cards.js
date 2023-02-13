import React from 'react'

const Cards = (props) => {
  const {data}=props;
  const redirectForLink = (url)=>{
    window.open(url, '_blank', 'noreferrer');
  }

  return (
    <>
      <section style={{backgroundColor: "#eee"}}>
        <div className="container py-4">
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 d-flex justify-content-center">
                      <div className="bg-image hover-zoom ripple rounded ripple-surface" style={{width:"fitContent"}}>
                        <img  src={data.image} alt='Not Available'
                          className="w-100 imageLink" />
                        <a href="#!">
                          <div className="hover-overlay">
                            <div className="mask" style={{backgroundColor: "rgba(253, 253, 253, 0.15)"}}></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-4">
                      <h5>{data.name}</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span>100% cotton</span>
                        <span className="text-primary"> • </span>
                        <span>Light weight</span>
                        <span className="text-primary"> • </span>
                        <span>Best finish<br /></span>
                      </div>
                      <div className="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span className="text-primary"> • </span>
                        <span>For men</span>
                        <span className="text-primary"> • </span>
                        <span>Casual<br /></span>
                      </div>
                      <p className="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable.
                      </p>
                    </div>
                    <div className="col-md-6 col-lg-5 col-xl-5 border-sm-start-none border-start">
                      <div className="d-flex justify-content-center align-items-center mb-1">
                        <h5 className="mb-1 me-1">MRP: ₹{data.mrp}</h5>
                      </div>
                      <h6 className="text-success fs-4 d-flex my-3 justify-content-center">Discounted Price</h6>
                      <div className="d-flex flex-row justify-content-center">
                        <div className="d-flex flex-column justify-content-center">
                          <h5 className="mx-3 onemgTitle comInfo">1Mg</h5>
                          <h5 className="mx-3 apolloTitle comInfo">Apollo</h5>
                          <h5 className="mx-3 pharmeasyTitle comInfo" style={{display: `${data.pharmeasyPrice==0?"none":"block"}`}} >Pharmeasy</h5>
                          <h5 className="mx-3 netmedsTitle comInfo" style={{display: `${data.netmedsPrice==0?"none":"block"}`}} >Netmeds</h5>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <h5 className="mx-2 onemgPrice comInfo">₹{data.oneMgPrice}</h5>
                          <h5 className="mx-2 apolloPrice comInfo">₹{data.apolloPrice}</h5>
                          <h5 className="mx-2 pharmeasyPrice comInfo" style={{display: `${data.pharmeasyPrice==0?"none":"block"}`}} >₹{data.pharmeasyPrice}</h5>
                          <h5 className="mx-2 netmedsPrice comInfo" style={{display: `${data.netmedsPrice==0?"none":"block"}`}} >₹{data.netmedsPrice}</h5>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <button className="btn btn-success btn-sm mx-3 my-1 buynow onemgLink" type="button" onClick={()=>redirectForLink(data.oneMgLink)}>Buy Now</button>
                          <button className="btn btn-success btn-sm mx-3 my-1 buynow aplloLink" type="button" onClick={()=>redirectForLink(data.apolloLink)}>Buy Now</button>
                          <button className="btn btn-success btn-sm mx-3 my-1 buynow pharmeasyLink" style={{display: `${data.pharmeasyPrice==0?"none":"block"}`}} type="button" onClick={()=>redirectForLink(data.pharmeasyLink)}>Buy Now</button>
                          <button className="btn btn-success btn-sm mx-3 my-1 buynow netmedsLink" style={{display: `${data.netmedsPrice===0?"none":"block"}`}} type="button" onClick={()=>redirectForLink(data.netmedsLink)}>Buy Now</button>
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