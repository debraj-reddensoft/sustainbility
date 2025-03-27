"use client"
import React, { useState } from 'react'
import { Layout } from '../Component'

export default function Page() {

  const [isRightBarOpen, setIsRightBarOpen] = useState(false);

  const handleRightBarToggle = () => {
    setIsRightBarOpen(!isRightBarOpen); // Toggle logic
  };

  const [isRightBarOpenT, setIsRightBarOpenT] = useState(false);

  const handlewRightBarToggle = () => {
    setIsRightBarOpenT(!isRightBarOpenT); // Toggle logic
  }


  return (
    <Layout>
        <div className="flex pb-7 items-center">
          <h3 className='text-base font-medium text-black'>Employee Travel</h3>
          <div className="flex space-x-2 ml-auto">
          <button onClick={handleRightBarToggle} type='button' className='border-0 bg-transparent'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0001 10.9395L15.7126 7.22699L16.7731 8.28749L13.0606 12L16.7731 15.7125L15.7126 16.773L12.0001 13.0605L8.28755 16.773L7.22705 15.7125L10.9396 12L7.22705 8.28749L8.28755 7.22699L12.0001 10.9395Z" fill="#525866"/>
          </svg>
        </button>
            <button className="border border-neutral-200 rounded-md text-black text-sm font-medium px-3 py-1.5 flex items-center bg-transparent">
              Add Task
            </button>
          </div>
        </div>
        <div className="p-5 border border-neutral-200 rounded-lg">
          <div className='flex items-center pb-6 border-b border-neutral-200'>
            <div className="flex items-center relative grow max-w-xl shrink-0">
              <div className="text-zinc-600 size-5 bg-transparent absolute top-1/2 -translate-1/2 left-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.25 2.5C12.976 2.5 16 5.524 16 9.25C16 12.976 12.976 16 9.25 16C5.524 16 2.5 12.976 2.5 9.25C2.5 5.524 5.524 2.5 9.25 2.5ZM9.25 14.5C12.1502 14.5 14.5 12.1502 14.5 9.25C14.5 6.349 12.1502 4 9.25 4C6.349 4 4 6.349 4 9.25C4 12.1502 6.349 14.5 9.25 14.5ZM15.6137 14.5532L17.7355 16.6742L16.6742 17.7355L14.5532 15.6137L15.6137 14.5532Z" fill="currentColor"></path>
                </svg>
              </div>
              <input className='block w-full text-sm text-zinc-900 font-medium py-2.5 pr-2.5 pl-8 border border-neutral-200 rounded-md outline-0' placeholder='Search...'/>
              <button className='bg-black text-white text-sm px-4 py-2 rounded-md ml-4'>Search</button>
            </div>
            <div className='flex items-center ml-auto space-x-3'>
              <select className='border border-neutral-200 rounded-md w-fit text-sm font-medium text-neutral-600 px-3 py-2 outline-0'>
                <option>All Status</option>
                <option>Leslie Alexander</option>
                <option>Dianne Russell</option>
                <option>Annette Black</option>
              </select>
              <select className='border border-neutral-200 rounded-md w-fit text-sm font-medium text-neutral-600 px-3 py-2 outline-0'>
                <option>Employee</option>
                <option>Employee1</option>
                <option>Employee2</option>
                <option>Employee3</option>
              </select>
              <button className="flex items-center text-sm text-neutral-700 py-2 border border-neutral-200 px-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 4.75H6.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h10.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5m-14 4.5h17.5M7.361 4.75v-2m9.25 2v-2"/>
                </svg>
                1 Jun 2023 - 11 Feb 2024
              </button>
            </div>
          </div>
          <div>
            <table className='w-full border-spacing-0'>
              <thead>
                <tr>
                  <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Employee Name</th>
                  <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Date of Flight</th>
                  <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Booking Reference</th>
                  <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Flight From</th>
                  <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Return</th>
                  <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Distance Travelled</th>
                  <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Total Cost</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-neutral-200'>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Robert Fox</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Naperville</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Leslie Alexander</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Orange</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Bessie Cooper</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Austin</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Cameron Williamson</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Toledo</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Dianne Russell</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Pembroke Pines</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Annette Black</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Fairfield</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Jane Cooper</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Fairfield</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Marvin McKinney</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Pembroke Pines</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
                <tr>
                  <td className='text-sm font-medium py-3 px-5'>Devon Lane</td>
                  <td className='text-sm font-normal py-3 px-5'>12 September 2024</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>Austin</td>
                  <td className='text-sm font-normal py-3 px-5'>Lorem Ipsum</td>
                  <td className='text-sm font-normal py-3 px-5'>191 km</td>
                  <td className='text-sm font-normal py-3 px-5'>$23,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={`fixed size-full bg-black/40 z-50 top-0 left-0 ${isRightBarOpen? '':'hidden'}`}>
          <div className='bg-white max-w-2xl w-full h-full ml-auto flex flex-col'>
            <div className='border-b border-neutral-200 p-5 flex items-center justify-between'>
              <h4 className='text-base font-medium text-zinc-900'>Add Data</h4>
              <button onClick={handlewRightBarToggle} type='button' className='border-0 bg-transparent'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0001 10.9395L15.7126 7.22699L16.7731 8.28749L13.0606 12L16.7731 15.7125L15.7126 16.773L12.0001 13.0605L8.28755 16.773L7.22705 15.7125L10.9396 12L7.22705 8.28749L8.28755 7.22699L12.0001 10.9395Z" fill="#525866"/>
                </svg>
              </button>
            </div>
            <div className='grid grid-cols-2 gap-5 p-5'>
              <div className='col-span-2'>
                <label className='block w-full text-sm text-black font-medium mb-2'>Employee Name</label>
                <select className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0'>
                  <option>Employee Name</option>
                  <option>Employee Name1</option>
                  <option>Employee Name2</option>
                  <option>Employee Name3</option>
                </select>
              </div>
              <div>
                <label className='block w-full text-sm text-black font-medium mb-2'>Employee Name</label>
                <input type='date' className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0' placeholder='Date of Flight'/>
              </div>
              <div>
                <label className='block w-full text-sm text-black font-medium mb-2'>Booking Reference</label>
                <input type='text' className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0' placeholder='Booking Reference'/>
              </div>
              <div>
                <label className='block w-full text-sm text-black font-medium mb-2'>Flight From</label>
                <select className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0'>
                  <option>12:00</option>
                  <option>12:30</option>
                  <option>13:00</option>
                  <option>13:30</option>
                  <option>14:00</option>
                  <option>14:30</option>
                  <option>15:00</option>
                  <option>15:30</option>
                </select>
              </div>
              <div>
                <label className='block w-full text-sm text-black font-medium mb-2'>Flight From</label>
                <select className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0'>
                  <option>12:00</option>
                  <option>12:30</option>
                  <option>13:00</option>
                  <option>13:30</option>
                  <option>14:00</option>
                  <option>14:30</option>
                  <option>15:00</option>
                  <option>15:30</option>
                </select>
              </div>
              <div>
                <label className='block w-full text-sm text-black font-medium mb-2'>One Way or Retum</label>
                <input type='text' className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0' placeholder='One Way or Return'/>
              </div>
              <div>
                <label className='block w-full text-sm text-black font-medium mb-2'>Distance Travelled</label>
                <input type='text' className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0' placeholder='Distance Travelled'/>
              </div>
              <div>
                <label className='block w-full text-sm text-black font-medium mb-2'>Cost Per Pax</label>
                <input type='text' className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0' placeholder='One Way or Return'/>
              </div>
              <div>
                <label className='block w-full text-sm text-black font-medium mb-2'>Total Cost</label>
                <input type='text' className='border border-neutral-200 rounded-lg font-normal text-sm p-2 w-full outline-0' placeholder='Total Cost'/>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-3 p-5 border-t border-neutral-200 mt-auto'>
              <button onClick={handlewRightBarToggle} className='text-center bg-white border border-neutral-200 rounded-md py-2 px-2 text-sm font-normal text-black'>Cancel</button>
              <button className='text-center bg-[#27A376] border border-neutral-200 rounded-md py-2 px-2 text-sm font-normal text-white'>Add Goal</button>
            </div>
          </div>
        </div>
    </Layout>
  )
}