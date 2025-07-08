import React from 'react'
import Image from 'next/image';
import { Ovo } from "next/font/google";
import { assets, infoList } from '@/assets/assets';

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

                With hands-on experience in technologies like <span className="font-medium">React</span>, <span className="font-medium">FastAPI</span>, <span className="font-medium">Node.js</span>, <span className="font-medium">Spring Boot</span>, <span className="font-medium">Docker</span>, <span className="font-medium">Kubernetes</span>, and <span className="font-medium">AWS</span>, I enjoy turning complex problems into clean, performant code. During my internship at <span className="font-semibold">RK Websoft Technologies</span>, I worked on real-time data workflows and image processing pipelines — optimizing performance and improving system accuracy to <span className="font-semibold">95%</span>.<br /><br />

                From building cross-platform mobile apps to deploying microservices with CI/CD pipelines and real-time monitoring, I thrive at the intersection of development, architecture, and user experience.<br /><br />

                When I’m not coding, I enjoy exploring emerging tech, refining my design eye, and discovering new coffee spots.
            </p>

            <ul>
                {infoList.map(({icon, iconDark, title, description},index)=> (
                    <li key={index}>
                        <Image src={icon} alt={title}/>
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </li>
                ))}
            </ul>


        </div>
      </div>



    </div>
  )
}

export default About
