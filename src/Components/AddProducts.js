import React from 'react'
import { myDatabase } from '../firebase'

function AddProducts() {
  const [productData,setProductData]=React.useState({
    productNo:'',
    productName:'',
    productImageUrl:'',
    productDiscription:'',
    productOriginalPrice:'',
    productDiscountPrice:'',
  })
  function getData(e){
    const data=e.target.value
    setProductData({...productData,[e.target.name]:data})
  }
   
  function getSave(){
    console.log(productData) 
    myDatabase.collection("products").add({
      slno:productData.productNo,
      name:productData.productName,
      description:productData.productDiscription,
      imageUrl:productData.productImageUrl,
      originalPrice:productData.productOriginalPrice,
      discountedPrice:productData.productDiscountPrice
    })
    window.location.pathname='/home'
  }
  return (
    <div className='row' style={{margin:30,lineHeight:3}}>
      <div className='col-md-3'>
        <label>Product No</label>
        <input type='text' className='form-control' name='productNo' onChange={getData}/>
        <label>Product name</label>
        <input type='text' className='form-control' name='productName' onChange={getData}/>

        <label>Image Url</label>
        <input type='text' className='form-control' name='productImageUrl' onChange={getData}/>

        <label>Discription</label>
        <textarea rows="4" cols="40" className='form-control' name='productDiscription'onChange={getData}/>
        <label>Original Price</label>
        <input type='text' className='form-control' name='productOriginalPrice' onChange={getData}/>

        <label>Discount Price</label>
        <input type='text' className='form-control' name='productDiscountPrice' onChange={getData}/>
        <button type='button'className='btn btn-success' onClick={getSave}>Add Product</button>
      </div>
    </div>
  )
}

export default AddProducts