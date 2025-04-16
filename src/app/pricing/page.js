"use client"
import { Layout } from '../Component'
import Image from 'next/image'
import {lightGreenCheck} from "../assets/index";
export default function Page() {

  return (
    <Layout>
      <div className="flex pb-7 items-start flex-col">
        <h3 className='text-base font-medium text-black'>Pricing</h3>
        <p className='text-sm font-normal text-neutral-500'>Manage your billing and payment details</p>
      </div>
      <div className="p-5 border border-neutral-200 rounded-lg">
        <div className='grid grid-cols-2'>
          <div>
            <div>
              <h3 className='text-lg font-semibold text-black flex mb-6'>
                <span className='bg-[#FFB988] rounded-sm w-4 mr-3'></span>
                Professional
              </h3>
              <p className='text-sm font-normal text-neutral-500'>Basic shop and tools to set up your profile</p>
            </div>
            <div className='border-y border-neutral-200 flex items-center pt-8 pb-9 my-5'>
              <h1 className='text-5xl text-black font-semibold'>
                <sup>$</sup>
                20
                <span className='text-base text-neutral-500 font-semibold ml-1'>Per month</span>
              </h1>
            </div>
            <ul className='grid grid-cols-1 gap-y-3 mb-3'>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                C02 Emissions Reporting
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Scope 1 / 2 / 3
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Reporting
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Employee Reporting
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Local & Community Reporting
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                AI Based Insights
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Customizations Available
              </li>
            </ul>
            <button className='text-sm font-medium text-black border border-neutral-200 rounded-sm p-2 block w-full'>Your plan</button>
          </div>
          <div>
            <div>
              <h3 className='text-lg font-semibold text-black flex mb-6'>
                <span className='bg-[#FFB988] rounded-sm w-4 mr-3'></span>
                Enterprise
                <span className='text-sm text-[27A376] font-medium bg-green-500/50'>Recommended</span>
              </h3>
              <p className='text-sm font-normal text-neutral-500'>Basic shop and tools to set up your profile</p>
            </div>
            <div className='border-y border-neutral-200 flex items-center pt-8 pb-9 my-5'>
              <h1 className='text-5xl text-black font-semibold'>
                <sup>$</sup>
                20
                <span className='text-base text-neutral-500 font-semibold ml-1'>Per month</span>
              </h1>
            </div>
            <ul className='grid grid-cols-1 gap-y-3 mb-3'>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                C02 Emissions Reporting
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Scope 1 / 2 / 3
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Reporting
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Employee Reporting
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Local & Community Reporting
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                AI Based Insights
              </li>
              <li className='flex text-sm text-black font-semibold'>
                <Image src={lightGreenCheck} alt="mission" className="size-6 mr-3 relative -top-0.5" priority/>
                Customizations Available
              </li>
            </ul>
            <button className='text-sm font-medium text-black border border-neutral-200 rounded-sm p-2 block w-full'>Your plan</button>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}