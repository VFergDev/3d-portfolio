
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from "../../constants"
import CTA from '../../components/CTA';
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Viana</span>
      </h1>
      <div className="flex mt-5 flex-col gap-3 text-slate-500">
        <p>Web Application Developer based in California, specializing entrepreneurial start-ups and building community; both online and on-site.</p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="flex mt-16 flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="w-20 h-20 block-container" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front flex-col rounded-xl flex justify-center items-center">
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className="w-1/2 h-1/2 object-contain"
                />
                <p className="pt-2">{skill.name}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="flex mt-5 flex-col gap-3 text-slate-500">
          <p>I've worked with all sorts of companies, leveling up my  skills and teaming up with smart people. Here's the rundown.</p>
      </div>
      <div className="flex mt-12">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={<div className='flex justify-center items-center w-full h-full'>
                <img 
                  src={experience.icon} 
                  alt={experience.company_name}
                  className='w-[60%] h-[60%] object-contain'
                />
                    </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                borderBottom: '8px',
                borderStyle: 'solid',
                borderBottomColor: experience.iconBg,
                boxShadow: 'none',
              }}
            >
              <div className="">
              <h3 className="text-black text-xl font-poppins font-semibold" style={{margin:0}}>
                {experience.title}
              </h3>
              <p className="font-base text-black-500 font-medium">
                {experience.company_name}
              </p>
            </div>
            <ul className="my-5 list-disc ml-5 space-y-2">
              {experience.points.map((point, index) => (
                <li 
                  className='pl-1 text-black-500 font-normal text-sm'
                  key={`experience-point-${index}`}
                >
                  {point}
                </li>
              ))}
            </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About
