import Link from "next/link";

const Orders = () => {
  return (
    <div className="relative shadow-md sm:rounded-lg">
        <h1 className="text-3xl my-2 ml-4 font-bold">01 Orders</h1>
        <table className="w-full text-sm text-left">
          <thead className="text-l text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Amount Total
              </th>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="px-6 py-2">12345667</td>
              <td className="px-6 py-2">Product name</td>
              <td className="px-6 py-2">$88</td>
              <td className="px-6 py-2">Customer Name</td>
              <td className="px-6 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
  );
};

export default Orders;
