//why to make static params bcz the data will be prefetch due to this

import Product from "@/app/components/Product";

// (not compulsory)
const generateStaticParams = async () => {
  const res = await fetch(
      'https://dummyjson.com/products?limit=10&skip=10&select=title,price'
  );
  const data = await res.json();
  return data.products.map((product)=> ({
    id : product.id.toSting(),
  }));
};

const getProduct = async (id) => {
  const res = await fetch(
      `https://dummyjson.com/products/${id}`
  );

  const data = await res.json();
  return data;
};

const page = async ({params}) => {
  const product = await getProduct(params.id);
  console.log(product)
  return (
    <div>
      <Product title={product.title} price={product.price} />
    </div>
  )
}

export default page
