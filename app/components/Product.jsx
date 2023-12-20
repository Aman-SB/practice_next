import React from 'react'
import style from '@/app/styles/product.module.css'
import ProductButton from './ProductButton'

const Product = (props) => {
  return (
    <div className={style.product}>
        <h4>{props.title}</h4>
        <span>:</span>
        <h4>{props.price}</h4>
    </div>
  )
}

export default Product
