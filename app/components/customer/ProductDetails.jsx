'use client'
import Image from 'next/image';
import { useCart } from '../../../Context/CartContext';
import { toast } from 'react-hot-toast';

const ProductDetails = ({product}) => {
      const { state, dispatch } = useCart();
      
// Find the product in the cart to get the updated stock
const cartItem = state.items.find(item => item.id === product.id);

// If product is in the cart, use its stock from the context, otherwise use productData stock
const stock = cartItem ? cartItem.stock : product.stock;

const handleDispatchProduct = () => {
  if (product.stock > 0) {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Product Added to Cart!');
  } else {
    toast.error('Product is out of stock!');
  }
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
           <button
            onClick={handleDispatchProduct}
            disabled={stock === 0}
            className={`block text-white ${stock === 0 ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}

          >
              {stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button>  
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