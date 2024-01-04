import React, { useState, useEffect } from 'react';
// import Image from 'next/image'
import { AiFillLinkedin} from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';
import deved from "../public/dev-ed-wave.png"
import design from "../public/design.png"
import code from "../public/code.png"
import consulting from "../public/consulting.png"
import web1 from "../public/web1.png"
import web2 from "../public/web2.png"
import web3 from "../public/web3.png";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaReact, FaJs, FaHtml5, FaCss3 } from 'react-icons/fa';
import tailwind from "../public/Tailwind.png";
import styles from "./styles.module.css";
import classNames from 'classnames';

function App() {
  const [isMd, setIsMd] = useState(window.innerWidth > 600);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4zpu4fw', 'template_od6yzdh', form.current, 'zTf5CwtecdiU2I4ZT')
      .then((result) => {
        alert("Message Sent!")
      }, (error) => {
        alert(error.text)
      });
  };

  

  useEffect(() => {
    const handleResize = () => {
      setIsMd(window.innerWidth > 600);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call it once to set the initial value
    handleResize();

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const combinedStyles = classNames(styles.smoothScrolLink, ' w-full h-full ');
  return (
    <main className='bg-white px-10 md:px-20 lg:px-40'>
      <section className='min-h-screen' id='Home'>
        <nav className='mt-4  flex justify-center'>
          <div className='h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full  flex justify-center max-w-lg '>
            <button className='w-20 h-10 text-white center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out  px-3 ' ><a href='#Home' className={styles.smoothScrolLink}>Home</a></button>
            <button className='w-20 h-10 text-white center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out px-3'><a href='#Skills' className={styles.smoothScrolLink}>Skills</a></button>
            <button className='w-20 h-10 text-white center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out px-3'><a href='#Projects' className={styles.smoothScrolLink}>Projects</a></button>
            <button className='w-24 h-10 text-white center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out  '><a href='#Contact' className={combinedStyles}>Contact me</a></button>
            <button className='w-19 px-2  h-10 text-white center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
              <a href='https://liveconcordia-my.sharepoint.com/:w:/g/personal/i_hemmat_live_concordia_ca/EQfHI5bqzxJBs3F_CjoQqdgBrNxyyHmHW5LVrIJD9rtyzA?e=ghNE55' target="_blank">Resume</a>
            </button>
          </div>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Iliad Hemmatjoo</h2>
          <h3 className='text-2xl py-2 md:text-3xl'>Web Developer and Designer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>An enthusiast in web development field , and a computer scince student from Montreal</p>

        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href='https://linkedin.com/in/hemmatjoo-me' target="_blank"><AiFillLinkedin className='cursor-pointer'/></a>
          <a href='https://github.com/iliaddh' target="_blank"><FaGithub className='cursor-pointer'/> </a>
        </div>
        <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
          <img src={deved} layout='fill' objectFit='cover'/>
        </div>
      </section>
      <section>
        
        <div className=' gap-10' id='Skills'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <img src={design} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
              Creating elegant designs suited for your needs following your design theory.
            </p>
            <h4 className='py-4 text-teal-600'>Design tools I use:</h4>
            <div className='justify-center relative'>
                <div className='flex justify-center mt-5 rounded-md '><p className='max-w-sm text-gray-100 py-1 shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md '>Figma</p></div>
                <div className='flex justify-center mt-5 rounded-md '><p className='max-w-sm text-gray-100 py-1 shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md '>Sanity</p></div>
                <div className='flex justify-center mt-5 '><p className='max-w-sm text-gray-100 py-1 shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md '>Photoshop</p></div>
              </div>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <img src={code} width={100} height={100}/>
            <h3 className='text-lg font-medium pt-8 pb-2'>On demand web development languages</h3>
            <p className='py-2'>
              Crafting Solutions with the Hottest Web Development Languages
            </p>
            <h4 className='py-4 text-teal-600'>Languages and Frameworks I use:</h4>
            <div className='flex justify-center mt-5 '><p className='max-w-sm py-1 text-gray-100  shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md'>JavaScript</p></div>
            <div className='flex justify-center mt-5'><p className='max-w-sm text-gray-100 py-1 shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md'>React.js</p></div>
            <div className='flex justify-center mt-5 '><p className='max-w-sm text-gray-100 py-1 shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md'>Tailwind CSS</p></div>
            <div className='flex justify-center mt-5 '><p className='max-w-sm text-gray-100 py-1 shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md'>HTML</p></div>
            <div className='flex justify-center mt-5 '><p className='max-w-sm text-gray-100 py-1 shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md'>CSS</p></div>
            
            
          </div>
          <p className='text-5xl bold mt-4 ' id='Projects'>Projects</p>
            <div className='flex flex-col gap-40 py-10 md:flex-wrap lg:flex-wrap items-center '>
              <div className='justify-center max-w-2xl basis-1/3 flex-1 shadow-2xl p-8 rounded-lg '>
                <div className='p-2 w-24 h-10 rounded-lg bg-gradient-to-r from-cyan-300 to-teal-400  text-white text-center '>Description</div>
                <p className='p-4 text-lg mb-6 '>
                A web-based system for software license management. We identify two primary users:
                 Clients and Software providers. Clients are able to manage an account with relevant
                  information, associate licenses to their account, aquire new licenses, etc. Software 
                  providers are able to manage client accounts, generate serial numbers, associate serial
                   numbers with products and clients, etc.
                </p>
                <img src={web1} className='rounded-xl object-cover' />
                <div className='flex justify-center mt-20 rounded-md shadow-lg bg-opacity-50	 bg-cyan-500 shadow-cyan-300/50 '>
                  {
                    isMd ? (<p className='text-white mt-1.5 text-lg'>Tools used:</p>): console.log("not md")
                  }
                  <div className='w-3/5  flex justify-center p-2 rounded-md'>
                    <div className='mx-3 '><FaJs className='text-amber-300 size-7  '></FaJs></div>
                    <div className='mx-3 '><FaHtml5 className='text-orange-500	size-7 '></FaHtml5></div>
                    <div className='mx-3'><FaCss3 className='text-blue-500	size-7 '></FaCss3></div>
                  </div>
                </div>
              </div>
            <div className='justify-center max-w-2xl basis-1/3 flex-1 shadow-2xl p-8 rounded-lg '>
            <div className='p-2 w-24 h-10 rounded-lg bg-gradient-to-r from-cyan-300 to-teal-400  text-white text-center '>Description</div>
                <p className='p-4 text-lg mb-6 '>
                The HooBank website,
                 represents a conceptual financial platform designed
                  to assist users in exploring and selecting suitable payment methods.
                </p>
              <img src={web2} className='rounded-xl object-cover ' />
              <div className='flex justify-center mt-20 rounded-md shadow-lg bg-opacity-50	 bg-cyan-500 shadow-cyan-300/50 '>
              {
                isMd ? (<p className='text-white mt-1.5 text-lg'>Tools used:</p>): console.log("not md")
              }
                <div className='w-3/5  flex justify-center p-2 rounded-md'>
                  <div className='mx-3 '><FaJs className='text-amber-300 size-7  '></FaJs></div>
                  <div className='mx-3'><FaReact className='text-cyan-500	size-7 '></FaReact></div>
                  <div className='mx-3 '><FaHtml5 className='text-orange-500	size-7 '></FaHtml5></div>
                  <div className='mx-3'><FaCss3 className='text-blue-500	size-7 '></FaCss3></div>
                  <div className='mx-3 '><img src={tailwind} className='size-7 max-w-lg'></img></div>
                </div>
              </div>
            </div>
            <div className='justify-center max-w-2xl basis-1/3 flex-1 shadow-2xl p-8 rounded-lg '>
            <div className='p-2 w-24 h-10 rounded-lg bg-gradient-to-r from-cyan-300 to-teal-400  text-white text-center '>Description</div>
                <p className='p-4 text-lg mb-6 '>
                The Gericht Restaurant is a visually appealing and user-friendly website. Crafted without the need for a backend, the site employs a modern and 
                responsive design, ensuring seamless navigation across various devices. Users can explore
                 the restaurant's offerings, peruse the menu, and get a glimpse of the ambiance through vibrant images.
                </p>
              <div className='flex justify-center'><img src={web3} className='rounded-xl object-cover ' /></div>
              <div className='flex justify-center mt-20 rounded-md shadow-lg bg-opacity-50	 bg-cyan-500 shadow-cyan-300/50 '>
              {
                isMd ? (<p className='text-white mt-1.5 text-lg'>Tools used:</p>): console.log("not md")
              }
                <div className='w-3/5  flex justify-center p-2 rounded-md'>
                  <div className='mx-3 '><FaJs className='text-amber-300 size-7  '></FaJs></div>
                  <div className='mx-3'><FaReact className='text-cyan-500	size-7 '></FaReact></div>
                  <div className='mx-3 '><FaHtml5 className='text-orange-500	size-7 '></FaHtml5></div>
                  <div className='mx-3'><FaCss3 className='text-blue-500	size-7 '></FaCss3></div>
                  <div className='mx-3 '><img src={tailwind} className='size-7 max-w-lg'></img></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=' flex justify-center my-20  ' id='Contact'>
      <form className=' p-11  shadow-2xl rounded-2xl w-full lg:w-3/6 md:w-3/6' ref={form} onSubmit={sendEmail}>
          <h2 className='text-lg '>Send me a message</h2>
          <div className='mt-10 w-full relative'>
            <input type='text' name="user_name" className='w-full  py-2.5 px-0 text-md my-2.5 mx-0 focus:border-b border-b border-black' required="required" placeholder='What is your name?'></input>
          </div>
          <div className='mt-10 w-full relative'>
            <input type='text'name="user_email" className='w-full py-2.5 px-0 text-md my-2.5 mx-0 focus:border-none border-b border-black' required="required" placeholder='What is your Email?'></input>
          </div>
          <div className='mt-10 w-full relative'>
            <textarea name="message" className='w-full py-2.5 px-0 text-md my-2.5 mx-0 focus:border-b border-b border-black' placeholder='Your Message'></textarea>
          </div>
          <input type="submit" value="Send" className='w-20 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500  text-white hover:transform hover:scale-110 transition-transform duration-300 ease-in-out center cursor-pointer'/>
        </form>
      </div>

    </main>
  )
}

export default App
