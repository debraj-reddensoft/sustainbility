"use client";

import Layout from '../Component/Layout/index'
import Link from 'next/link'
import React from 'react'


function CompanyInformation() {
  return (
    <Layout>

      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link href="/" className="text-sm flex items-center text-neutral-600">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1'>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.2441 14C13.0477 14 13.6997 13.3481 13.6997 12.5444V6.7026C13.6919 6.25438 13.4791 5.83405 13.1223 5.56291L9.17392 2.41108C8.48052 1.86297 7.50172 1.86297 6.80766 2.41108L2.87678 5.5655C2.51742 5.83664 2.30466 6.25827 2.29947 6.70846V12.5444C2.29947 13.3481 2.95137 14 3.75506 14H4.97972C5.70557 14 6.2939 13.4117 6.2939 12.6865V9.96666C6.2939 9.305 6.82972 8.7686 7.49132 8.7686H8.54152C9.20312 8.7686 9.73959 9.305 9.73959 9.96666V12.6865C9.73959 13.4117 10.3279 14 11.0531 14H12.2441Z" stroke="#525866" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
          </li>
          <li className="text-sm flex items-center text-neutral-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 15 15"><path fill="none" stroke="#8c8c8c" strokeLinecap="square" d="m5 14l7-6.5L5 1" strokeWidth="1"/></svg>
          </li>
          <li>
            <div className="text-sm flex items-center text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1024 1024" className='mr-1'>
                <path fill="#8c8c8c" d="M192 128v704h384V128zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32"/>
                <path fill="#8c8c8c" d="M256 256h256v64H256zm0 192h256v64H256zm0 192h256v64H256zm384-128h128v64H640zm0 128h128v64H640zM64 832h896v64H64z"/>
                <path fill="#8c8c8c" d="M640 384v448h192V384zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32"/>
              </svg>
              Company Information
            </div>
          </li>
        </ol>
      </nav>

      <div className='flex items-center justify-between py-4'>
        <h3 className='text-base font-medium text-black pr-2'>Offices/Branches</h3>
        <button className="bg-black px-3.5 py-2 text-white flex rounded-md text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='mr-2'>
            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/>
          </svg>
          Add Office/Branch
        </button>
      </div>

      <div className='border border-neutral-200 rounded-2xl'>
        <div className='grid grid-cols-8 items-center'>
          <div className='text-neutral-500 font-medium text-sm p-2'>LEGAL NAME</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>ADDRESS</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>OWNERSHIP</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>TOTAL AREA</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>LEASED AREA</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>OWNED AREA</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>HEAD COUNT</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>Action</div>
        </div>

        <div className='divide-y divide-neutral-200'>
          <div className='grid grid-cols-8 items-center'>
            <div className='text-black font-normal text-sm p-2'>Dazhboards Pty. Ltd</div>
            <div className='text-black font-normal text-sm p-2'>Victoria 3205, Australia</div>
            <div className='text-black font-normal text-sm p-2'>Owned</div>
            <div className='text-black font-normal text-sm p-2'>550 m2</div>
            <div className='text-neutral-500 font-normal text-sm p-2'>m2</div>
            <div className='text-black font-normal text-sm p-2'>550 m2</div>
            <div className='text-black font-normal text-sm p-2'>30</div>
            <div className='text-black font-normal text-sm p-2'>
              <button className='text-green-500 font-medium text-sm p-2 flex items-center'>
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" className='ml-1'>
                  <path fill="none" stroke="currentColor" strokeLinecap="square" d="m5 14l7-6.5L5 1" strokeWidth="1"/>
                </svg>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-8 items-center'>
            <div className='text-black font-normal text-sm p-2'>Dazhboards New Zealand</div>
            <div className='text-black font-normal text-sm p-2'>Greymouth, New Zealand</div>
            <div className='text-black font-normal text-sm p-2'>Leased</div>
            <div className='text-black font-normal text-sm p-2'>750 m2</div>
            <div className='text-neutral-500 font-normal text-sm p-2'>200 m2</div>
            <div className='text-neutral-500 font-normal text-sm p-2'>m2</div>
            <div className='text-black font-normal text-sm p-2'>15</div>
            <div className='text-black font-normal text-sm p-2'>
              <button className='text-green-500 font-medium text-sm p-2 flex items-center'>
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" className='ml-1'>
                  <path fill="none" stroke="currentColor" strokeLinecap="square" d="m5 14l7-6.5L5 1" strokeWidth="1"/>
                </svg>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-8 items-center'>
            <div className='text-black font-normal text-sm p-2'>Dazhboards Warehouse</div>
            <div className='text-black font-normal text-sm p-2'>Greymouth, New Zealand</div>
            <div className='text-black font-normal text-sm p-2'>Leased</div>
            <div className='text-black font-normal text-sm p-2'>400 m2</div>
            <div className='text-black font-normal text-sm p-2'>400 m2</div>
            <div className='text-neutral-500 font-normal text-sm p-2'>m2</div>
            <div className='text-black font-normal text-sm p-2'>0</div>
            <div className='text-black font-normal text-sm p-2'>
              <button className='text-green-500 font-medium text-sm p-2 flex items-center'>
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" className='ml-1'>
                  <path fill="none" stroke="currentColor" strokeLinecap="square" d="m5 14l7-6.5L5 1" strokeWidth="1"/>
                </svg>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-8 items-center'>
            <div className='text-black font-normal text-sm p-2'>Dazhboards Greymouth</div>
            <div className='text-black font-normal text-sm p-2'>Greymouth, New Zealand</div>
            <div className='text-black font-normal text-sm p-2'>Leased</div>
            <div className='text-black font-normal text-sm p-2'>400 m2</div>
            <div className='text-black font-normal text-sm p-2'>400 m2</div>
            <div className='text-neutral-500 font-normal text-sm p-2'>m2</div>
            <div className='text-black font-normal text-sm p-2'>0</div>
            <div className='text-black font-normal text-sm p-2'>
              <button className='text-green-500 font-medium text-sm p-2 flex items-center'>
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" className='ml-1'>
                  <path fill="none" stroke="currentColor" strokeLinecap="square" d="m5 14l7-6.5L5 1" strokeWidth="1"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between py-4 mt-12'>
        <h3 className='text-base font-medium text-black pr-2'>Vehicles</h3>
        <button className="bg-black px-3.5 py-2 text-white flex rounded-md text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='mr-2'>
            <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/>
          </svg>
          Add Vehicle
        </button>
      </div>

      <div className='border border-neutral-200 rounded-2xl'>
        <div className='grid grid-cols-8 items-center'>
          <div className='text-neutral-500 font-medium text-sm p-2'>Vehicle Model</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>Licence Plate</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>Segment</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>Fuel Type</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>Affiliated Office</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>Ownership</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>Leaser</div>
          <div className='text-neutral-500 font-medium text-sm p-2'>Action</div>
        </div>

        <div className='divide-y divide-neutral-200'>
          <div className='grid grid-cols-8 items-center'>
            <div className='text-black font-normal text-sm p-2'>Mercedes Tourismo</div>
            <div className='text-black font-normal text-sm p-2'>3PL 4TE</div>
            <div className='text-black font-normal text-sm p-2'>MPV</div>
            <div className='text-black font-normal text-sm p-2'>Gasoline</div>
            <div className='text-neutral-500 font-normal text-sm p-2'>Dazhboards Pty. Ltd</div>
            <div className='text-black font-normal text-sm p-2'>Owned</div>
            <div className='text-black font-normal text-sm p-2'>-</div>
            <div className='text-black font-normal text-sm p-2'>
              <button className='text-green-500 font-medium text-sm p-2 flex items-center'>
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" className='ml-1'>
                  <path fill="none" stroke="currentColor" strokeLinecap="square" d="m5 14l7-6.5L5 1" strokeWidth="1"/>
                </svg>
              </button>
            </div>
          </div>
          <div className='grid grid-cols-8 items-center'>
            <div className='text-black font-normal text-sm p-2'>Volvo 7900 Electric</div>
            <div className='text-black font-normal text-sm p-2'>5Y6 31-15</div>
            <div className='text-black font-normal text-sm p-2'>MPV</div>
            <div className='text-black font-normal text-sm p-2'>Electric</div>
            <div className='text-neutral-500 font-normal text-sm p-2'>Dazhboards Pty. Ltd</div>
            <div className='text-neutral-500 font-normal text-sm p-2'>Leased</div>
            <div className='text-black font-normal text-sm p-2'>ABC car Rental</div>
            <div className='text-black font-normal text-sm p-2'>
              <button className='text-green-500 font-medium text-sm p-2 flex items-center'>
                Edit
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 15 15" className='ml-1'>
                  <path fill="none" stroke="currentColor" strokeLinecap="square" d="m5 14l7-6.5L5 1" strokeWidth="1"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  )
}

export default CompanyInformation