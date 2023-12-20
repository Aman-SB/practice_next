'use client'

import { useRouter } from "next/navigation"

const ProductButton = ({id}) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${id}`)
    }
  return (
    <button className="border-spacing-7 bg-blue-500 p-1 border-2 w-32 mx-auto" onClick={handleClick}> go to Product</button>
  )
}

export default ProductButton
