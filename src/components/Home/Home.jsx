import React from 'react'
import CustomerTable from '../CustomerTable/CustomerTable'
import TransactionGraph from '../TransactionGraph/TransactionGraph'


export default function Home() {
  
  return (
    <div className='mt-3'>
      
      <CustomerTable/>
      
    
      <TransactionGraph/>
    </div>
  )
}
