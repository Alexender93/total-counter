import React, { useState } from 'react'
import ProductsArray from './productsArray'
import ShopPageItem from './shopPageItem'
import './shopPage.scss'
type CountProps = {
totalPrice: number

}
type productsProps = {

title: string,
desc: string,
price: number,

}

const ShopPage = () => {
const [val, setVal] = useState<string>('USD');
const changeVal = (value: string) => {
setVal((prevState: string) => prevState = value)
        }
      
const defineValuta = (valuta: string, price: number) => {
    if(valuta === 'EUR') {return price * 0.94} else
    if(valuta === 'UAH') {return price * 36.75} else 
    if(valuta === 'ZLT') {return price * 4.45} else {
                return price
            }
                }    

const [totalCount, setTotalCount] = useState<CountProps>({
totalPrice: 0

})
const addProduct = (price: number) => {
setTotalCount ((prevState: CountProps) => ({
totalPrice: prevState.totalPrice + price
}))
}

                
  return (
 <>

     <h1 className='title'>Our shop page</h1>
<div className = 'changeValBtn'>
    <button onClick = {() => changeVal('USD')}>USD</button>
    <button onClick = {() => changeVal('EUR')}>EUR</button>
    <button onClick = {() => changeVal('UAH')}>UAH</button>
    <button onClick = {() => changeVal('ZLT')}>ZLT</button>
    </div>
    <div className='productsWrap'>
   {
ProductsArray.map(({title, desc, price}: productsProps) => (
 <>
<ShopPageItem title = {title} desc = {desc} price = {price} valuta = {val} defineValuta = {defineValuta} addProduct = {addProduct}/>

</>

   )
 
  )
 
}

</div>
<div>
<p className = 'total'>total: {totalCount.totalPrice}</p>
</div>
</>
  )
}


export default ShopPage