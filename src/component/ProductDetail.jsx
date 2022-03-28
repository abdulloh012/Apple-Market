import React,{useState} from 'react'
import { useParams } from 'react-router';
import {DATA} from '../Data'
import { useDispatch } from 'react-redux';
import {addItem,delItem} from '../redux/actions/index'


const ProductDetail =()=>{
    const proid=useParams()
    const proDetail = DATA.filter(x => x.id == proid.id);
    const product = proDetail[0];
    console.log(product)

    const [cartBtn,setCartBtn] = useState("Add to Cart");
    const dispatch = useDispatch()



    const handleCart=(product) => {
      if(cartBtn === "Add to Cart"){
          dispatch(addItem(product))
          setCartBtn("Remove from Cart");
      }
      else{
          dispatch(delItem(product))
          setCartBtn("Add to Cart")
      }
    }



  return (
    <>
     <div className="container my-5 py-3">
         <div className="row">
             <div className="col-md-6 d-flex justify-content-center mx-auto product">
                 <img className='productDetail-img' src={product.img} alt={product.descr}   />
             </div>
             <div className="col-md-6 d-flex flex-column justify-content-center">
                 <h1 className='display-5 fw-bold'>{product.title}</h1>
                 <hr/>
                 <h2 className='my-2'>${product.price}</h2>
                 <p className='load'>{product.descr}</p>
                 <button onClick={()=>handleCart(product)} className="btn btn-outline-primary">{cartBtn}</button>
             </div>
         </div>
     </div>
    </>
  )
}

export default ProductDetail;