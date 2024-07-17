




import React, { useEffect, useState } from 'react';
import styles from './CustomerTable.module.css';
import axios from 'axios';

 export default function CustomerTable() {

  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  async function getData(){
    let {data} = await axios.get(`https://mai-mukhtar.github.io/api/db.json`);
    setCustomers(data.customers);
    setTransactions(data.transactions)
  }

  useEffect(() => {
   getData();
  }, [])

  

  function calculateTotalAmount(customerId) {
    const customerTransactions = transactions.filter(transaction => transaction.customer_id === customerId);
    const totalAmount = customerTransactions.reduce((total, transaction) => total + transaction.amount, 0);
    return totalAmount;
  }
  function handleFilterChange(event) {
    setFilterValue(event.target.value);
  }
  function filterCustomers() {
    if (filterValue.trim() === '') {
      return customers;
    }

    return customers.filter(customer => {
      const customerTransactions = filterTransactions(customer.id);
      return (
        customer.name && customer.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        customerTransactions.some(transaction =>
          transaction.description && transaction.description.toLowerCase().includes(filterValue.toLowerCase())
        )
      );
    });
  }



    function filterTransactions(customerId) {
      const customerTransactions = transactions.filter(transaction => transaction.customer_id === customerId);
      return customerTransactions;
    }
  
  return <>

  <div className='pt-2'>
  <input className='form-control w-50 mt-5' type="text" placeholder='search by customer Name or transaction'  value={filterValue}
            onChange={handleFilterChange} />
  </div>
  {customers.length > 0 && transactions.length > 0 ? (
  <div>
    <table className={styles.table}>
        <thead>
          <tr>
            <th>Customer id</th>
            <th>Name</th>
            <th>Transaction Amount</th>
          </tr>
        </thead>
        <tbody>
           
    
    {filterCustomers().map((customer) => {
                  return (
                    <tr key={customer.id}>
                      <td>{customer.id}</td>
                      <td>{customer.name}</td>
                      <td>{calculateTotalAmount(customer.id)}</td>
                    </tr>
                  );
                })}
         
          </tbody>
          </table>
  
  
  </div>  ) : ( <p> Loading </p>) }
  
  
  
    </>
 }
 










