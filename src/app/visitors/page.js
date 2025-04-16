"use client"
import React, { useState } from 'react'
import { Layout } from '../Component'

export default function Page() {

  return (
    <Layout>
      <div className="flex pb-7 items-center">
        <h3 className='text-base font-medium text-black'>Flight Carbon Tracker (Pkm)</h3>
      </div>
      <div className="p-5 border border-neutral-200 rounded-lg">
        
        <div>
          <table className='w-full border-spacing-0'>
            <thead>
              <tr>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Month</th>
                <th className='text-sm font-normal text-zinc-500 py-3 px-5 text-center'>Staff Member</th>
                <th className='text-sm font-normal text-zinc-500 py-3 px-5 text-center'>No. of Staff</th>
                <th className='text-sm font-normal text-zinc-500 py-3 px-5 text-center'>Departure</th>
                <th className='text-sm font-normal text-zinc-500 py-3 px-5 text-center'>Layover</th>
                <th className='text-sm font-normal text-zinc-500 py-3 px-5 text-center'>Destination</th>
                <th className='text-sm font-normal text-zinc-500 py-3 px-5 text-center'>Total Km (Return Inclusive)</th>
                <th className='text-sm font-normal text-zinc-500 py-3 px-5 text-center'>Pkm</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-neutral-200'>
              <tr>
                <td className='text-sm font-medium py-3 px-5 text-black'>January</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
              </tr>
              <tr>
                <td className='text-sm font-medium py-3 px-5 text-black'>February</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
              </tr>
              <tr>
                <td className='text-sm font-medium py-3 px-5 text-black'>March</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
              </tr>
              <tr>
                <td className='text-sm font-medium py-3 px-5 text-black'>April</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
              </tr>
              <tr>
                <td className='text-sm font-bold py-3 px-5 text-black'>Total:</td>
                <td className='text-sm font-normal py-3 px-5 text-black' colSpan="6"></td>
                <td className='text-sm font-bold py-3 px-5 text-black text-center'>21873</td>
              </tr>
              <tr>
                <td className='text-sm font-medium py-3 px-5 text-black'>May</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
              </tr>
              <tr>
                <td className='text-sm font-medium py-3 px-5 text-black'>June</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
              </tr>
              <tr>
                <td className='text-sm font-medium py-3 px-5 text-black'>July</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
              </tr>
              <tr>
                <td className='text-sm font-medium py-3 px-5 text-black'>August</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
                <td className='text-sm font-normal py-3 px-5 text-black text-center'>-</td>
              </tr>
              <tr>
                <td className='text-sm font-bold py-3 px-5 text-black'>Total:</td>
                <td className='text-sm font-normal py-3 px-5 text-black' colSpan="6"></td>
                <td className='text-sm font-bold py-3 px-5 text-black text-center'>21873</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </Layout>
  )
}