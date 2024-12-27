import RegistrationForm from '../components/RegistrationForm'
import { getUserFromCookie } from "../../lib/getUser";
import { redirect } from 'next/navigation';



const page = async () => {
  const user = await getUserFromCookie();
  
  return (
    <div className='mt-0 md:mt-10 max-w-[850px] mx-auto'>
      {/* <RegistrationForm/> */}
      {user ? redirect("/login") : <RegistrationForm/>  }
    </div>
  )
}
export default page