import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Viana</span> 👋
        <br />
        A software Engineer from California. <p className='text-black font-semibold'>Use the arrow keys to go around the Island.</p> 
        </h1>
    ),
    2: (
        <InfoBox
            text="I've acquired many skills over a multi-facetted career. Over 10 years of experience in marketing, brand development, and program engineering."
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Multiple projects built to success over the years. Curious about the impact?"
            link="/projects"
            btnText="View My Portfolio"
        />
    ),
    4: (
        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away."
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
