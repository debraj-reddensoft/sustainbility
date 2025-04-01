import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { logoMain, profileDem } from "../../assets/index";
export default function Aside() {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  return (
    <aside className='w-56 text-primary border-r border-neutral-200 fixed top-0 bottom-0 left-0 bg-white'>
      <div className="p-5 border-b border-neutral-200">
        <Link href='/' className="block w-fit">
          <Image src={logoMain} alt="mission" className="" priority/>
        </Link>
      </div>
      <div className="p-5">
        <div className="flex items-center mb-5">
          <div className="size-9 shrink-0 mr-3 relative before:w-full before:block before:pt-[100%]">
            <Image src={profileDem} alt="mission" className="size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-full" priority/>
          </div>
          <div>
            <h5 className="text-sm font-medium text-black">Dazhboards Pt</h5>
            <p className="text-xs font-normal text-zinc-600">Sydney, Australia.</p>
          </div>
        </div>
        <h4 className="text-xs font-medium text-zinc-600 mb-2.5">MAIN</h4>
        <ul className="space-y-2 mb-4">
          <li>
            <Link href="/" className="flex items-center px-3 py-2 bg-[#27A376] text-white text-sm font-medium rounded-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.3051 17.5C16.3096 17.5 17.1246 16.6851 17.1246 15.6805V8.37825C17.1148 7.81797 16.8488 7.29256 16.4029 6.95364L11.4674 3.01386C10.6006 2.32871 9.37715 2.32871 8.50956 3.01386L3.59596 6.95688C3.14676 7.29581 2.88081 7.82284 2.87433 8.38558V15.6805C2.87433 16.6851 3.6892 17.5 4.69381 17.5H6.22465C7.13195 17.5 7.86737 16.7646 7.86737 15.8581V12.4583C7.86737 11.6312 8.53715 10.9607 9.36415 10.9607H10.6769C11.5039 10.9607 12.1745 11.6312 12.1745 12.4583V15.8581C12.1745 16.7646 12.9099 17.5 13.8164 17.5H15.3051Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <button type="button" onClick={() => toggleMenu("environment")} className="flex items-center px-3 py-2 bg-white text-zinc-700 text-sm font-medium rounded-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.92465 3.00452C6.33836 3.00452 4.24152 5.10136 4.24152 7.68767C4.24152 10.274 6.33836 12.3708 8.92465 12.3708C11.511 12.3708 13.6078 10.274 13.6078 7.68767C13.6078 5.10136 11.511 3.00452 8.92465 3.00452Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.73291 12.8839C6.60028 15.7513 11.2495 15.7513 14.1168 12.8839C16.9843 10.0166 16.9843 5.36737 14.1168 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.92499 15.0488V17.1046" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.1106 17.1038H5.75763" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Environment
            </button>
            <ul className={`${openMenu === "environment" ? "block" : "hidden"} border-l border-neutral-200 pl-3 space-y-2 py-1 ml-6`}>
              <li>
                <Link href="/environment" className="text-sm font-normal text-zinc-600 relative block hover:text-zinc-800 hover:before:block hover:before:w-1 hover:before:bg-zinc-300 hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:-left-[14.5px] hover:before:rounded-full">GHG Emmissions</Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-normal text-zinc-600 relative block hover:text-zinc-800 hover:before:block hover:before:w-1 hover:before:bg-zinc-300 hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:-left-[14.5px] hover:before:rounded-full">Energy</Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-normal text-zinc-600 relative block hover:text-zinc-800 hover:before:block hover:before:w-1 hover:before:bg-zinc-300 hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:-left-[14.5px] hover:before:rounded-full">Waste</Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-normal text-zinc-600 relative block hover:text-zinc-800 hover:before:block hover:before:w-1 hover:before:bg-zinc-300 hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:-left-[14.5px] hover:before:rounded-full">Biodiversity</Link>
              </li>
              <li>
                <Link href="/company-lnformation" className="text-sm font-normal text-zinc-600 relative block hover:text-zinc-800 hover:before:block hover:before:w-1 hover:before:bg-zinc-300 hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:-left-[14.5px] hover:before:rounded-full">Procurement</Link>
              </li>
            </ul>
          </li>
          <li>
            <button onClick={() => toggleMenu("community")} type="button" className="flex items-center px-3 py-2 bg-white text-zinc-700 text-sm font-medium rounded-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M14.9064 9.08069C16.0689 8.91735 16.9639 7.92069 16.9664 6.71319C16.9664 5.52319 16.0989 4.53652 14.9614 4.34985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.4404 11.8752C17.5663 12.0436 18.3521 12.4377 18.3521 13.2502C18.3521 13.8094 17.9821 14.1727 17.3838 14.4011" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.90559 12.2198C7.22726 12.2198 4.93976 12.6257 4.93976 14.2465C4.93976 15.8665 7.21309 16.284 9.90559 16.284C12.5839 16.284 14.8706 15.8823 14.8706 14.2607C14.8706 12.639 12.5981 12.2198 9.90559 12.2198Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.90557 9.90663C11.6631 9.90663 13.0881 8.48246 13.0881 6.72413C13.0881 4.96663 11.6631 3.54163 9.90557 3.54163C8.14807 3.54163 6.72305 4.96663 6.72305 6.72413C6.7164 8.47579 8.13057 9.90079 9.88224 9.90663H9.90557Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.90399 9.08069C3.74066 8.91735 2.84649 7.92069 2.84399 6.71319C2.84399 5.52319 3.71149 4.53652 4.84899 4.34985" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.36992 11.8752C2.24409 12.0436 1.45825 12.4377 1.45825 13.2502C1.45825 13.8094 1.82825 14.1727 2.42659 14.4011" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Community
            </button>
            <ul className={`${openMenu === "community" ? "block" : "hidden"} border-l border-neutral-200 pl-3 space-y-2 py-1 ml-6`}>
              <li>
                <Link href="#" className="text-sm font-normal text-zinc-600 relative block hover:text-zinc-800 hover:before:block hover:before:w-1 hover:before:bg-zinc-300 hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:-left-[14.5px] hover:before:rounded-full">Employees</Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-normal text-zinc-600 relative block hover:text-zinc-800 hover:before:block hover:before:w-1 hover:before:bg-zinc-300 hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:-left-[14.5px] hover:before:rounded-full">Local Engagement & Cultural Heritage</Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-normal text-zinc-600 relative block hover:text-zinc-800 hover:before:block hover:before:w-1 hover:before:bg-zinc-300 hover:before:h-full hover:before:absolute hover:before:top-0 hover:before:-left-[14.5px] hover:before:rounded-full">Visitors</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/goal-manager" className="flex items-center px-3 py-2 bg-white text-zinc-700 text-sm font-medium rounded-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M16.6067 10.6227C16.6067 6.72683 13.4484 3.56934 9.55336 3.56934C5.65751 3.56934 2.49921 6.72683 2.49921 10.6227C2.49921 14.5185 5.65751 17.676 9.55336 17.676C13.4484 17.676 16.6067 14.5185 16.6067 10.6227Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3741 10.6226C13.3741 8.51175 11.6631 6.80176 9.55398 6.80176C7.44402 6.80176 5.73322 8.51175 5.73322 10.6226C5.73322 12.7317 7.44402 14.4426 9.55398 14.4426C11.6631 14.4426 13.3741 12.7317 13.3741 10.6226Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.7391 4.55492L9.77246 10.5224M15.7391 4.55492H17.5008M15.7391 4.55492V2.79492" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Goal Manager
            </Link>
          </li>
        </ul>
        <h4 className="text-xs font-medium text-zinc-600 mb-2.5">OTHER</h4>
        <ul className="space-y-2">
          <li>
            <Link href="/company-details" className="flex items-center px-3 py-2 bg-white text-zinc-700 text-sm font-medium rounded-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.3392 6.35305L16.8205 5.45298C16.3817 4.69138 15.4092 4.42864 14.6466 4.86564C14.2835 5.07949 13.8504 5.14017 13.4425 5.03428C13.0347 4.92839 12.6858 4.66464 12.4727 4.30118C12.3355 4.07017 12.2619 3.80704 12.2591 3.53841C12.2714 3.10773 12.109 2.69038 11.8086 2.38143C11.5083 2.07249 11.0957 1.89826 10.6649 1.89844H9.61987C9.19776 1.89844 8.79305 2.06664 8.49528 2.36583C8.19752 2.66502 8.03126 3.07053 8.03329 3.49264C8.02078 4.36415 7.31068 5.06405 6.43909 5.06396C6.17046 5.06117 5.90733 4.98749 5.67631 4.85038C4.91367 4.41339 3.94121 4.67612 3.5024 5.43772L2.94557 6.35305C2.50729 7.1137 2.76645 8.08555 3.52528 8.52697C4.01854 8.81174 4.32239 9.33803 4.32239 9.90759C4.32239 10.4771 4.01854 11.0034 3.52528 11.2882C2.76742 11.7267 2.50797 12.6961 2.94557 13.4545L3.47189 14.3622C3.67749 14.7332 4.02245 15.007 4.43045 15.1229C4.83844 15.2389 5.27582 15.1875 5.6458 14.9801C6.00952 14.7678 6.44294 14.7097 6.84973 14.8185C7.25653 14.9274 7.60298 15.1942 7.81209 15.5598C7.9492 15.7908 8.02288 16.0539 8.02567 16.3225C8.02567 17.203 8.73941 17.9167 9.61987 17.9167H10.6649C11.5424 17.9167 12.2549 17.2076 12.2591 16.3302C12.257 15.9067 12.4243 15.5001 12.7238 15.2006C13.0232 14.9012 13.4298 14.7339 13.8533 14.736C14.1213 14.7431 14.3833 14.8165 14.6161 14.9495C15.3767 15.3878 16.3485 15.1287 16.79 14.3698L17.3392 13.4545C17.5517 13.0896 17.6101 12.6551 17.5013 12.247C17.3925 11.839 17.1255 11.4912 16.7595 11.2806C16.3934 11.07 16.1264 10.7222 16.0176 10.3142C15.9088 9.90613 15.9672 9.47156 16.1797 9.10668C16.318 8.86532 16.5181 8.66521 16.7595 8.52697C17.5137 8.08579 17.7723 7.11962 17.3392 6.36068V6.35305Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.1462 12.1044C11.3595 12.1044 12.343 11.1209 12.343 9.90761C12.343 8.69435 11.3595 7.71082 10.1462 7.71082C8.93294 7.71082 7.9494 8.69435 7.9494 9.90761C7.9494 11.1209 8.93294 12.1044 10.1462 12.1044Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Settings
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center px-3 py-2 bg-white text-zinc-700 text-sm font-medium rounded-lg">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M2.5 10C2.5 14.1416 5.85757 17.5 10 17.5C14.1424 17.5 17.5 14.1416 17.5 10C17.5 5.85757 14.1424 2.5 10 2.5C5.85757 2.5 2.5 5.85757 2.5 10Z" fill="white" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.0048 13.0777V9.49466M10 6.96188V6.90918" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Help
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}