import React from 'react'
import Image from 'next/image';
import { Ovo } from "next/font/google";
import { assets, infoList, toolsData } from '@/assets/assets';

// Initialize it (yes, again)
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});
const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20'> 
      <h4 className={`text-center mb-2 text-lg ${ovo.className}`}>Introduction</h4>
      <h2 className={`text-center text-5xl ${ovo.className}`}>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className={`mb-10 max-w-2xl text-neutral-800 dark:text-neutral-200 leading-relaxed ${ovo.className}`}>
                Hi, I’m <span className="font-semibold text-black dark:text-white">Aryan Shah</span> — a passionate <span className="font-medium text-neutral-700 dark:text-neutral-300">full-stack developer</span> and Master’s student in Computer Science at <span className="font-semibold">Northeastern University</span> (GPA: <span className="font-medium">4.0</span>). I specialize in building <span className="font-medium italic">scalable web applications</span>, <span className="font-medium italic">cloud-native systems</span>, and <span className="font-medium italic">intelligent interfaces</span> that solve real-world problems.<br /><br />

                From building cross-platform mobile apps to deploying microservices with CI/CD pipelines and real-time monitoring, I thrive at the intersection of development, architecture, and user experience.<br /><br />

                When I’m not coding, I enjoy exploring emerging tech, refining my design eye, and discovering new coffee spots.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl '>
                {infoList.map(({icon, iconDark, title, description},index)=> (
                    <li className='group border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:[background-color:#803b46] hover:-translate-y-1 duration-500 hover:shadow hover:shadow-black' key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3 group-hover:hidden'/>
                        <Image src={iconDark} alt={title} className="w-7 mt-3 hidden group-hover:block" />
                        <h3 className='my-4 font-semibold text-gray-700 group-hover:text-white'>{title}</h3>
                        <p className='text-gray-600 text-sm group-hover:text-white'>{description}</p>
                    </li>
                ))}
            </ul>

            <h4 className={`my-6 text-gray-700 ${ovo.className}`} >Tools: </h4>
            <ul className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-poiinter hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </li>
                ))}
            </ul>


        </div>
      </div>



    </div>
  )
}

export default About
