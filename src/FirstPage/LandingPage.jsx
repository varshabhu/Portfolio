  import React from 'react'
  import me from '../assets/images/me.jpeg'
  import { motion } from 'framer-motion';
  import { IoFileTrayFullSharp } from "react-icons/io5";
  import TypeWritter from './TypeWritter';
  import { Link } from 'react-router-dom';
  import { IoIosArrowDown } from "react-icons/io";
  import { MdOutgoingMail } from "react-icons/md";
  import { FaLinkedin } from "react-icons/fa";
  import { FaGithub } from "react-icons/fa";
  const LandingPage = () => {
    return (
      <section className='bg-black h-screen flex   justify-center gap-11 relative '>
          <div className='h-full w-full  flex flex-col items-center lg:items-start justify-center gap-4 ml-40 '> 
          <h2 className='text-3xl lg:text-4xl  text-slate-300'>Hi 👋 ,I am
          <span className='block tracking-wider text-4xl lg:text-6xl mt-4 text-white'>Bhuvaneshwari R</span>
          </h2>
          <h2 className='text-3xl lg:text-4xl  text-slate-300 mt-1'>
          And I'm <TypeWritter speed={100
          } words={[ "a Computer Science Engineer..."]}/>
          </h2>
          <p className='text-1xl   text-slate-300 mt-1'>
          My goal is to use my skills and knowledge to contribute 
          positively to society and the environment, as well as to grow personally and professionally.
          I value teamwork, collaboration, and learning from others, and I am always eager to take on 
          new challenges and opportunities. I believe in staying strong, productive, and healthy, and
            pursuing my dreams with dedication and persistence!!</p>

          <h2 className='text-1xl lg:text-2xl flex gap-1 text-slate-300 mt-1'>My Profile 
          <IoIosArrowDown  style={{ fontSize: '25px' }}  /></h2>  
          <Link to='/home' className='btn'>Click here</Link>

          <div className=" text-white  flex flex-row gap-10 mt-3  text-2xl">
          
          <Link to="https://discord.com/channels/1084131899896770610" className="discord" ><IoFileTrayFullSharp /></Link>
          <Link to="https://www.linkedin.com/in/bhuvaneshwari-r-4a28b8238/" className="linkedin"><FaLinkedin /></Link>
          <Link to="https://github.com/varshabhu" className="github"><FaGithub /></Link>
        </div>

          </div><div className='w-full h-full flex items-start justify-center lg:items-center'>
          <motion.img
          initial={{y:0}} animate={{y:[-15,15,-15]}}
          transition={{
              repeat:Infinity,
              duration:2,
              ease:"linear",
          }}
          src={me} className='w-auto h-auto object-contain'/>
          </div>
      </section>
    )
  }

  export default LandingPage;