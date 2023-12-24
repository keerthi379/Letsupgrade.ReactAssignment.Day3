import Product from "./Product";

function Products_list()
{
    let products = [
        {id:1,name:"Levis Bag", price:"Rs.2000", url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/819ARdIuEvS._SY695_.jpg"},
        {id:2,name:"Samsung Flip", price:"Rs.72000", url:"https://images.samsung.com/levant/smartphones/galaxy-z-flip3-5g/buy/zflip3_colorselection_phantomblack_mo.jpg"},
        {id:3,name:"Renee Lipstick", price:"Rs.350", url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/3181MSkG0pL._SX300_SY300_QL70_FMwebp_.jpg"},
        {id:4,name:"Platinum Diamond Ring", price:"Rs.21000", url:"https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61pVZGT8FTL._AC_UY1100_.jpg"}
    ]
        
    return (
        <div className='product'>

        {
            products.map((product)=>{
                return (
                    <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
                )
            })
        }

      </div>
    )
}

export default Products_list;
