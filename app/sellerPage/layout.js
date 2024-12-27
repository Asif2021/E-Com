import Header from '../components/Header'
import SideNav from '../components/Sidenav';


// export const experimental_ppr = true;
 
export default function Layout({ children }) {
  return (
    <>
    <div className='h-screen'>
     <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    </div>
    </>

  );
}