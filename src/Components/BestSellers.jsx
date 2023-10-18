import React from 'react'
import SellersData from '../Data/Sellers'
import  menu  from '../assets/menu.pdf'
import { Link } from 'react-router-dom'

const BestSellers = () => {
  return (
    <div className='relative  mt-10 pb-20 px-10'>
          <div className='relative flex flex-col justify-center items-center pt-20'>
            <h4 className='font-custom font-bold md:text-6xl text-5xl text-black pb-5 border-b-2 border-b-[#e93e21]'>Best Sellers</h4> 
           
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 justify-center pt-10'>
              {SellersData.map(seller => (
                <div className='mt-10 shadow-card rounded-md overflow-hidden flex flex-col gap-5' key={seller.id} >
                <div className='w-full h-48 overflow-hidden'>
                     <img src={seller.img} alt="" />
                </div>
                 <Link to="/contact-us" className="bg-primary text-white px-3 py-2 mx-4 text-center block mb-5 hover:opacity-90">
                    Order Now
                 </Link>

                </div>
              ))}
              
            </div>
            <Link to="menu" className="px-6 py-3 mt-20 bg-primary text-white hover:opacity-90 font-bold">SEE TODAY'S MENU</Link>
          </div>
    </div>
  )
}

export default BestSellers
