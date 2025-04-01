"use client";
import { useState } from "react";
import Layout from '../Component/Layout/index'
import Image from "next/image";
import React from 'react'
import {rezdy1,edit2,reload,eyeLine,delete2,checkDual,lighthouse,iconGoogle,iconFacebook,iconEroSoftware,iconSlack,iconZoom,avatarOne,avatarTwo,avatarThree,avatarFour,avatarFive,avatarSix} from "../assets/index";

function GoalManager() {
  const tabs = [
    "Booking System",
    "Marketing Analytics",
    "Accounting",
    "Communication Channel Widget"
  ];
  const [activeTabs, setActiveTab] = useState(tabs[0]);

  const [isGrid, setIsGrid] = useState(true);
  return (
    <Layout>

      <div>
        <h4 className='text-base font-medium text-zinc-900'>Data connection</h4>
      </div>

      <div>
          <div className="flex items-center py-8">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-xs font-medium rounded-full bg-white ${activeTabs === tab ? "shadow-lg shadow-neutral-300 text-black" : "text-zinc-500"}`}>
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="border border-neutral-200 rounded-lg p-5">
            <div className="grid grid-cols-3 border-b border-neutral-200 pb-6 mb-6">
              <div className="col-span-2 flex items-center space-x-3">
                <div className="relative grow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" className="size-5 absolute top-1/2 left-3 -translate-y-1/2">
                    <path fill="#737373" fillRule="evenodd" d="M11.5 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06z" clipRule="evenodd"/>
                  </svg>
                  <input type="search" placeholder="Search..." className="text-sm text-black w-full block py-2 pr-3 pl-10 rounded-lg border-1 border-neutral-200 outline-0"/>
                </div>
                <button className="bg-black px-3.5 py-2 text-white flex rounded-md text-sm">
                  Search
                </button>
                <button className="bg-black px-3.5 py-2 text-white flex rounded-md text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className='mr-2'>
                    <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/>
                  </svg>
                  Add Booking System
                </button>
              </div>
              <div className="flex items-center space-x-3 justify-end">
                <select className="px-3 py-2 text-black text-sm font-normal cursor-pointer border border-neutral-200 rounded-md outline-0">
                  <option value="All Status">All Status</option>
                  <option value="All Status">Status 1</option>
                  <option value="All Status">Status 2</option>
                </select>
                <button className={`size-8 rounded-full flex items-center justify-center ${ isGrid ? "bg-[#27A376] text-white" : "bg-neutral-100 text-[#27A376]" }`} onClick={() => setIsGrid(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M2 5h20v2H2zm0 6h20v2H2zm20 6H2v2h20z"/>
                  </svg>
                </button>
                <button className={`size-8 rounded-full flex items-center justify-center ${ !isGrid ? "bg-[#27A376] text-white" : "bg-neutral-100 text-[#27A376]"}`} onClick={() => setIsGrid(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512">
                    <rect width="176" height="176" x="48" y="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"/>
                    <rect width="176" height="176" x="288" y="48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"/>
                    <rect width="176" height="176" x="48" y="288" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"/>
                    <rect width="176" height="176" x="288" y="288" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="20" ry="20"/>
                  </svg>
                </button>
              </div>
            </div>
            {activeTabs === "Booking System" && 
              <div className={`${isGrid ? "grid grid-cols-1 gap-4" : "grid grid-cols-2 gap-4"}`}>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4"}`}>
                  <div>
                    <h3 className="text-lg text-black font-medium flex items-center mb-4">
                      <Image src={rezdy1} alt="mission" className="size-8 mr-3" priority/>
                      Rezdy
                    </h3>
                    <p className="text-zinc-700 text-sm font-normal">Rezdy is the stress-free online booking software for tour & activity operators.</p>
                  </div>
                  <div className={`${isGrid ? "flex items-center justify-between" : "flex flex-col space-y-3 items-end"}`}>
                    <div className="flex items-center text-base text-[#0CAF60] font-normal bg-green-400/10 px-3.5 py-1 w-fit rounded-lg">
                      <Image src={checkDual} alt="mission" className="size-4 mr-2" priority/>
                      Connected
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={edit2} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={reload} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={eyeLine} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={delete2} alt="mission" className="size-4" priority/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4"}`}>
                  <div>
                    <h3 className="text-lg text-black font-medium flex items-center mb-4">
                      <Image src={lighthouse} alt="mission" className="size-8 mr-3" priority/>
                      FareHarbor
                    </h3>
                    <p className="text-zinc-700 text-sm font-normal">FareHarbor is the all-in-one booking solution and business management platform.</p>
                  </div>
                  <div className={`${isGrid ? "flex items-center justify-between" : "flex flex-col space-y-3 items-end"}`}>
                    <div className="flex items-center text-base text-[#0CAF60] font-normal bg-green-400/10 px-3.5 py-1 w-fit rounded-lg">
                      <Image src={checkDual} alt="mission" className="size-4 mr-2" priority/>
                      Connected
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={edit2} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={reload} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={eyeLine} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={delete2} alt="mission" className="size-4" priority/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4"}`}>
                  <div>
                    <h3 className="text-lg text-black font-medium flex items-center mb-4">
                      <Image src={rezdy1} alt="mission" className="size-8 mr-3" priority/>
                      Rezdy
                    </h3>
                    <p className="text-zinc-700 text-sm font-normal">Rezdy is the stress-free online booking software for tour & activity operators.</p>
                  </div>
                  <div className={`${isGrid ? "flex items-center justify-between" : "flex flex-col space-y-3 items-end"}`}>
                    <div className="flex items-center text-base text-[#0CAF60] font-normal bg-green-400/10 px-3.5 py-1 w-fit rounded-lg">
                      <Image src={checkDual} alt="mission" className="size-4 mr-2" priority/>
                      Connected
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={edit2} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={reload} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={eyeLine} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={delete2} alt="mission" className="size-4" priority/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4"}`}>
                  <div>
                    <h3 className="text-lg text-black font-medium flex items-center mb-4">
                      <Image src={lighthouse} alt="mission" className="size-8 mr-3" priority/>
                      FareHarbor
                    </h3>
                    <p className="text-zinc-700 text-sm font-normal">FareHarbor is the all-in-one booking solution and business management platform.</p>
                  </div>
                  <div className={`${isGrid ? "flex items-center justify-between" : "flex flex-col space-y-3 items-end"}`}>
                    <div className="flex items-center text-base text-[#0CAF60] font-normal bg-green-400/10 px-3.5 py-1 w-fit rounded-lg">
                      <Image src={checkDual} alt="mission" className="size-4 mr-2" priority/>
                      Connected
                    </div>
                    <div className="flex space-x-2">
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={edit2} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={reload} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={eyeLine} alt="mission" className="size-4" priority/>
                      </button>
                      <button className="border border-neutral-300 rounded-lg p-1">
                        <Image src={delete2} alt="mission" className="size-4" priority/>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            }
            {activeTabs === "Marketing Analytics" && 
              <div className={`${isGrid ? "grid grid-cols-1 gap-4" : "grid grid-cols-3 gap-4"}`}>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4 items-center" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4 items-center"}`}>
                  <div className={`${isGrid ? "flex items-center" : ""}`}>
                    <div className="size-10 flex items-center justify-center border border-neutral-200 rounded-full shrink-0 mr-3">
                      <Image src={iconGoogle} alt="mission" className="size-6" priority/>
                    </div>
                    <div>
                      <h3 className={`${isGrid ? "text-lg text-black font-medium" : "text-lg text-black font-medium mt-3 mb-2"}`}>Google Analytics</h3>
                      <p className="text-zinc-700 text-sm font-normal">Ask for, monitor, respond to and display reviews</p>
                    </div>
                  </div>
                  <div className={`${isGrid ? "flex justify-end" : ""}`}>
                    <button className={`${isGrid ? "text-base font-normal text-red-700 bg-red-400/30 px-3.5 py-1 w-fit rounded-lg" : "text-base font-normal text-red-700 bg-red-400/30 px-3.5 py-1 w-full rounded-lg"}`}>
                      Disconnect
                    </button>
                  </div>
                </div>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4 items-center" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4 items-center"}`}>
                  <div className={`${isGrid ? "flex items-center" : ""}`}>
                    <div className="size-10 flex items-center justify-center border border-neutral-200 rounded-full shrink-0 mr-3">
                      <Image src={iconGoogle} alt="mission" className="size-6" priority/>
                    </div>
                    <div>
                      <h3 className={`${isGrid ? "text-lg text-black font-medium" : "text-lg text-black font-medium mt-3 mb-2"}`}>Google Ads <span className="inline-block text-xs text-[#0CAF60] font-normal bg-green-400/10 px-2.5 py-1 w-fit rounded-full">Coming Soon</span></h3>
                      <p className="text-zinc-700 text-sm font-normal">Ask for, monitor, respond to and display reviews</p>
                    </div>
                  </div>
                  <div className={`${isGrid ? "flex justify-end" : ""}`}>
                    <button className={`${isGrid ? "text-base font-normal text-neutral-300 bg-neutral-50 px-3.5 py-1 w-fit rounded-lg pointer-events-none" : "text-base font-normal text-neutral-300 bg-neutral-50 px-3.5 py-1 w-full rounded-lg pointer-events-none"}`}>
                      Disconnect
                    </button>
                  </div>
                </div>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4 items-center" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4 items-center"}`}>
                  <div className={`${isGrid ? "flex items-center" : ""}`}>
                    <div className="size-10 flex items-center justify-center border border-neutral-200 rounded-full shrink-0 mr-3">
                      <Image src={iconFacebook} alt="mission" className="size-6" priority/>
                    </div>
                    <div>
                      <h3 className={`${isGrid ? "text-lg text-black font-medium" : "text-lg text-black font-medium mt-3 mb-2"}`}>Facebook Ads <span className="inline-block text-xs text-[#0CAF60] font-normal bg-green-400/10 px-2.5 py-1 w-fit rounded-full">Coming Soon</span></h3>
                      <p className="text-zinc-700 text-sm font-normal">Ask for, monitor, respond to and display reviews</p>
                    </div>
                  </div>
                  <div className={`${isGrid ? "flex justify-end" : ""}`}>
                    <button className={`${isGrid ? "text-base font-normal text-neutral-300 bg-neutral-50 px-3.5 py-1 w-fit rounded-lg pointer-events-none" : "text-base font-normal text-neutral-300 bg-neutral-50 px-3.5 py-1 w-full rounded-lg pointer-events-none"}`}>
                      Disconnect
                    </button>
                  </div>
                </div>
              </div>
            }
            {activeTabs === "Accounting" && 
              <div className={`${isGrid ? "grid grid-cols-1 gap-4" : "grid grid-cols-3 gap-4"}`}>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4 items-center" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4 items-center"}`}>
                  <div className={`${isGrid ? "flex items-center" : ""}`}>
                    <div className="size-10 flex items-center justify-center border border-neutral-200 rounded-full shrink-0 mr-3">
                      <Image src={iconEroSoftware} alt="mission" className="size-6" priority/>
                    </div>
                    <div>
                      <h3 className={`${isGrid ? "text-lg text-black font-medium" : "text-lg text-black font-medium mt-3 mb-2"}`}>Xero</h3>
                      <p className="text-zinc-700 text-sm font-normal">Xero is a global small business platform that connects you to all things business.</p>
                    </div>
                  </div>
                  <div className={`${isGrid ? "flex justify-end" : ""}`}>
                    <button className={`${isGrid ? "text-base font-normal text-white bg-[#27A376] px-3.5 py-1 w-fit rounded-lg" : "text-base font-normal text-white bg-[#27A376] px-3.5 py-1 w-full rounded-lg"}`}>
                      Connect
                    </button>
                  </div>
                </div>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4 items-center" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4 items-center"}`}>
                  <div className={`${isGrid ? "flex items-center" : ""}`}>
                    <div className="size-10 flex items-center justify-center border border-neutral-200 rounded-full shrink-0 mr-3">
                      <Image src={iconSlack} alt="mission" className="size-6" priority/>
                    </div>
                    <div>
                      <h3 className={`${isGrid ? "text-lg text-black font-medium" : "text-lg text-black font-medium mt-3 mb-2"}`}>Slack</h3>
                      <p className="text-zinc-700 text-sm font-normal">Slack is a new way to communicate with your team. It&apos;s faster, better organized, and more secure than email.</p>
                    </div>
                  </div>
                  <div className={`${isGrid ? "flex justify-end" : ""}`}>
                    <button className={`${isGrid ? "text-base font-normal text-white bg-[#27A376] px-3.5 py-1 w-fit rounded-lg" : "text-base font-normal text-white bg-[#27A376] px-3.5 py-1 w-full rounded-lg"}`}>
                      Connect
                    </button>
                  </div>
                </div>
                <div className={`${isGrid ? "rounded-lg p-4 border border-neutral-200 grid grid-cols-2 gap-4 items-center" : "rounded-lg p-4 border border-neutral-200 grid grid-cols-1 gap-4 items-center"}`}>
                  <div className={`${isGrid ? "flex items-center" : ""}`}>
                    <div className="size-10 flex items-center justify-center border border-neutral-200 rounded-full shrink-0 mr-3">
                      <Image src={iconZoom} alt="mission" className="size-6" priority/>
                    </div>
                    <div>
                      <h3 className={`${isGrid ? "text-lg text-black font-medium" : "text-lg text-black font-medium mt-3 mb-2"}`}>Zoom</h3>
                      <p className="text-zinc-700 text-sm font-normal">Connect, collaborate, and create with Zoom&apos;s AI powered platform.</p>
                    </div>
                  </div>
                  <div className={`${isGrid ? "flex justify-end" : ""}`}>
                    <button className={`${isGrid ? "text-base font-normal text-white bg-[#27A376] px-3.5 py-1 w-fit rounded-lg" : "text-base font-normal text-white bg-[#27A376] px-3.5 py-1 w-full rounded-lg"}`}>
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            }
            {activeTabs === "Communication Channel Widget" && 
              <div>
                <table className="w-full border-spacing-0">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-normal text-zinc-500 py-3 px-5">Name</th>
                      <th className="text-left text-sm font-normal text-zinc-500 py-3 px-5">Role</th>
                      <th className="text-left text-sm font-normal text-zinc-500 py-3 px-5">Last Login</th>
                      <th className="text-left text-sm font-normal text-zinc-500 py-3 px-5">Status</th>
                      <th className="text-left text-sm font-normal text-zinc-500 py-3 px-5">Date Created</th>
                      <th className="text-left text-sm font-normal text-zinc-500 py-3 px-5">Last Modified</th>
                      <th className="text-left text-sm font-normal text-zinc-500 py-3 px-5">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center">
                          <div className="size-10 rounded-full shrink-0 mr-3">
                            <Image src={avatarOne} alt="mission" className="size-full rounded-full" priority/>
                          </div>
                          <div>
                            <p className="text-base font-medium text-black">Wade Warren</p>
                            <p className="text-sm font-normal text-neutral-900 leading-none">jeromebell@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">Web Designer</td>
                      <td className="text-sm font-medium py-3 px-5">Today, 3:24 PM</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center text-sm text-black border border-neutral-200 rounded-lg w-fit px-2 py-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-2">
                            <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793"/>
                          </svg>
                          Active
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex space-x-3">
                          <button className="size-8 rounded-lg bg-[#27A376]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.38215 2.59046C9.87894 2.05222 10.1273 1.78309 10.3913 1.62611C11.0282 1.24734 11.8124 1.23556 12.4599 1.59504C12.7283 1.74403 12.9843 2.00558 13.4964 2.52867C14.0084 3.05176 14.2645 3.31331 14.4103 3.58745C14.7622 4.24891 14.7507 5.05002 14.3799 5.70063C14.2262 5.97027 13.9628 6.22401 13.4359 6.7315L7.16676 12.7697C6.16826 13.7314 5.66901 14.2123 5.04505 14.456C4.42109 14.6997 3.73514 14.6818 2.36325 14.6459L2.17659 14.641C1.75894 14.6301 1.55012 14.6246 1.42873 14.4869C1.30734 14.3491 1.32392 14.1364 1.35706 13.7109L1.37506 13.4799C1.46835 12.2825 1.51499 11.6838 1.74881 11.1456C1.98263 10.6075 2.38596 10.1705 3.19263 9.2965L9.38215 2.59046Z" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M8.66602 2.66699L13.3327 7.33366" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M9.33301 14.667L14.6663 14.667" stroke="#27A376" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="size-8 rounded-lg bg-[#DF1C41]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 3.66699L12.5868 10.3504C12.4813 12.058 12.4285 12.9117 12.0005 13.5256C11.7889 13.8291 11.5164 14.0852 11.2005 14.2777C10.5614 14.667 9.70599 14.667 7.99516 14.667C6.28208 14.667 5.42554 14.667 4.78604 14.2769C4.46987 14.0841 4.19733 13.8275 3.98579 13.5236C3.55792 12.9087 3.5063 12.0537 3.40307 10.3438L3 3.66699" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M2 3.66683H14M10.7038 3.66683L10.2487 2.72798C9.94638 2.10433 9.79522 1.79251 9.53448 1.59803C9.47664 1.5549 9.4154 1.51652 9.35135 1.4833C9.06261 1.3335 8.71608 1.3335 8.02302 1.3335C7.31255 1.3335 6.95732 1.3335 6.66379 1.48958C6.59873 1.52417 6.53666 1.56409 6.4782 1.60894C6.21443 1.8113 6.06709 2.13453 5.7724 2.781L5.36862 3.66683" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.33301 11L6.33301 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M9.66699 11L9.66699 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center">
                          <div className="size-10 rounded-full shrink-0 mr-3">
                            <Image src={avatarTwo} alt="mission" className="size-full rounded-full" priority/>
                          </div>
                          <div>
                            <p className="text-base font-medium text-black">Ronald Richards</p>
                            <p className="text-sm font-normal text-neutral-900 leading-none">jeromebell@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">Medical Assistant</td>
                      <td className="text-sm font-medium py-3 px-5">Today, 3:24 PM</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center text-sm text-black border border-neutral-200 rounded-lg w-fit px-2 py-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-2">
                            <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793"/>
                          </svg>
                          Active
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex space-x-3">
                          <button className="size-8 rounded-lg bg-[#27A376]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.38215 2.59046C9.87894 2.05222 10.1273 1.78309 10.3913 1.62611C11.0282 1.24734 11.8124 1.23556 12.4599 1.59504C12.7283 1.74403 12.9843 2.00558 13.4964 2.52867C14.0084 3.05176 14.2645 3.31331 14.4103 3.58745C14.7622 4.24891 14.7507 5.05002 14.3799 5.70063C14.2262 5.97027 13.9628 6.22401 13.4359 6.7315L7.16676 12.7697C6.16826 13.7314 5.66901 14.2123 5.04505 14.456C4.42109 14.6997 3.73514 14.6818 2.36325 14.6459L2.17659 14.641C1.75894 14.6301 1.55012 14.6246 1.42873 14.4869C1.30734 14.3491 1.32392 14.1364 1.35706 13.7109L1.37506 13.4799C1.46835 12.2825 1.51499 11.6838 1.74881 11.1456C1.98263 10.6075 2.38596 10.1705 3.19263 9.2965L9.38215 2.59046Z" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M8.66602 2.66699L13.3327 7.33366" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M9.33301 14.667L14.6663 14.667" stroke="#27A376" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="size-8 rounded-lg bg-[#DF1C41]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 3.66699L12.5868 10.3504C12.4813 12.058 12.4285 12.9117 12.0005 13.5256C11.7889 13.8291 11.5164 14.0852 11.2005 14.2777C10.5614 14.667 9.70599 14.667 7.99516 14.667C6.28208 14.667 5.42554 14.667 4.78604 14.2769C4.46987 14.0841 4.19733 13.8275 3.98579 13.5236C3.55792 12.9087 3.5063 12.0537 3.40307 10.3438L3 3.66699" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M2 3.66683H14M10.7038 3.66683L10.2487 2.72798C9.94638 2.10433 9.79522 1.79251 9.53448 1.59803C9.47664 1.5549 9.4154 1.51652 9.35135 1.4833C9.06261 1.3335 8.71608 1.3335 8.02302 1.3335C7.31255 1.3335 6.95732 1.3335 6.66379 1.48958C6.59873 1.52417 6.53666 1.56409 6.4782 1.60894C6.21443 1.8113 6.06709 2.13453 5.7724 2.781L5.36862 3.66683" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.33301 11L6.33301 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M9.66699 11L9.66699 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center">
                          <div className="size-10 rounded-full shrink-0 mr-3">
                            <Image src={avatarThree} alt="mission" className="size-full rounded-full" priority/>
                          </div>
                          <div>
                            <p className="text-base font-medium text-black">Jenny Wilson</p>
                            <p className="text-sm font-normal text-neutral-900 leading-none">jeromebell@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">Marketing Coordinator</td>
                      <td className="text-sm font-medium py-3 px-5">Today, 3:24 PM</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center text-sm text-black border border-neutral-200 rounded-lg w-fit px-2 py-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-2">
                            <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793"/>
                          </svg>
                          Active
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex space-x-3">
                          <button className="size-8 rounded-lg bg-[#27A376]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.38215 2.59046C9.87894 2.05222 10.1273 1.78309 10.3913 1.62611C11.0282 1.24734 11.8124 1.23556 12.4599 1.59504C12.7283 1.74403 12.9843 2.00558 13.4964 2.52867C14.0084 3.05176 14.2645 3.31331 14.4103 3.58745C14.7622 4.24891 14.7507 5.05002 14.3799 5.70063C14.2262 5.97027 13.9628 6.22401 13.4359 6.7315L7.16676 12.7697C6.16826 13.7314 5.66901 14.2123 5.04505 14.456C4.42109 14.6997 3.73514 14.6818 2.36325 14.6459L2.17659 14.641C1.75894 14.6301 1.55012 14.6246 1.42873 14.4869C1.30734 14.3491 1.32392 14.1364 1.35706 13.7109L1.37506 13.4799C1.46835 12.2825 1.51499 11.6838 1.74881 11.1456C1.98263 10.6075 2.38596 10.1705 3.19263 9.2965L9.38215 2.59046Z" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M8.66602 2.66699L13.3327 7.33366" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M9.33301 14.667L14.6663 14.667" stroke="#27A376" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="size-8 rounded-lg bg-[#DF1C41]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 3.66699L12.5868 10.3504C12.4813 12.058 12.4285 12.9117 12.0005 13.5256C11.7889 13.8291 11.5164 14.0852 11.2005 14.2777C10.5614 14.667 9.70599 14.667 7.99516 14.667C6.28208 14.667 5.42554 14.667 4.78604 14.2769C4.46987 14.0841 4.19733 13.8275 3.98579 13.5236C3.55792 12.9087 3.5063 12.0537 3.40307 10.3438L3 3.66699" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M2 3.66683H14M10.7038 3.66683L10.2487 2.72798C9.94638 2.10433 9.79522 1.79251 9.53448 1.59803C9.47664 1.5549 9.4154 1.51652 9.35135 1.4833C9.06261 1.3335 8.71608 1.3335 8.02302 1.3335C7.31255 1.3335 6.95732 1.3335 6.66379 1.48958C6.59873 1.52417 6.53666 1.56409 6.4782 1.60894C6.21443 1.8113 6.06709 2.13453 5.7724 2.781L5.36862 3.66683" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.33301 11L6.33301 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M9.66699 11L9.66699 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center">
                          <div className="size-10 rounded-full shrink-0 mr-3">
                            <Image src={avatarFour} alt="mission" className="size-full rounded-full" priority/>
                          </div>
                          <div>
                            <p className="text-base font-medium text-black">Bessie Cooper</p>
                            <p className="text-sm font-normal text-neutral-900 leading-none">jeromebell@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">Dog Trainer</td>
                      <td className="text-sm font-medium py-3 px-5">Today, 3:24 PM</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center text-sm text-black border border-neutral-200 rounded-lg w-fit px-2 py-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-2">
                            <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793"/>
                          </svg>
                          Active
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex space-x-3">
                          <button className="size-8 rounded-lg bg-[#27A376]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.38215 2.59046C9.87894 2.05222 10.1273 1.78309 10.3913 1.62611C11.0282 1.24734 11.8124 1.23556 12.4599 1.59504C12.7283 1.74403 12.9843 2.00558 13.4964 2.52867C14.0084 3.05176 14.2645 3.31331 14.4103 3.58745C14.7622 4.24891 14.7507 5.05002 14.3799 5.70063C14.2262 5.97027 13.9628 6.22401 13.4359 6.7315L7.16676 12.7697C6.16826 13.7314 5.66901 14.2123 5.04505 14.456C4.42109 14.6997 3.73514 14.6818 2.36325 14.6459L2.17659 14.641C1.75894 14.6301 1.55012 14.6246 1.42873 14.4869C1.30734 14.3491 1.32392 14.1364 1.35706 13.7109L1.37506 13.4799C1.46835 12.2825 1.51499 11.6838 1.74881 11.1456C1.98263 10.6075 2.38596 10.1705 3.19263 9.2965L9.38215 2.59046Z" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M8.66602 2.66699L13.3327 7.33366" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M9.33301 14.667L14.6663 14.667" stroke="#27A376" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="size-8 rounded-lg bg-[#DF1C41]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 3.66699L12.5868 10.3504C12.4813 12.058 12.4285 12.9117 12.0005 13.5256C11.7889 13.8291 11.5164 14.0852 11.2005 14.2777C10.5614 14.667 9.70599 14.667 7.99516 14.667C6.28208 14.667 5.42554 14.667 4.78604 14.2769C4.46987 14.0841 4.19733 13.8275 3.98579 13.5236C3.55792 12.9087 3.5063 12.0537 3.40307 10.3438L3 3.66699" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M2 3.66683H14M10.7038 3.66683L10.2487 2.72798C9.94638 2.10433 9.79522 1.79251 9.53448 1.59803C9.47664 1.5549 9.4154 1.51652 9.35135 1.4833C9.06261 1.3335 8.71608 1.3335 8.02302 1.3335C7.31255 1.3335 6.95732 1.3335 6.66379 1.48958C6.59873 1.52417 6.53666 1.56409 6.4782 1.60894C6.21443 1.8113 6.06709 2.13453 5.7724 2.781L5.36862 3.66683" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.33301 11L6.33301 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M9.66699 11L9.66699 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center">
                          <div className="size-10 rounded-full shrink-0 mr-3">
                            <Image src={avatarFive} alt="mission" className="size-full rounded-full" priority/>
                          </div>
                          <div>
                            <p className="text-base font-medium text-black">Guy Hawkins</p>
                            <p className="text-sm font-normal text-neutral-900 leading-none">jeromebell@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">President of Sales</td>
                      <td className="text-sm font-medium py-3 px-5">Today, 3:24 PM</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center text-sm text-black border border-neutral-200 rounded-lg w-fit px-2 py-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-2">
                            <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793"/>
                          </svg>
                          Active
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex space-x-3">
                          <button className="size-8 rounded-lg bg-[#27A376]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.38215 2.59046C9.87894 2.05222 10.1273 1.78309 10.3913 1.62611C11.0282 1.24734 11.8124 1.23556 12.4599 1.59504C12.7283 1.74403 12.9843 2.00558 13.4964 2.52867C14.0084 3.05176 14.2645 3.31331 14.4103 3.58745C14.7622 4.24891 14.7507 5.05002 14.3799 5.70063C14.2262 5.97027 13.9628 6.22401 13.4359 6.7315L7.16676 12.7697C6.16826 13.7314 5.66901 14.2123 5.04505 14.456C4.42109 14.6997 3.73514 14.6818 2.36325 14.6459L2.17659 14.641C1.75894 14.6301 1.55012 14.6246 1.42873 14.4869C1.30734 14.3491 1.32392 14.1364 1.35706 13.7109L1.37506 13.4799C1.46835 12.2825 1.51499 11.6838 1.74881 11.1456C1.98263 10.6075 2.38596 10.1705 3.19263 9.2965L9.38215 2.59046Z" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M8.66602 2.66699L13.3327 7.33366" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M9.33301 14.667L14.6663 14.667" stroke="#27A376" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="size-8 rounded-lg bg-[#DF1C41]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 3.66699L12.5868 10.3504C12.4813 12.058 12.4285 12.9117 12.0005 13.5256C11.7889 13.8291 11.5164 14.0852 11.2005 14.2777C10.5614 14.667 9.70599 14.667 7.99516 14.667C6.28208 14.667 5.42554 14.667 4.78604 14.2769C4.46987 14.0841 4.19733 13.8275 3.98579 13.5236C3.55792 12.9087 3.5063 12.0537 3.40307 10.3438L3 3.66699" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M2 3.66683H14M10.7038 3.66683L10.2487 2.72798C9.94638 2.10433 9.79522 1.79251 9.53448 1.59803C9.47664 1.5549 9.4154 1.51652 9.35135 1.4833C9.06261 1.3335 8.71608 1.3335 8.02302 1.3335C7.31255 1.3335 6.95732 1.3335 6.66379 1.48958C6.59873 1.52417 6.53666 1.56409 6.4782 1.60894C6.21443 1.8113 6.06709 2.13453 5.7724 2.781L5.36862 3.66683" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.33301 11L6.33301 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M9.66699 11L9.66699 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center">
                          <div className="size-10 rounded-full shrink-0 mr-3">
                            <Image src={avatarSix} alt="mission" className="size-full rounded-full" priority/>
                          </div>
                          <div>
                            <p className="text-base font-medium text-black">Floyd Miles</p>
                            <p className="text-sm font-normal text-neutral-900 leading-none">jeromebell@gmail.com</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">Nursing Assistant</td>
                      <td className="text-sm font-medium py-3 px-5">Today, 3:24 PM</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex items-center text-sm text-black border border-neutral-200 rounded-lg w-fit px-2 py-1">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-2">
                            <path d="M6 12C2.6862 12 0 9.3138 0 6C0 2.6862 2.6862 0 6 0C9.3138 0 12 2.6862 12 6C12 9.3138 9.3138 12 6 12ZM5.4018 8.4L9.6438 4.1574L8.7954 3.309L5.4018 6.7032L3.7044 5.0058L2.856 5.8542L5.4018 8.4Z" fill="#38C793"/>
                          </svg>
                          Active
                        </div>
                      </td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">12 September 2024</td>
                      <td className="text-sm font-medium py-3 px-5">
                        <div className="flex space-x-3">
                          <button className="size-8 rounded-lg bg-[#27A376]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9.38215 2.59046C9.87894 2.05222 10.1273 1.78309 10.3913 1.62611C11.0282 1.24734 11.8124 1.23556 12.4599 1.59504C12.7283 1.74403 12.9843 2.00558 13.4964 2.52867C14.0084 3.05176 14.2645 3.31331 14.4103 3.58745C14.7622 4.24891 14.7507 5.05002 14.3799 5.70063C14.2262 5.97027 13.9628 6.22401 13.4359 6.7315L7.16676 12.7697C6.16826 13.7314 5.66901 14.2123 5.04505 14.456C4.42109 14.6997 3.73514 14.6818 2.36325 14.6459L2.17659 14.641C1.75894 14.6301 1.55012 14.6246 1.42873 14.4869C1.30734 14.3491 1.32392 14.1364 1.35706 13.7109L1.37506 13.4799C1.46835 12.2825 1.51499 11.6838 1.74881 11.1456C1.98263 10.6075 2.38596 10.1705 3.19263 9.2965L9.38215 2.59046Z" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M8.66602 2.66699L13.3327 7.33366" stroke="#27A376" strokeWidth="1.5" strokeLinejoin="round"/>
                              <path d="M9.33301 14.667L14.6663 14.667" stroke="#27A376" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                          <button className="size-8 rounded-lg bg-[#DF1C41]/10 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 3.66699L12.5868 10.3504C12.4813 12.058 12.4285 12.9117 12.0005 13.5256C11.7889 13.8291 11.5164 14.0852 11.2005 14.2777C10.5614 14.667 9.70599 14.667 7.99516 14.667C6.28208 14.667 5.42554 14.667 4.78604 14.2769C4.46987 14.0841 4.19733 13.8275 3.98579 13.5236C3.55792 12.9087 3.5063 12.0537 3.40307 10.3438L3 3.66699" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M2 3.66683H14M10.7038 3.66683L10.2487 2.72798C9.94638 2.10433 9.79522 1.79251 9.53448 1.59803C9.47664 1.5549 9.4154 1.51652 9.35135 1.4833C9.06261 1.3335 8.71608 1.3335 8.02302 1.3335C7.31255 1.3335 6.95732 1.3335 6.66379 1.48958C6.59873 1.52417 6.53666 1.56409 6.4782 1.60894C6.21443 1.8113 6.06709 2.13453 5.7724 2.781L5.36862 3.66683" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M6.33301 11L6.33301 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                                <path d="M9.66699 11L9.66699 7" stroke="#DF1C41" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
          </div>
      </div>

    </Layout>
  )
}

export default GoalManager