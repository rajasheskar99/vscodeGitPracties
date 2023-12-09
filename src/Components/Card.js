import React from 'react'
import {myDatabase} from '../firebase'

function Card() {
    const [productData,setProduct]=React.useState([])

    React.useEffect(function(){
        myDatabase.collection('products').onSnapshot(function(snapshot){
             setProduct(snapshot.docs.map(function(i){
                return i.data()
            }))
        })
    })
  return (
    <div className='all' style={{display:'flex'}}>
         {productData.map(function(i){
             return(
                <div key={i.slno} className="card" style={{width: 350,margin:30,padding:30}}>
            <img src={i.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{i.name}</h5>
                <p className="card-text">{i.description}</p>
                 <del><h5 className="card-title">{i.originalPrice}</h5></del>
                <h5 className="card-title">{i.discountedPrice}</h5>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
             )
         })}
    </div>
  )
}

export default Card