import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, deleteCart } from '../redux'
import { handlecart } from '../redux/reducer/handlecart'
export const Cart = () => {
    const product=useSelector((state)=>state.handlecart)
    const dispatch =useDispatch()
    console.log(product)
    const handleButton=(product)=>{
        dispatch(deleteCart(product))
    }
    const handleButton1=(product)=>{
        dispatch(addCart(product))
    }

  return (
    <div>
        {product.length>0?
        product.map(product=>{
            return(
                <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width="180px"/>
                </div>
                <div className="col-md-4">
                    <h3>{product.title}</h3>
                    <p className='lead fw-bold'>{product.qty} X ${product.price}=$ {product.qty*product.price}</p>
                    <button className='btn btn-ouline-dark me-4' onClick={()=>handleButton(product)}>
                        <i className='fa fa-minus'></i>
                    </button>
                    <button className='btn btn-outline-dark' onClick={()=>handleButton1(product)}>
                        <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
        </div>
            )
        }):<h2 className='text-center my-5'>Your Cart is Empty</h2>}
        
    </div>
  )
}
