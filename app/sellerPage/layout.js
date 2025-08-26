import React from 'react';
import SideNav from '../components/customer/Sidenav';


// export const experimental_ppr = true;
 
export default function Layout({ children }) {
  return (  
    <React.Fragment>
    <div className='h-screen'>
     <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow py-4 md:overflow-y-auto">{children}</div>
    </div>
    </div>
    </React.Fragment>

  );
}