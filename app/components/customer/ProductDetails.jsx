'use client'
import Image from 'next/image';
import { useCart } from '../../../Context/CartContext';
import { toast } from 'react-hot-toast';

const ProductDetails = ({product}) => {
      const { state, dispatch } = useCart();
      
      // check if product is in cart...
    const isProductInCart = state.items.some(item => item.id === product?.id);

      const handleDispatchProduct = ()=>{
        dispatch({ type: 'ADD_TO_CART', payload: product })
        toast.success('Product Added to Cart!');
        }
    
      const handleRemoveProduct = (productId)=>{
        dispatch({type:"DELETE_FROM_CART", payload:productId});
        toast.error('Product Removed from Cart!');
        }
    
      
    
  return (
    <section className="bg-white my-10">
    <div className="container max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
        <aside>
          <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
            <Image
              className="object-cover inline-block h-72"
              src={product?.image} 
              alt={product?.title} 
               width={500} 
              height={500} />
          </div>
          <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
            <a className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer">
              <Image
                className="w-14 h-14"
                src={product?.image} 
                alt={product?.title} 
                 width={100} 
                height={100}
              />
            </a>
          </div>
        </aside>
        <main>
          <h2 className="font-semibold text-2xl mb-4">{product?.title}</h2>

          <div className="flex flex-wrap items-center space-x-2 mb-2">
            {/* <div className="ratings">
              <StarRatings
                rating={5}
                starRatedColor="#ffb829"
                numberOfStars={5}
                starDimension="20px"
                starSpacing="2px"
                name="rating"
              />
            </div> */}
            {/* <span className="text-yellow-500">5</span> */}

            <svg
              width="6px"
              height="6px"
              viewBox="0 0 6 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
            </svg>

            <span className="text-green-500">Verified</span>
          </div>

          <p className="mb-4 font-semibold text-xl">{product?.price}</p>

          <p className="mb-4 text-gray-500">
           {product?.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
          {!isProductInCart ? <button
            onClick={handleDispatchProduct}
            className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button> : <button
            onClick={()=>handleRemoveProduct(product.id)}
            className="hidden md:block text-red-700 font-medium rounded-lg text-sm px-3 py-2 text-center border border-red-300 hover:bg-red-200"
          >
            Remove from Cart
          </button> }
          </div>

          <ul className="mb-5">
            <li className="mb-1">
              <b className="font-medium w-36 inline-block">Stock</b>
            </li>
            <li className="mb-1">
              <b className="font-medium w-36 inline-block">Category:</b>
              <span className="text-gray-500">shoes</span>
            </li>
            <li className="mb-1">
              <b className="font-medium w-36 inline-block">
                Seller / Brand:
              </b>
              <span className="text-gray-500">Apple</span>
            </li>
          </ul>
        </main>
      </div>

    {/* <hr />

      <div className="font-semibold">
        <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
          Other Customers Reviews
        </h1>
        </div> */}
    </div>
  </section>
  )
}
export default ProductDetails