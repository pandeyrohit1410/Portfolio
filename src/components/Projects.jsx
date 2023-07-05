import React from 'react'

const Projects = () => {
  return (
    <>
    <div className=' flex flex-col  bg-white' id='project'>
    <p className='items-center my-6 underline text-3xl text-black font-bold font-poppins tracking-widest uppercase' >Projects</p>
   <div className='flex flex-row justify-around'>  

   <div class="bg-white mb-5 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
    <div class="p-5 text-start">
        <a href="https://play.google.com/store/apps/details?id=com.caalm">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CAALM</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">This is an android application for Pondicherry university Students.</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> It is developed by a team of 7 people includind me.</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is deveoped using React-Native and styled component. </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We are using MongoDB for database management. </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">We are using Firebase for authentication.
</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have developed layouts from Figma design</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">The app is hosted on Google play store.</p>
        <div className='flex flex-row flex-wrap gap-3'>


        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            React-Native
        </p>
        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            JavaScript
        </p>
        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            NodeJS
        </p>
        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            MongoDB
        </p>

        </div>
    </div>
</div>


<div class="bg-white mb-5 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 ">
    <div class="p-5 text-start">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ecommerce Website</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is an Ecommerce web application</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">It is developed using MERN stack.</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have used MongoDB database.
</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have integrated JSON Web Token for authentication.</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have planed to use stripe payment method in this application.
</p>
        <div className='flex flex-row flex-wrap gap-3'>
        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            React.Js
        </p>
        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            JavaScript
        </p>
        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            Node.Js
        </p>
        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            Ecpress.Js
        </p>
        <p class="bg-transparent rounded-full  text-[#5765bda1] font-semibold  py-1 px-2 border border-[#5765bda1] rounded">
            MongoDB
        </p>
        </div>
    </div>
</div>
</div>
    </div>
    </>
  )
}

export default Projects