import Product from "../components/Product";
import ProductButton from "../components/ProductButton";

const getProduct = async () => {
    const res = await fetch(
        'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
    );

    const data = await res.json();
    return data.products;
};

const Products = async () => {
    const products = await getProduct();
    return <div className="flex flex-col justify-center h-auto">
        <h1> Products : </h1>
        <br/>
        {
            products.length > 0  && 
            (
                products.map((items)=>{
                    const {id,title,price} = items;
                    return <>
                        <Product key={id} title = {title} price = {price}/>
                        <ProductButton key={id} id={id} />
                    </>
                    
                })
            )
        }
    </div>;
};

export default Products;
