"use client"
import { Layout } from '../Component'

export default function Page() {

  return (
    <Layout>
        <div className="flex pb-7 items-center">
          <h3 className='text-base font-medium text-black'>Employee Flight Details</h3>
        </div>
       <div className='p-5 border border-neutral-200 rounded-lg'>
          <table className='w-full border-spacing-0'>
            <thead>
              <tr>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Date of Flight</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Employee Name</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Booking Number</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>No of pax</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Return/Single Trip</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Departing Airport</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Arriving Airport</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Total cost of all pax</th>
                <th className='text-left text-sm font-normal text-zinc-500 py-3 px-5'>Distance Travelled</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-neutral-200'>
              <tr>
                <td className='text-sm font-medium py-3 px-5'>12 Sep 2024</td>
                <td className='text-sm font-normal py-3 px-5'>Albert Flores</td>
                <td className='text-sm font-normal py-3 px-5'>2197514831</td>
                <td className='text-sm font-normal py-3 px-5'>1</td>
                <td className='text-sm font-normal py-3 px-5'>Return</td>
                <td className='text-sm font-normal py-3 px-5'>NSN</td>
                <td className='text-sm font-normal py-3 px-5'>346.96</td>
                <td className='text-sm font-normal py-3 px-5'>551</td>
                <td className='text-sm font-normal py-3 px-5'>1043</td>
              </tr>
              <tr>
                <td className='text-sm font-medium py-3 px-5'>12 Sep 2024</td>
                <td className='text-sm font-normal py-3 px-5'>Jerome Bell</td>
                <td className='text-sm font-normal py-3 px-5'>2196872135</td>
                <td className='text-sm font-normal py-3 px-5'>1</td>
                <td className='text-sm font-normal py-3 px-5'>Return</td>
                <td className='text-sm font-normal py-3 px-5'>AKL</td>
                <td className='text-sm font-normal py-3 px-5'>ZQN</td>
                <td className='text-sm font-normal py-3 px-5'>398</td>
                <td className='text-sm font-normal py-3 px-5'>1043</td>
              </tr>
            </tbody>
          </table>
       </div>
    </Layout>
  )
}