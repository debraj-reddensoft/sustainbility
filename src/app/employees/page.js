"use client"
import React, { useState } from 'react'
import { Layout } from '../Component'

export default function Page() {



  return (
    <Layout>
      <div className="flex pb-7 items-center">
        <h3 className='text-base font-medium text-black'>Employee</h3>
        
      </div>
      <div className="p-5 border border-neutral-200 rounded-lg">
        <div className='flex items-center pb-6 border-b border-neutral-200'>
          <div className="flex items-center relative grow max-w-xl shrink-0">
            <div className="text-zinc-600 size-5 bg-transparent absolute top-1/2 -translate-1/2 left-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 2.5C12.976 2.5 16 5.524 16 9.25C16 12.976 12.976 16 9.25 16C5.524 16 2.5 12.976 2.5 9.25C2.5 5.524 5.524 2.5 9.25 2.5ZM9.25 14.5C12.1502 14.5 14.5 12.1502 14.5 9.25C14.5 6.349 12.1502 4 9.25 4C6.349 4 4 6.349 4 9.25C4 12.1502 6.349 14.5 9.25 14.5ZM15.6137 14.5532L17.7355 16.6742L16.6742 17.7355L14.5532 15.6137L15.6137 14.5532Z" fill="currentColor"></path>
              </svg>
            </div>
            <input className='block w-full text-sm text-zinc-900 font-medium py-2.5 pr-2.5 pl-8 border border-neutral-200 rounded-md outline-0' placeholder='Search...' />
            <button className='bg-black text-white text-sm px-4 py-2 rounded-md ml-4'>Search</button>
          </div>
          <div className='flex items-center ml-auto space-x-3'>
            <select className='border border-neutral-200 rounded-md w-fit text-sm font-medium text-neutral-600 px-3 py-2 outline-0'>
              <option>Sort by</option>
              <option>Sort by 2</option>
              <option>Sort by 3</option>
              <option>Sort by 4</option>
            </select>
          </div>
        </div>
        <div>
          <table className='w-full border-spacing-0'>
            <thead>
              <tr>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Name of Employee</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Gender</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Age</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Ethnicity</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Designation</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Date Joined</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Employee Satisfaction Score</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Status</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-neutral-200'>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Jenny Wilson</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Female</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>24 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Bangladeshi</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Director</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  <div className='flex items-center'>
                    <div className='bg-neutral-200 rounded-full overflow-hidden grow'>
                      <div className='w-full h-2.5 bg-[#27A376] rounded-full'></div>
                    </div>
                    <span className='font-normal text-xs text-neutral-600 ml-2'>100%</span>
                  </div>
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-amber-600 bg-amber-700/10 before:size-2 before:bg-amber-500 before:block before:rounded-full before:mr-1.5'>Past</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Marvin McKinney</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Male</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>45 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Indian</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Chairman</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  -
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-green-600 bg-green-700/10 before:size-2 before:bg-green-500 before:block before:rounded-full before:mr-1.5'>Current</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Ronald Richards</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Male</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>50 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>English</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Managing Director</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  <div className='flex items-center'>
                    <div className='bg-neutral-200 rounded-full overflow-hidden grow'>
                      <div className='w-3/12 h-2.5 bg-blue-500 rounded-full'></div>
                    </div>
                    <span className='font-normal text-xs text-neutral-600 ml-2'>30%</span>
                  </div>
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-amber-600 bg-amber-700/10 before:size-2 before:bg-amber-500 before:block before:rounded-full before:mr-1.5'>Past</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Darrell Steward</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Male</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>31 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Welsh</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>CEO</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  <div className='flex items-center'>
                    <div className='bg-neutral-200 rounded-full overflow-hidden grow'>
                      <div className='w-3/12 h-2.5 bg-blue-500 rounded-full'></div>
                    </div>
                    <span className='font-normal text-xs text-neutral-600 ml-2'>30%</span>
                  </div>
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-green-600 bg-green-700/10 before:size-2 before:bg-green-500 before:block before:rounded-full before:mr-1.5'>Current</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Bessie Cooper</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Female</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>32 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Scottish</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Ceo</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  <div className='flex items-center'>
                    <div className='bg-neutral-200 rounded-full overflow-hidden grow'>
                      <div className='w-3/12 h-2.5 bg-blue-500 rounded-full'></div>
                    </div>
                    <span className='font-normal text-xs text-neutral-600 ml-2'>30%</span>
                  </div>
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-amber-600 bg-amber-700/10 before:size-2 before:bg-amber-500 before:block before:rounded-full before:mr-1.5'>Past</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Albert Flores</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Male</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>28 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Irish</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Secretary</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  <div className='flex items-center'>
                    <div className='bg-neutral-200 rounded-full overflow-hidden grow'>
                      <div className='w-3/12 h-2.5 bg-blue-500 rounded-full'></div>
                    </div>
                    <span className='font-normal text-xs text-neutral-600 ml-2'>30%</span>
                  </div>
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-green-600 bg-green-700/10 before:size-2 before:bg-green-500 before:block before:rounded-full before:mr-1.5'>Current</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Jane Cooper</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Female</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>22 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>British</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Vice President</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  <div className='flex items-center'>
                    <div className='bg-neutral-200 rounded-full overflow-hidden grow'>
                      <div className='w-3/12 h-2.5 bg-blue-500 rounded-full'></div>
                    </div>
                    <span className='font-normal text-xs text-neutral-600 ml-2'>30%</span>
                  </div>
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-amber-600 bg-amber-700/10 before:size-2 before:bg-amber-500 before:block before:rounded-full before:mr-1.5'>Past</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Arlene McCoy</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Female</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>24 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Gypsy</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Manager</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  <div className='flex items-center'>
                    <div className='bg-neutral-200 rounded-full overflow-hidden grow'>
                      <div className='w-3/12 h-2.5 bg-blue-500 rounded-full'></div>
                    </div>
                    <span className='font-normal text-xs text-neutral-600 ml-2'>30%</span>
                  </div>
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-green-600 bg-green-700/10 before:size-2 before:bg-green-500 before:block before:rounded-full before:mr-1.5'>Current</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
              <tr>
                <td className='text-sm font-semibold py-3 px-5 text-black'>Devon Lane</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Male</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>29 years</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Arab</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>Managing Director</td>
                <td className='text-sm font-normal py-3 px-5 text-black'>12 September 2024</td>
                <td className='py-3 px-5'>
                  <div className='flex items-center'>
                    <div className='bg-neutral-200 rounded-full overflow-hidden grow'>
                      <div className='w-3/12 h-2.5 bg-blue-500 rounded-full'></div>
                    </div>
                    <span className='font-normal text-xs text-neutral-600 ml-2'>30%</span>
                  </div>
                </td>
                <td className='py-3 px-5'>
                  <span className='flex items-center w-fit text-sm font-normal py-1.5 px-4 rounded-lg text-amber-600 bg-amber-700/10 before:size-2 before:bg-amber-500 before:block before:rounded-full before:mr-1.5'>Past</span>
                </td>
                <td>
                  <button className='border-0 rounded-lg text-sm font-normal text-white px-3 py-1.5 bg-blue-500'>View More</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </Layout>
  )
}