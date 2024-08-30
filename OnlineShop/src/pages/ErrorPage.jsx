/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section className='w-full h-screen flex justify-center items-center'>
        <div className=" text-center">
            <h1 className='text-5xl font-bold mb-3'>404 Not Found</h1>
            <p className=' w-96 mb-5 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat aspernatur corrupti iure tenetur, provident ea alias eius tempora harum, natus enim nisi molestias ipsum? Doloribus placeat harum modi repellat ea.</p>
            <Link to={'/'} className=' border border-blue-400 px-5 py-1 bg-blue-400 text-black'>Back to Home</Link>
        </div>
    </section>
  )
}

export default ErrorPage