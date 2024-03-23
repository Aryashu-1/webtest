import React from 'react'
import { useState } from 'react'
import { BillContext } from '../Context/Bill';
function BillStore({children}) {
    let [bill,setBill]=useState(0);
  return (
    <BillContext.Provider value={[bill,setBill]}>
            {children}
    </BillContext.Provider>
  )
}

export default BillStore