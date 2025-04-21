// import React from 'react'
// import { AreaInterest, skills } from '../skills'
// import Navbar from '../components/Navbar'
// import Resume from '../components/Resume'
// const About = () => {

//   return (
//     <section className='max-container'>
//     <Navbar/>
//     <h1 className='head-text'>Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Bhuvaneshwari R</span></h1>
//     <div className='mt-5 flex flex-col gap-3 text-slate-500'>
//     <p>
//     👋 Hello! I'm a passionate Computer Science Engineer with a deep curiosity for both software innovation and technological problem-solving.
//     My journey in the tech world has driven me to explore the vast landscape of computing — from building interactive web applications to understanding the logic behind complex algorithms and system architectures.</p>
//     </div>
//     <div className='py-10 flex flex-col'> <h3 className='subhead-text'>My Skills</h3>
//     <div className='mt-16 flex flex-wrap gap-12' >  
//      {skills.map((e)=>(
//       <div className='block-container w-20 h-20'>
//       <div className='btn-back rounded-xl'/>
//       <div className='btn-front rounded-xl flex justify-center items-center'>
//       <img src={e.imageUrl} alt={e.name} className='w-1/2 h-1/2 object-contain'></img>
//       </div>
//       </div>
//      ))}
//     </div>
//     </div>
//     <div className='py-20  flex flex-col '> <h3 className='subhead-text'>Area of Interest</h3>
//     <div className='mt-10 relative '>
//      {
//       AreaInterest.map((e)=>(
//         <ul>
//        <li>{e.name}</li>
//        </ul>
//       ))
//      }
//     </div>
//     </div>
//     <hr className='border-slate-200' />
//      <Resume/>
    
   
//     </section>

//   )
// }

// export default About

import React from 'react';
import { AreaInterest, skills } from '../skills';
import Navbar from '../components/Navbar';
import Resume from '../components/Resume';

const About = () => {
  const hackathonCards = [
    {
      title: "Top 4 - Quant-A-Maze Hackathon",
      description:
        "Placed in the top 4 in India’s first Quantum Hackathon for a quantum computing-based optimization solution",
    },
    {
      title: "Team of Excellence in Hack-To-Future Hackathon.",
      description:
        "Recognized for developing a futuristic AI-driven solution for public safety monitoring and sentiment analysis.",
    },
  ];

  return (
    <section className='max-container'>
      <Navbar />
      <h1 className='head-text'>
        Hello, I'm{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Bhuvaneshwari R
        </span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          👋 Hello! I'm a passionate Computer Science Engineer with a deep
          curiosity for both software innovation and technological
          problem-solving. My journey in the tech world has driven me to
          explore the vast landscape of computing — from building interactive
          web applications to understanding the logic behind complex algorithms
          and system architectures.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((e) => (
            <div className='block-container w-20 h-20' key={e.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={e.imageUrl}
                  alt={e.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-20 flex flex-col'>
        <h3 className='subhead-text'>Area of Interest</h3>
        <div className='mt-10 relative'>
          {AreaInterest.map((e) => (
            <ul key={e.name}>
              <li>{e.name}</li>
            </ul>
          ))}
        </div>
      </div>

      <div className='py-10 flex flex-col'>
  <h3 className='subhead-text'>Hackathon Highlights</h3>
  <div className='mt-10 flex flex-col md:flex-row gap-6'>
    {hackathonCards.map((card, idx) => (
      <div
        key={idx}
        className='bg-white rounded-2xl shadow-md p-6 max-w-sm w-full border border-gray-200 
                   transition-transform duration-300 hover:shadow-xl hover:-translate-y-1'
      >
        <h2 className='text-lg font-semibold text-gray-800 mb-2'>
          {card.title}
        </h2>
        <p className='text-gray-600 text-sm'>{card.description}</p>
      </div>
    ))}
  </div>
</div>


      <hr className='border-slate-200' />
      <Resume />
    </section>
  );
};

export default About;
