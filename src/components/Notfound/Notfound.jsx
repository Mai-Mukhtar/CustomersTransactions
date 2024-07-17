import React from 'react'
import notFound from '../../assets/img/error-page-not-found-vector-27898543.jpg'
export default function Notfound() {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center  m-auto'>
    <img src={notFound} alt="Page not found " className='w-75'/>
  </div>
  )
}
