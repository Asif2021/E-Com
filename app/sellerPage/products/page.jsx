import Link from "next/link";

const Products = () => {
  return (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <h1 className="text-3xl my-2 ml-4 font-bold">01 Products</h1>
              <table className="w-full text-sm text-left table-fixed">
                <thead className="text-l text-gray-700 uppercase">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Variant
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-6 py-2">Product name</td>
                    <td className="px-6 py-2">Product Description</td>
                    <td className="px-6 py-2">Product Image</td>
                    <td className="px-6 py-2">$456</td>
                    <td className="px-6 py-2">Variant</td>
                  </tr>
                </tbody>
              </table>
            </div>
       );
};

export default Products;
