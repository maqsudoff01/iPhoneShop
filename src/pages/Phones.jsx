import React from 'react'
import {ImCoinDollar} from 'react-icons/im'
import NavBar from '../components/NavBar/NavBar'

const Phones= () => {

  const Data = [
    {
      id:1,
      title:'iPad 2019',
      time:'1000$',
      location:'Canada',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Lova.Co'
    },
    {
      id:2,
      title:'iPad 2020',
      time:'1000$',
      location:'Manchestre',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Hometo'
    },
    {
      id:3,
      title:'iPad Pro',
      time:'1100$',
      location:'Florida',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Data'
    },
    {
      id:4,
      title:'iPad Pro',
      time:'1500$',
      location:'Nigeriya',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'QoravoyCity'
    },
    {
      id:5,
      title:'iPad',
      time:'1800$',
      location:'Germany',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Gitlers'
    },
    {
      id:6,
      title:'iPad Pro ',
      time:'1200$',
      location:'France',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Nopoleon'
    },
    {
      id:7,
      title:'iPad Pro Max',
      time:'1900$',
      location:'Italy',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Motodor'
    },
    {
      id:8,
      title:'iPad Pro Max ',
      time:'2000$',
      location:'Uzbekiston',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'GM Motors'
    },
    {
      id:9,
      title:'iPad Pro 2022',
      time:'2100$',
      location:'Italy',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Motodor'
    },
    {
      id:10,
      title:'iPadPro Max ',
      time:'2300$',
      location:'Italy',
      desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tikki. Readfk',
      company:'Motodor'
    },

  ]

  return (
<div>
          <NavBar />
    <div className='flex justify-center font-semibold text-4xl mt-10 mb-5 text-blue-500 '>
        <h1></h1>
      </div>

    <div>
    <div className='flex justify-center font-semibold text-4xl mt-10 mb-5 text-blue-500 '>
        <h1>Welcome to iPads page</h1>
      </div>

      <div className='jobsContainer flex gap-10 justify-center flex-wrap items-center py-10 '>

      {
        Data.map(({id,title,time,location,desc,}) => {
          return (
          <div key={id} className='group group/items singleJob w-[350px] p-[50px] bg-white rounded-[10px] hover:bg-gradient-to-r from-indigo-400 to-teal-500 shadow-lg shadow-gray-800 hover:shadow-lg'>
        
            <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-black group-hover:text-white '>{title}</h1>
              
             <span className='flex items-center gap-1 text-orange-400 '>
               <ImCoinDollar />{time}
             </span>
            </span>
    
            <div>
              <img className='w-25 flex justify-center rounded-lg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29Pzt16ZVLYVWhb_FP619kRHFwDCg6FbwAw&usqp=CAU" alt="" />
             </div>

                 <h6 className='text-gray-400'>{location}</h6> 
                 
             <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] font-semibold group-hover:text-white'>
              {desc}
             </p>
    
            <div className='flex items-center gap-2'>
              <span className='text-[14px] py-[1rem] block group-hover:text-white font-semibold'></span>
            </div>
    
            <button href='/' className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-gray-800 hover:bg-white group-hover/item:text-gray-800 group-hover:text-black'>
            Buy Now
            </button>
        
          </div>
          )
        })
      }
      </div>
    </div>
    
    <div className='mb-[4rem] mt-[6rem]'>

<h1 className='text-gray-800 flex justify-center gap-7 text-[25px] py-[rem] pb-[rem] font-bold w-[400px block] animate-bounce'>
  The value that holds us true and to account <div class=" animate-bounce">
  <img className='flex  w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS29Pzt16ZVLYVWhb_FP619kRHFwDCg6FbwAw&usqp=CAU" alt="" />
</div>
</h1>


<div className='flex justify-center mb-[4rem] gap-10 mt-[7rem] '>

<div className='grid gap-7  items-center '>
<div className='singleGrid rounded-[10px] hover:bg-blue-300 p-[1.5rem]'>
<div className='flex items-center gap-3'>
<div className='imgDiv py-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
<img className='rounded-lg' src='data:image/png;base64,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' alt="" />
</div>
<span className='font-semibold text-gray-800 text-[18px]'>
Telegram
</span>
</div>
<p className='text-gray-800 opacity-[.7] py-[1rem] font-semibold'>
You can Message Us Here: Maqsadbek0022
</p>
<button className='mb-5  bg-inherit hover:bg-teal-600 border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold transition delay-150 duration-300 ease-in-out'>Subscribe</button>

<div>
<div class="flex items-center space-x-2 text-base">
<h4 class="font-semibold text-slate-900">Contributors</h4>
<span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
</div>
<div className="mt-3 flex -space-x-2 overflow-hidden">
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
</div>
</div>


</div>
</div>




<div className='grid gap-7  items-center '>
<div className='singleGrid rounded-[10px] hover:bg-sky-200 p-[1.5rem]'>
<div className='flex items-center gap-3'>
<div className='imgDiv py-[4px] rounded-lg bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
<img className='rounded-lg' src='data:image/jpeg;base64,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' alt="" />
</div>
<span className='font-semibold text-gray-800 text-[18px]'>
Twitter
</span>
</div>
<p className='text-gray-800 opacity-[.7] py-[1rem] font-semibold'>
You can Message Us Here: Maqsudoff1
</p>
<button className='mb-5 bg-inherit hover:bg-sky-600 border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold transition delay-150 duration-300 ease-in-out'>Subscribe</button>

<div>
<div className="flex items-center space-x-2 text-base">
<h4 className="font-semibold text-slate-900">Contributors</h4>
<span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
</div>
<div className="mt-3 flex -space-x-2 overflow-hidden">
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
</div>
</div>


</div>
</div>




<div className='grid gap-7 items-center '>
<div className='singleGrid rounded-[10px] hover:bg-red-200 p-[1.5rem]'>
<div className='flex items-center gap-3'>
<div className='imgDiv py-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
<img className='rounded-lg' src='data:image/jpeg;base64,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' alt="" />
</div>
<span className='font-semibold text-gray-800 text-[18px]'>
Instagram
</span>
</div>
<p className='text-gray-800 opacity-[.7] py-[1rem] font-semibold'>
You can Message Us Here: maqsudoff_the
</p>
<button className='mb-5 bg-inherit hover:bg-pink-700 border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold transition delay-150 duration-300 ease-in-out'>Subscribe</button>

<div>
<div className="flex items-center space-x-2 text-base">
<h4 className="font-semibold text-slate-900">Contributors</h4>
<span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
</div>
<div className="mt-3 flex -space-x-2 overflow-hidden">
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
<img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
</div>
</div>


</div>
</div>

</div>
</div>
      

    </div>
  )

}

export default Phones