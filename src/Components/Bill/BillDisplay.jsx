import React, { useContext } from 'react'
import { BillContext } from '../Context/Bill'
import { useNavigate } from 'react-router-dom';
function BillDisplay() {
    let [bill,setbill] = useContext(BillContext)
    let navigate = useNavigate()
    function checkout(){
            console.log(bill);
            navigate('/payment')
    }
  return (
    <div className='ml-[60%] flex items-center'>
      <h1 className='text-2xl mr-3 m-4'>Total Bill : </h1>

      <h1 className='text-xl'>&#8377; {bill}</h1>
      <button className="bg-sky-600 p-2 rounded-xl m-4" onClick={checkout}>Checkout</button>
    </div>
  )
}

export default BillDisplay
