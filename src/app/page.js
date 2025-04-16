"use client";
import { Layout } from "./Component/index";
import { useState } from "react";
import SustainabilityScore from "./Component/Widgets/HomePage/SustainabilityScore";
import PerformanceOverTime from "./Component/Widgets/HomePage/PerformanceOverTime";
import Environment from "./Component/Widgets/HomePage/Environment";
import Community from "./Component/Widgets/HomePage/Community";
import Energy from "./Component/Widgets/HomePage/Energy";
import Waste from "./Component/Widgets/HomePage/Waste";
import SustomSelectDropdown from "./Component/Widgets/SustomSelectDropdown";
export default function Home() {
  const tabs = [
    "All Branches",
    "Dazhboards Pty Ltd",
    "Greymouth New Zealand",
    "Dazhboards Greymouth",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeTabsTwo, setActiveTabTwo] = useState("environment");
  
  return (
    <Layout>

      <div>

        <div className="flex pb-7">
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-xs font-medium rounded-full bg-white ${activeTab === tab ? "shadow-lg shadow-neutral-300 text-black" : "text-zinc-500"}`}>
              {tab.toUpperCase()}
            </button>
          ))}
          <div className="flex space-x-4 ml-auto">
            <button className="border border-neutral-200 rounded-md text-black text-xs font-normal px-3 py-1.5 flex items-center bg-[#27A376]/10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 13V2L20 6L12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.55 10.2299C21.0821 11.8701 21.1319 13.6286 20.6934 15.2962C20.255 16.9638 19.3466 18.4704 18.0766 19.6366C16.8065 20.8029 15.2281 21.5797 13.5292 21.8748C11.8304 22.1698 10.0825 21.9706 8.49356 21.3008C6.90464 20.6311 5.54156 19.519 4.56649 18.0968C3.59142 16.6747 3.04541 15.0024 2.99341 13.2789C2.94142 11.5553 3.38563 9.85316 4.2732 8.37483C5.16077 6.8965 6.45434 5.70425 8 4.93994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 10C7.49891 10.667 7.17268 11.4488 7.05105 12.2742C6.92941 13.0996 7.01624 13.9422 7.30361 14.7254C7.59098 15.5087 8.06976 16.2075 8.69633 16.7584C9.32291 17.3092 10.0774 17.6945 10.8909 17.8792C11.7045 18.0638 12.5514 18.042 13.3544 17.8156C14.1573 17.5892 14.8909 17.1655 15.4882 16.5831C16.0855 16.0007 16.5276 15.278 16.7742 14.481C17.0208 13.684 17.0641 12.838 16.9 12.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Set Goals
            </button>
            <button className="border border-neutral-200 rounded-md text-white text-xs font-normal px-3 py-1.5 flex items-center bg-[#27A376]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12.5 3.11816C14.5405 3.11816 16.5204 3.81155 18.1151 5.08462C19.7098 6.35769 20.8245 8.13486 21.2764 10.1247C21.7284 12.1145 21.4908 14.1988 20.6026 16.0359C19.7143 17.8729 18.2282 19.3536 16.3879 20.235C14.5477 21.1165 12.4625 21.3465 10.4743 20.8872C8.48617 20.428 6.7131 19.3067 5.4459 17.7074C4.17869 16.1081 3.49257 14.1256 3.50006 12.0851C3.50755 10.0446 4.2082 8.06727 5.48712 6.47729" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12.5 6.61816C11.4361 6.61816 10.395 6.92673 9.50295 7.50647C8.61088 8.08621 7.9061 8.91224 7.47401 9.88445C7.04193 10.8567 6.9011 11.9333 7.06858 12.984C7.23606 14.0346 7.70466 15.0141 8.4176 15.8038C9.13055 16.5935 10.0572 17.1595 11.0853 17.4331C12.1134 17.7068 13.1989 17.6763 14.21 17.3456C15.2212 17.0148 16.1147 16.3978 16.7824 15.5695C17.45 14.7411 17.863 13.7369 17.9714 12.6785" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12.4998 14.1182C12.8866 14.1182 13.2652 14.0059 13.5896 13.7951C13.914 13.5843 14.1703 13.2839 14.3274 12.9304C14.4845 12.5769 14.5357 12.1854 14.4748 11.8033C14.4139 11.4213 14.2435 11.0651 13.9843 10.7779C13.725 10.4908 13.388 10.285 13.0142 10.1854C12.6403 10.0859 12.2456 10.097 11.8779 10.2173" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              View insight
            </button>
          </div>
        </div>

        <div className="flex items-center gap-x-6">
          <div className="flex items-center relative grow">
            <button className="text-zinc-600 size-5 bg-transparent absolute top-1/2 -translate-1/2 left-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 2.5C12.976 2.5 16 5.524 16 9.25C16 12.976 12.976 16 9.25 16C5.524 16 2.5 12.976 2.5 9.25C2.5 5.524 5.524 2.5 9.25 2.5ZM9.25 14.5C12.1502 14.5 14.5 12.1502 14.5 9.25C14.5 6.349 12.1502 4 9.25 4C6.349 4 4 6.349 4 9.25C4 12.1502 6.349 14.5 9.25 14.5ZM15.6137 14.5532L17.7355 16.6742L16.6742 17.7355L14.5532 15.6137L15.6137 14.5532Z" fill="currentColor" />
              </svg>
            </button>
            <input className="block w-full text-sm text-zinc-900 font-medium py-2.5 pr-2.5 pl-8 border border-neutral-200 rounded-md outline-0" type="search" placeholder="Search..." />
          </div>
          <div className="flex items-center border border-neutral-200 rounded-md p-0.5">
            <div className="border-r border-neutral-200">
              <SustomSelectDropdown />
            </div>
            <div className="relative ml-2 w-64">
              <button className="flex items-center text-sm text-neutral-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="mr-2">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 4.75H6.75a3.5 3.5 0 0 0-3.5 3.5v9.5a3.5 3.5 0 0 0 3.5 3.5h10.5a3.5 3.5 0 0 0 3.5-3.5v-9.5a3.5 3.5 0 0 0-3.5-3.5m-14 4.5h17.5M7.361 4.75v-2m9.25 2v-2"/>
                </svg>
                Jan 24 - Feb 24 2023
              </button>
            </div>
          </div>
          <div>
            <button className="bg-black px-3.5 py-2 text-white flex rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="mr-1">
                <path fill="currentColor" d="M7.404 18v-1h7.254q1.556 0 2.65-1.067q1.096-1.067 1.096-2.606t-1.095-2.596q-1.096-1.058-2.651-1.058H6.916l2.965 2.965l-.708.708L5 9.173L9.173 5l.708.708l-2.965 2.965h7.742q1.963 0 3.355 1.354q1.39 1.354 1.39 3.3t-1.39 3.31T14.657 18z"/>
              </svg>
              Reset
            </button>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="mt-6">
          {activeTab === "All Branches" &&
            <>
              <div className="grid grid-cols-3 gap-6">
                <SustainabilityScore />
                <div className="col-span-2">
                  <PerformanceOverTime />
                </div>
              </div>
              <div className="mt-8">
                <p className="flex items-center text-lg font-medium text-black mb-4">Impact by Activity</p>
                <div className="flex w-fit p-1 border border-neutral-200 rounded-md">
                  <button className={`px-4 py-2 text-xs font-medium rounded-md bg-white ${activeTabsTwo === "environment" ? "shadow-md shadow-neutral-300 text-black" : "text-zinc-500"}`} onClick={() => setActiveTabTwo("environment")}>
                    Environment
                  </button>
                  <button className={`px-4 py-2 text-xs font-medium rounded-md bg-white ${activeTabsTwo === "community" ? "shadow-md shadow-neutral-300 text-black" : "text-zinc-500"}`} onClick={() => setActiveTabTwo("community")}>
                    Community
                  </button>
                </div>
          
                <div className="mt-6">
                  {activeTabsTwo === "environment" ? (
                    <Environment />
                  ) : (
                    <Community/>
                  )}
                </div>
              </div>
              <div className="mt-6">
                <Energy/>
              </div>
              <div className="mt-6">
                <Waste/>
              </div>
              <div className="mt-6">
                <PerformanceOverTime />
              </div>
            </>
          }
          
          {activeTab === "Dazhboards Pty Ltd" &&
            <p>Welcome to All Branches</p>
          }

          {activeTabsTwo === "Greymouth New Zealand" && <p> Welcome to All Branches</p> }
          {activeTabsTwo === "Dazhboards Greymouth " && <p> Welcome to All Branches</p> }

        </div>

      </div>

    </Layout>
  );
}