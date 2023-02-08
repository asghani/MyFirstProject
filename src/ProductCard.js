import React from 'react'

const ProductCard = ({data}) => {
    const {photo, name, newPrice} = data
  return (
    <>
            <div className='col-lg-3 col-md-6 col-12'>               
                  <div className="card" style={{width: '18rem', backgroundColor: 'black'}}>
                    <img src={photo} className="card-img-top" alt="..."  style = {{height: "450px", padding:"10px"}}/>
                    <div className="card-body">
                      <h5 className="card-title" style={{color: 'white'}}>{name}</h5>
                      <p className="card-text" style={{color: 'white'}}>Rs: {newPrice}</p>
                      <a href="#" className="btn btn-danger">Buy Now</a>
                    </div>
                  </div>
              </div>
    </>
  )
}

export default ProductCard













