import React, { useState, useEffect, useRef } from 'react';
import { FaCopyright } from 'react-icons/fa';
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import BackToTopButton from './backToTop';
import Projects from "./Projects.jsx";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import styles from "./styles.module.css";
import classNames from 'classnames';
import styled from "styled-components"
import {DATA, designTools, languages, layoutData} from "./../src/Data/data.js";

const Paragraph = styled.p `
  
`

const Anchor = styled.a `
  
`

const Button = styled.button `
  
`



const tailwindStyle1 = "w-20 h-10 text-white center cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out  px-3";
const tailwindStyle2 = "max-w-sm text-gray-100 py-1 shadow-lg bg-opacity-50	w-3/5  bg-cyan-500 shadow-cyan-300/50 rounded-md";
const tailwindStyle3 = "w-full  py-2.5 px-0 text-md my-2.5 mx-0 focus:border-b border-b border-black";
const STYLES = [tailwindStyle1, tailwindStyle2, tailwindStyle3];



function App() {
  const form = useRef();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 100;
      setShowButton(isScrolledDown);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4zpu4fw', 'template_od6yzdh', form.current, 'zTf5CwtecdiU2I4ZT')
      .then((result) => {
        alert("Message Sent!")
      }, (error) => {
        alert(error.text)
      });
  };

  const combinedStyles = classNames(styles.smoothScrolLink, 'w-full h-full');

  return (
    <>
      <main  className='bg-white px-10 md:px-20 lg:px-40 relative'>
        <section className='' id='Home'>
          <nav className='mt-4  flex justify-center'>
            <div className='h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full  flex justify-center max-w-lg '>
              {
                layoutData.map(element => (
                  <>
                    <Button className={tailwindStyle1} key={element.id}>
                      <Anchor href={element.href} className={styles.smoothScrolLink}>{element.innerText}</Anchor>
                    </Button>
                  </>
                ))
              }
            </div>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Iliad Hemmatjoo</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Full-stack developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto'>An enthusiast in web development field, and a Computer Science student from Montreal</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://linkedin.com/in/hemmatjoo-me' target="_blank"><AiFillLinkedin className='cursor-pointer'/></a>
            <a href='https://github.com/iliaddh' target="_blank"><FaGithub className='cursor-pointer'/> </a>
          </div>
          {/* <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
            <img src={deved} layout='fill' objectFit='cover'/>
          </div> */}
        </section>
        <section className='mt-36'>
          <div className='gap-10' id='Skills'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10' data-aos="zoom-in">
              <img src={design} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following your design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use:</h4>
              <div className='justify-center relative' >
                {
                  designTools.map((tool) => (
                    <>
                      <div className='flex justify-center mt-5 rounded-md '>
                        <Paragraph className={STYLES[1]} key= {tool.id}>{tool.name}</Paragraph>
                      </div>
                    </>
                  ))
                }

              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10' data-aos="zoom-in">
              <img src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2'>On demand web development languages</h3>
              <p className='py-2'>
                Crafting Solutions with the Hottest Web Development Languages
              </p>
              <h4 className='py-4 text-teal-600'>Languages and Frameworks I use:</h4>
              {
                  languages.map((lang) => (
                    <>
                      <div className='flex justify-center mt-5'>
                        <Paragraph className={STYLES[1]} key= {lang.id}>{lang.name}</Paragraph>
                      </div>
                    </>
                  ))
                }
            </div>
            <p className='text-5xl bold mt-4 ' id='Projects'>Projects</p>
            <div className='flex flex-col gap-40 py-10 md:flex-wrap lg:flex-wrap items-center '>
              {DATA.map((card) => (
                <Projects card={card} key={card.id}></Projects>
              ))}
            </div>
          </div>
        </section>
        <div className=' flex justify-center my-20  ' id='Contact' data-aos="zoom-out">
          <form className=' p-11  shadow-2xl rounded-2xl w-full lg:w-3/6 md:w-3/6' ref={form} onSubmit={sendEmail}>
            <h2 className='text-lg '>Send me a message</h2>
            <div className='mt-10 w-full relative'>
              <input type='text' name="user_name" className={tailwindStyle3} required="required" placeholder='What is your name?'></input>
            </div>
            <div className='mt-10 w-full relative'>
              <input type='text' name="user_email" className={tailwindStyle3} required="required" placeholder='What is your Email?'></input>
            </div>
            <div className='mt-10 w-full relative'>
              <textarea name="message" className={tailwindStyle3} placeholder='Your Message'></textarea>
            </div>
            <div className='flex justify-center mt-2'>
              <input type="submit" value="Send" className='w-20 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500  text-white hover:transform hover:scale-110 transition-transform duration-300 ease-in-out center cursor-pointer'/>
            </div>
          </form>
        </div>
      </main>
      {showButton && <BackToTopButton />}
      <footer className='w-full flex justify-center'>
        <div className='flex text-center bg-gradient-to-r from-cyan-300 to-teal-300 w-full  p-3 '>
          <div className='  flex items-center justify-center'>
            <FaCopyright className='text-slate-500 text-sm'/>
          </div>
          <div>
            <p className='text-slate-500 px-2 text-sm'>2024 Iliad Portfolio. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App;
