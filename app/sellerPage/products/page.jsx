import Link from "next/link";
import { Search, CirclePlus} from "lucide-react";

const Products = () => {
  return (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <h1 className="text-3xl my-2 ml-4 font-bold">01 Products</h1>
              <div className="relative flex mx-2 gap-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block flex-1 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <Link href='/sellerPage/products/create' className="flex border text-white bg-blue-700 hover:bg-blue-500 items-center p-2 rounded-md">Create Product <CirclePlus/></Link>
            </div>
              <table className="w-full text-sm text-left table-fixed">
                <thead className="text-l text-gray-700 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                    Image                   </th>
                    <th scope="col" className="px-6 py-3">
                    Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Variant
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-2">Image of product</td>
                    <td className="px-6 py-2">Product Name</td>
                    <td className="px-6 py-2">Product Description</td>
                    <td className="px-6 py-2">$456</td>
                    <td className="px-6 py-2">Variant</td>
                    <td className="px-6 py-2">Edit, Delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
       );
};

export default Products;
