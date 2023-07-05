import React from 'react'
import Timeline from './Timeline'

const About = () => {
  return (
    <>
    <p className='mr-auto my-6 underline text-3xl text-white font-bold font-poppins tracking-widest uppercase' id='about'>about me</p>
    <div className='shadow-lg rounded-r-3xl mb-6 flex flex-row  grid grid-cols-5'>
        <div className='flex flex-col items-start bg-[#5765bda1] pl-8 pr-8 pt-8 col-span-3 '>
            <span className='border-l-[6px] border-white '><p className='tracking-wider text-xl font-semibold uppercase mt-3 ml-3'>who am i?</p></span>
            <ul>
                <li className='mt-2 text-lg font-normal text-start '>I'm a Software Engineer with excilent problem solving skills and abiliity to perform well in a team, passionate about coding.</li>
                <li className='mt-2 text-lg font-normal text-start '>I love to learn new technologies through which I can pursue my knowledege and problem solving skills which matters most in daily life scenarios </li>
                <li className='mt-2 text-lg font-normal text-start '>Projects are attached below. This is not all about me just somepoints in bullet. </li>
            </ul>
            <span className='border-l-[6px] border-white mt-5'><p className='tracking-wider  text-xl font-semibold uppercase mt-3 ml-3'>Work Experience</p></span>
            <ul>
                <li className='mt-2 text-lg font-normal text-start '>Full Stack Web Developer Intern in,<a className='text-gray-900 dark:text-white-500' href='https://eminds.ai/'> Enterprise Minds Inc</a></li>
                <li className='mt-2 text-lg font-normal text-start '>01/2023 - 04/2023, Puducherry, India</li>
                <li className='mt-2 text-lg font-normal text-start '>Worked on a microservice Recruitment Management System web app. Developed responsive layouts from XD wireframes. Worked on Google TimeZone Api. Learned concepts of React.js, Node.js, Express.js & MongoDb </li>
            </ul>
        </div>


        <div className=' bg-white flex-col items-center justify-center py-3 col-span-2'>
            <Timeline/>
        </div>
    </div>
    </>
  )
}

export default About