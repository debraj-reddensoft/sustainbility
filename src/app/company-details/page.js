"use client";
import { useState } from "react";
import { Layout } from "../Component";
import Image from "next/image";
import { profileDem } from "../assets/index";
import CountryCodeSelector from "../Component/Widgets/CountryCodeSelector";
import MultiCategorySelector from "../Component/Widgets/MultiCategorySelector";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleImageDelete = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <div className="p-5 border border-neutral-200 rounded-lg">
        <div className="flex items-center max-w-xl">
          <div className="size-16 shrink-0 mr-3 relative before:w-full before:block before:pt-[100%]">
            <Image src={selectedImage || profileDem} alt="profile" className="size-full absolute top-0 right-0 bottom-0 left-0 object-cover rounded-full" priority width={64} height={64}/>
          </div>
          <div>
            <h4 className="text-base font-medium text-black mb-0.5">Upload Image</h4>
            <p className="text-sm font-normal text-zinc-600">Min 400x400px, PNG or JPEG</p>
          </div>
          <div className="flex space-x-2 ml-auto items-center">
            <input type="file" accept="image/png, image/jpeg" className="hidden" id="fileInput" onChange={handleImageChange}/>
            <button className="border border-neutral-200 rounded-md text-white text-sm font-normal px-3 py-1.5 flex items-center bg-[#27A376]" onClick={() => document.getElementById("fileInput").click()}>
              Change Image
            </button>
            <button className="border border-neutral-200 rounded-md text-black text-sm font-normal px-3 py-1.5 flex items-center bg-transparent" onClick={handleImageDelete}>
              Delete Image
            </button>
          </div>
        </div>
        <h4 className="text-base font-medium text-black my-5">General Information</h4>
        <div className="grid grid-cols-2 gap-5 p-5">
          <div className="col-span-2">
            <label className="block w-full text-sm text-black font-medium mb-2">Name of Company</label>
            <input type="text" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="Every Valid Check-in & Check-out"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Physical Address</label>
            <input type="text" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="Melbourne VIC, Australia"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Select Time Zone</label>
            <input type="text" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="Australia/Melbourne"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Registered business number</label>
            <input type="text" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="120456457854842"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Website Address</label>
            <input type="url" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="https://www.jcsoftwaresolution.com"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Contact Person</label>
            <input type="text" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="Shivam grover"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Designation</label>
            <input type="email" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="frontend mailto:developer"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Contact Number</label>
            <CountryCodeSelector/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Email</label>
            <input type="email" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="jcsoftwatesolution@gmail.com"/>
          </div>

          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Product Categories</label>
            <MultiCategorySelector/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Currency</label>
            <MultiCategorySelector/>
          </div>

          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Financial Year Start</label>
            <select className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0">
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option defaultValue>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Date Format</label>
            <input type="date" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="DD/MM/YYYY"/>
          </div>
          <div className="col-span-2">
            <label className="block w-full text-sm text-black font-medium mb-2">Currency Format</label>
            <input type="text" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="10,000.00"/>
          </div>
          <div className="col-span-2">
            <h4 className="text-base font-medium text-black py-1">Contact Person</h4>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Contact Person Name</label>
            <input type="text" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="April"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Designation</label>
            <input type="email" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="Frontend mailto:developer"/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Contact Number</label>
            <CountryCodeSelector/>
          </div>
          <div>
            <label className="block w-full text-sm text-black font-medium mb-2">Email</label>
            <input type="email" className="border border-neutral-200 rounded-lg font-normal text-sm p-3 w-full outline-0" placeholder="jcsoftwatesolution@gmail.com"/>
          </div>
          <div className="grid grid-cols-2 gap-3">
              <button className='text-center bg-white border border-neutral-200 rounded-md py-2 px-2 text-sm font-normal text-black'>Discard</button>
              <button className='text-center bg-[#27A376] border border-neutral-200 rounded-md py-2 px-2 text-sm font-normal text-white'>Apply Changes</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}