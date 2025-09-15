import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
    return (
            <div className='my-10 lg:my-[20dvh] mx-auto w-3/4 lg:w-1/2 h-96 flex flex-col justify-between'>
                <Header />
                <Outlet />
                <Footer />
            </div>
    )
}

export default Layout