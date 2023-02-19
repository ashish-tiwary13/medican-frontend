import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoading = () => {
  return (
    <div>
        <section>
        <div className="container py-1" style={{width:"75vw"}}>
          <div className="row justify-content-center mb-3">
            <div className="col-md-12 col-xl-10">
              <div className="card shadow-0 border rounded-3">
                <div className="card-body">
                  <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0 d-flex justify-content-center">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface" style={{width:"fitContent",display:"flex"}}>
                      <div className="w-100 imageLink"><Skeleton height={175}/></div>
                      <a href="#!">
                        <div className="hover-overlay">
                          <div className="mask" ></div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-9 col-xl-9 info">
                    <div style={{marginTop:"1px",marginBottom:"1px"}}><Skeleton height={25}/></div>
                    <div style={{width:"120px",marginTop:"1px",marginBottom:"1px"}}><Skeleton height={18}/></div>
                    <div style={{width:"170px",marginTop:"1px",marginBottom:"3px"}}><Skeleton height={25}/></div>
                    <div className="d-flex flex-row" style={{height:"140px"}}>
                      <div className="d-flex flex-column justify-content-center">
                        <h5 className="mx-3 truemedsTitle comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-3 apolloTitle comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-3 pharmeasyTitle comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-3 netmedsTitle comInfo fs"><Skeleton /></h5>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h5 className="mx-2 truemedsPrice comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-2 apolloPrice comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-2 apolloPrice comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-2 apolloPrice comInfo fs"><Skeleton /></h5>
                      </div>
                      <div className="d-flex flex-column justify-content-center disCol">
                        <h5 className="mx-2 truemedsDiscount comInfo fs text-success"><Skeleton /></h5>
                        <h5 className="mx-2 apolloDiscount comInfo fs text-success"><Skeleton /></h5>
                        <h5 className="mx-2 apolloDiscount comInfo fs text-success"><Skeleton /></h5>
                        <h5 className="mx-2 apolloDiscount comInfo fs text-success"><Skeleton /></h5>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h5 className="mx-2 truemedsPrice comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-2 apolloPrice comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-2 apolloPrice comInfo fs"><Skeleton /></h5>
                        <h5 className="mx-2 apolloPrice comInfo fs"><Skeleton /></h5>
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
    </div>
  )
}

export default SkeletonLoading