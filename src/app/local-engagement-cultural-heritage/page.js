"use client"
import React, { useState } from 'react'
import { Layout } from '../Component'
import Image from 'next/image';
import {localGroupIc,Trainings,Suppliers} from "../assets/index";
import SustomSelectDropdown from "../Component/Widgets/SustomSelectDropdown";
import LineCurve from "../Component/Widgets/LineCurve";
export default function Page() {

  return (
    <Layout>

      <div className='space-y-6'>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center relative grow">
            <button className="text-zinc-600 size-5 bg-transparent absolute top-1/2 -translate-1/2 left-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 2.5C12.976 2.5 16 5.524 16 9.25C16 12.976 12.976 16 9.25 16C5.524 16 2.5 12.976 2.5 9.25C2.5 5.524 5.524 2.5 9.25 2.5ZM9.25 14.5C12.1502 14.5 14.5 12.1502 14.5 9.25C14.5 6.349 12.1502 4 9.25 4C6.349 4 4 6.349 4 9.25C4 12.1502 6.349 14.5 9.25 14.5ZM15.6137 14.5532L17.7355 16.6742L16.6742 17.7355L14.5532 15.6137L15.6137 14.5532Z" fill="currentColor" />
              </svg>
            </button>
            <input className="block w-full text-sm text-zinc-900 font-medium py-2.5 pr-2.5 pl-8 border border-neutral-200 rounded-md outline-0" type="search" placeholder="Search..." />
          </div>
          <select className='border border-neutral-200 rounded-md w-fit text-sm font-medium text-neutral-600 px-3 py-2.5 outline-0 ml-auto'>
            <option>Lorem</option>
            <option>Leslie</option>
            <option>Dianne</option>
            <option>Annette</option>
          </select>
          <div className="flex items-center border border-neutral-200 rounded-md p-0.5">
            <div className="border-r border-neutral-200">
              <SustomSelectDropdown />
            </div>
            <div className="relative ml-2 w-64">
              <button className="flex items-center text-sm text-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 4.75H6.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h10.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5m-14 4.5h17.5M7.361 4.75v-2m9.25 2v-2" />
                </svg>
                Jan 24 - Feb 24 2023
              </button>
            </div>
          </div>
          <div>
            <button className="bg-black px-3.5 py-2 text-white flex rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-1">
                <path fill="currentColor" d="M7.404 18v-1h7.254q1.556 0 2.65-1.067q1.096-1.067 1.096-2.606t-1.095-2.596q-1.096-1.058-2.651-1.058H6.916l2.965 2.965l-.708.708L5 9.173L9.173 5l.708.708l-2.965 2.965h7.742q1.963 0 3.355 1.354q1.39 1.354 1.39 3.3t-1.39 3.31T14.657 18z" />
              </svg>
              Reset
            </button>
          </div>
        </div>

        <div className='p-5 border border-neutral-200 rounded-lg'>
          <div className='flex items-center border-b border-neutral-200 pb-4'>
            <Image src={localGroupIc} alt="mission" className="mr-2 size-5" priority/>
            <h3 className='text-base text-black font-medium'>Local Engagement & Cultural Heritage</h3>
          </div>

          <div className='flex items-center space-x-3 border border-neutral-100 rounded-lg p-5 mt-4'>
            <div className='size-10 rounded-full bg-pink-100 shrink-0'></div>
            <p className='text-lg font-normal text-neutral-500'>No case reported as a violation against the rights of local/indigenous people living in the visited sites.</p>
          </div>

          <div className='flex items-center space-x-3 border border-neutral-100 rounded-lg p-5 mt-4'>
            <div className='size-10 rounded-full bg-green-100 shrink-0'></div>
            <p className='text-lg font-normal text-neutral-500'>None of the operations affect the daily lives of local people or restrict their access to basic necessities such as water, food, housing, transportation.</p>
          </div>

          <div className='flex items-center space-x-3 border border-neutral-100 rounded-lg p-5 mt-4'>
            <div className='size-10 rounded-full bg-blue-100 shrink-0'></div>
            <p className='text-lg font-normal text-neutral-500'>International and national good practice and locally agreed guidance for the management and promotion of visits to indigenous communities and culturally or historically sensitive sites are followed in order to minimize adverse impacts.</p>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-5'>
          <div className='flex items-center border border-neutral-200 p-5 rounded-xl'>
            <div className='mr-4'>
              <Image src={Trainings} alt="mission" className="size-16" priority/>
            </div>
            <div>
              <h4 className='text-2xl text-black font-semibold'>24 h</h4>
              <p className='text-base font-normal text-neutral-500'>Community Development Trainings</p>
            </div>
          </div>
          <div className='flex items-center border border-neutral-200 p-5 rounded-xl'>
            <div className='mr-4'>
              <Image src={Suppliers} alt="mission" className="size-16" priority/>
            </div>
            <div>
              <h4 className='text-2xl text-black font-semibold'>75%</h4>
              <p className='text-base font-normal text-neutral-500'>Suppliers Assessed</p>
            </div>
          </div>
          <div className='flex items-center border border-neutral-200 p-5 rounded-xl'>
            <div className='mr-4'>
              <Image src={Trainings} alt="mission" className="size-16" priority/>
            </div>
            <div>
              <h4 className='text-2xl text-black font-semibold'>58.000 AU$</h4>
              <p className='text-base font-normal text-neutral-500'>Community Development Trainings</p>
            </div>
          </div>
        </div>

        <div className='p-5 border border-neutral-200 rounded-lg'>
          <div className='border-b border-neutral-200 pb-4 mb-5 flex justify-between'>
            <div className='flex items-center'>
              <Image src={localGroupIc} alt="mission" className="mr-2 size-5" priority/>
              <h3 className='text-base text-black font-medium'>Local Procurement</h3>
            </div>
            <div className="relative ml-2 w-52 border border-neutral-200 p-2 rounded-md">
              <button className="flex items-center text-sm text-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 4.75H6.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h10.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5m-14 4.5h17.5M7.361 4.75v-2m9.25 2v-2" />
                </svg>
                1 Jun 2023 - 11 Feb 2024
              </button>
            </div>
          </div>
          <LineCurve />
        </div>

      </div>

    </Layout>
  )
}