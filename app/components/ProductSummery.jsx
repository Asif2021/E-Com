import { Trash2 } from "lucide-react";
import { useCart } from "../../Context/CartContext";

const ProductSummery = () => {
  const { state, dispatch } = useCart();

  return (
    <>
      {state.items.length == 0 ? (
        <div className="text-2xl font-bold text-center">Your cart is empty</div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {state.items.map((item) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <img
                      src={item.image}
                      className="w-16 md:w-32 h-20 contain-size rounded-xl"
                      alt="Apple Watch"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-white bg-red-700 border border-gray-300 rounded-full focus:outline-none"
                        type="button"
                      >
                       -
                      </button>
                      <p>
                      {item.quantity}
                      </p>
                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-green-700 border border-gray-300 rounded-full"
                        type="button"
                      >
                       +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.price}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                      }
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default ProductSummery;
