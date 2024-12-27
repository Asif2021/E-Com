import { Metadata } from 'next';
import Card from  "../components/seller/card"
import { CardWrapper } from '../components/seller/card';

export const metadata = {
    title: 'Seller Page',
  };

const page = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <CardWrapper/>
      </div>
    </div>
  )
}
export default page