import { CardWrapper } from '../components/seller/card';

export const metadata = {
    title: 'Seller Page',
  };

const Page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      <CardWrapper/>
    </div>
  )
}
export default Page