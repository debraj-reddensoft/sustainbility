"use client"
import { Layout } from '../Component'
import Environment from "../Component/Widgets/HomePage/Environment";
export default function Page() {

  return (
    <Layout>
        <div className="flex pb-7 items-center">
          <h3 className='text-base font-medium text-black'>Employee Flight Details</h3>
        </div>
        <div className='p-5 border border-neutral-200 rounded-lg'>
            <Environment />
        </div>
        <div className='p-5 border border-neutral-200 rounded-lg mt-5'>
            <div className='flex items-center border-b border-neutral-200 pb-3 mb-5'>
              <p className='flex items-center text-sm font-medium text-black'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                  <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="#525866" strokeWidth="1.5"/>
                  <path d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z" stroke="#525866" strokeWidth="1.5"/>
                </svg>
                Locations
              </p>
              <select className='border border-neutral-200 rounded-md w-fit text-sm font-medium text-neutral-600 px-3 py-1.5 outline-0 ml-auto'>
                <option>Location</option>
                <option>Leslie</option>
                <option>Dianne</option>
                <option>Annette</option>
              </select>
              <button className='border border-neutral-200 rounded-md text-black text-sm font-normal px-3 py-1.5 flex items-center bg-transparent ml-3'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                  <path d="M5 10H15" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 5V15" stroke="#525866" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Add
              </button>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d61428.417818685964!2d-47.94048907413692!3d-15.78938834782067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlano%20Piloto!5e0!3m2!1spt-BR!2sbr!4v1569520090696!5m2!1spt-BR!2sbr" width="600" height="450" allowFullScreen="" className="map border-0 w-full grayscale rounded-lg"></iframe>
            <p className='flex items-center text-sm font-medium text-black mb-2 justify-between mt-6'>Declarations</p>
            <ul className='grid grid-cols-1 gap-y-3'>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                Impacts on wildlife wellbeing are regularly monitored and addressed
              </li>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                The integrity and connectivity of natural sites and protected areas has been preserved.
              </li>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                Threatened or protected species have not been displaced and impact on all wildlife habitats has been minimized and mitigated.
              </li>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                Action is taken to encourage visitors to support biodiversity conservation.
              </li>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                The organization engages with local conservation NGOs in its main areas of operation/visited.
              </li>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                The organization is aware of, and complies with, existing guidelines for tourist visits to natural sites.
              </li>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                The organization engages with local conservation bodies to establish/identify issues concerning visits to particular sites.
              </li>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                The organization ensures that all service providers and sites visited comply with existing local, national and international regulations and guidelines concerning wildlife interactions, including wild
              </li>
              <li className='flex items-center text-sm text-neutral-700 font-medium'>
                <input type='checkbox' className='size-3.5 mr-2' />
                The organization provides and records monetary or in-kind support for biodiversity conservation in its main areas of operation/visited.
              </li>
            </ul>
        </div>
    </Layout>
  )
}