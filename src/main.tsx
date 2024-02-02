import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

import bgImg from "/ss_dark.png";
import lightImg from "/ss_light.png";
import searchCoverImg from "/search_cover.png";
import coverImg from "/cover_img.png";

import rect_1 from "/rect_1.png";
import rect_2 from "/rect_2.png";
import rect_3 from "/rect_3.png";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div className='h-[70vh] relative'>
      <img className='h-[60vh] top-[-0vh] rounded-md absolute left-[15vw]' src={searchCoverImg} alt="" />
      <img className='h-[60vh] top-[-0vh] rounded-md absolute right-[15vw]' src={lightImg} alt="" />

      <img className='h-[60vh] rounded-md absolute top-[20vh] left-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg' src={coverImg} alt="" />
    </div>

    <div className='h-[80vh] relative flex flex-col justify-center text-white   ml-20'>
      <h1 className='text-4xl font-bold'>Embrace the Power of Lexica AI</h1>
      <h2 className='text-xl w-[30vw] text-white opacity-80 mt-4'>Effortlessly Insert AI-Generated Images into Your Figma Boards with Our Plugin, ensuring you never have to change a tab.</h2>
      <img className='h-[60vh] absolute  right-[5%] shadow-lg rounded-md' src={searchCoverImg} alt="" />
      <img className='h-[20vh] w-[20vw] object-cover absolute top-[0%]  right-[35%] rounded-lg shadow-lg' src={rect_1} alt="" />
      <img className='h-[20vh] w-[20vw] object-cover absolute top-[30%]  right-[30vw] rounded-lg shadow-lg' src={rect_2} alt="" />
      <img className='h-[20vh] w-[20vw] object-cover absolute top-[60%]  right-[35%] rounded-lg shadow-lg' src={rect_3} alt="" />

    </div>

    <div className='h-[80vh] relative flex flex-col justify-center items-end text-white mx-20'>
      <h1 className='text-4xl font-bold w-[30vw]'>Experience Flexibility with Our Figma Plugin</h1>
      <h2 className='text-xl w-[30vw] text-white opacity-80 mt-4'>Supporting Both Light and Dark Modes, We Adapt to Your Preferred Design Environment.</h2>
      <img className='h-[60vh] absolute top-0  left-[5%] shadow-lg rounded-md' src={lightImg} alt="" />
      <img className='h-[60vh] absolute  left-[25%] shadow-lg rounded-md' src={bgImg} alt="" />

    </div>
  </React.StrictMode>
)
