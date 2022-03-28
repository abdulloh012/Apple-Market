import React from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

const CartBtn = () => {

  const state = useSelector((state)=> state.addItem)
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-dark" >
        <span className='fa fa-shopping-cart'></span>
        Card (<span className='fw-bold text-danger'>{state.length}</span>)
      </NavLink>
    </>
  )
}

export default CartBtn