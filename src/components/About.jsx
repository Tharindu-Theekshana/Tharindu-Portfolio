import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

export default function About() {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'> Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
          <h3 className='text-2xl font-semibold'>Passionate full-stack developer who loves building modern web and mobile apps.</h3>
          <p className='text-muted-foreground'>
          I'm a motivated and creative full-stack developer with a strong passion for technology and problem-solving. I enjoy turning ideas into practical and user-friendly digital solutions. With a focus on continuous learning and growth, I aim to write clean, efficient code and build applications that make a real impact. I value collaboration, attention to detail, and always strive to improve both technically and personally in every project I take on.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
            <a href="#contact" className='cosmic-button'>Get In Touch</a>
            <a href="" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>Download CV</a>
          </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 bg-primary/10 rounded-full'>
                  <Code className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Full-Stack Development</h4>
                  <p className='text-muted-foreground'>Creating full-stack applications with modern technologies </p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
                <div className='p-3 bg-primary/10 rounded-full'>
                  <User className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                  <p className='text-muted-foreground'>Crafting clean, intuitive interfaces that enhance usability and create seamless digital journeys</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
                <div className='p-3 bg-primary/10 rounded-full'>
                  <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>Project Management</h4>
                  <p className='text-muted-foreground'>Driving projects from planning to delivery with clear communication, collaboration, and agile workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    </section>
  )
}
