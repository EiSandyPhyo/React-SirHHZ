/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({currentPageTitle}) => {
  return (
    <div className='w-full flex gap-3 mb-5'>
        <Link to={'/'} className="text-gray-500">Home</Link>
        <span className="text-gray-500">/</span>
        <span className="">{currentPageTitle}</span>
    </div>
  )
}

export default Breadcrumb