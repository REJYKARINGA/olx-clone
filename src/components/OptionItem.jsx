import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { IoIosSearch } from 'react-icons/io'
import { SlArrowDown } from "react-icons/sl";
import { FaPlus } from "react-icons/fa";

const OptionItem = () => {

    
  return (
  <>
    
    <div className='absolute w-full flex p-1  border-r-4 items-center justify-between z-50 border-slate-200 border-4 bg-white mt-16'>
<div className=' flex m-2 '>
       <h4 className='align-middle uppercase pr-2 text-green-950'><b>ALL CATEGORIES</b>  </h4>
       <SlArrowDown size={20} />
       </div>

       <div>
       <ul className="flex space-x-4 text-black text-sm ">
        <li><Link to="/cars" className='hover:text-green-600'>Cars</Link></li>
        <li><Link to="/motorbikes"  className='hover:text-green-600' >Motorbikes</Link></li>
        <li><Link to="/phones"  className='hover:text-green-600' >Mobile Phones</Link></li>
        <li><Link to="/clothes"  className='hover:text-green-600'>Clothes</Link></li>
        <li><Link to="/houses"  className='hover:text-green-600'>For Sales: Houses & Apartments</Link></li>
        <li><Link to="/scooters"  className='hover:text-green-600'>Scooters</Link></li>
        <li><Link to="/commercial-vehicles"  className='hover:text-green-600'>Commercial & Other Vehicles</Link></li>
        <li><Link to="/rental-houses"  className='hover:text-green-600'>For Rent: Houses & Apartments</Link></li>
      </ul>
       </div>

<div>

</div>

    </div>
    
    </>

  )
}

export default OptionItem