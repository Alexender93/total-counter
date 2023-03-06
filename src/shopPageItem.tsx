import React from 'react'


type productsProps = {
 title: string,
desc: string,
price: number,
 valuta: string,
 defineValuta: (valuta: string, price: number) => void
 addProduct: (price: number) =>  void
}

const ShopPageItem = ({title, desc, price, valuta, defineValuta, addProduct}: productsProps) => {
const def = defineValuta(valuta, price);
  return (
  
    <>
      <div>
<h1>{title}</h1>
<p>{desc}</p>
 <>{valuta}: {def} </>
 <div>
<button onClick = {
() => addProduct(Number(def))}>Buy</button>
</div>
</div>
    </>
    
  )
}

export default ShopPageItem