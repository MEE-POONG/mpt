import Image from 'next/image'
import Layout from '@/components/TheLayout'
import React, { useState } from "react";
import { Tab } from '@headlessui/react'

// export default function Ourwork() {
//   return (
//     <Layout>
//       <div className=" container mt-10 mx-auto font-font01 p-10">
//           <h1 className='text-4xl font-bold text-cyan-700'>ผลงานของเรา</h1>

//         <h3 className='mt-10 mb-5 font-semibold text-2xl'>งานออกแบบเว็บไซต์</h3>
//         <div className='grid md:grid-cols-4 grid-rows gap-4 justify-center items-center'>
//           <div className=''>
//             <div className='border border-spacing-10 rounded-xl overflow-hidden shadow-lg'>
//               <img src="images/ourworks/ow01.png" className="w-96 " alt="" />
//             </div>
//             <a href="https://www.xn--72cah0a9bls7bydzab3brky72a.com/"> 
//               <p className='text-center mt-10 hover:text-yellow-400'>click here</p>
//             </a>
//           </div>
//         </div>




//       </div>
//     </Layout>
//   )
// }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function WorkTapbar() {
  let [categories] = useState({
    WebSite: [
      {
        id: 1,
        title: 'Site Name',
        url2: 'https://www.xn--72cah0a9bls7bydzab3brky72a.com/',
        url1: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Site Name",
        url2: 'https://www.xn--72cah0a9bls7bydzab3brky72a.com/',
        url1: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    'Graphic Design': [
      {
        id: 1,
        title: 'Design Name',
        url2: 'https://www.xn--72cah0a9bls7bydzab3brky72a.com/',
        url1: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'Design Name',
        url2: 'https://www.xn--72cah0a9bls7bydzab3brky72a.com/',
        url1: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    'อื่น ๆ': [
      {
        id: 1,
        title: 'Othur work name',
        url2: 'https://www.xn--72cah0a9bls7bydzab3brky72a.com/',
        url1: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "Othur work name",
        url2: 'https://www.xn--72cah0a9bls7bydzab3brky72a.com/',
        url1: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  return (
   
      <div className='container mx-auto p-5 font-font01 mt-10'>
        <h2 className='text-3xl font-semibold mb-12'>ตัวอย่างเว็บไซต์</h2>
        <div className=" w-full px-2 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl border-b-2 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-cyan-700',
                      ' focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-cyan-900/50 text-white shadow'
                        : 'hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-cyan-900/5 p-3',
                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'
                  )}
                >
                  <div className='flex flex-col md:flex-row gap-8 justify-start items-center animate-fade-down'>
                    {posts.map((post) => (
                      <div key={post.id} className='flex text-center'>
                        <div className=' w-60'>
                          <img className='w-full' src={post.url1} alt="" />
                          <a href={post.url2} >
                            <h3 className='mt-5 hover:text-cyan-600 text-[18px]'>{post.title}</h3>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>

  )
}
