import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/utils'
import { useToast } from '../hooks/use-toast'
import emailjs from 'emailjs-com'
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from './config'

export default function Contact() {

    const {toast} = useToast();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      

      emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, e.target,PUBLIC_KEY).then((result)=> {
        setTimeout(()=> {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            });
            setIsSubmitting(false);
          }, 1500);
          setFormData({name: "", email: "", message: ""})
      })
      .catch(() => 
      setTimeout(()=> {
        toast({
            title: "Oops Something went wrong. Please try again.",
            
        });
        setIsSubmitting(false);
      }, 1500));
      

      
    }

  return (
    <section id='contact' className='py-24 px-4 bg-secondary/30'> 
    <div className='container mx-auto max-w-5xl'>

    <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Get In <span className='text-primary'> Touch</span></h2>
    
    <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
    I’m always open to new opportunities, collaborations, or simply connecting with like-minded individuals. Whether you have a project in mind, a question, or just want to say hello, feel free to reach out — I’ll get back to you as soon as possible.
    </p>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

            <div className='space-y-6 justify-center'>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10 mt-1'>
                        <Mail className='h6 w-6 text-primary'/>
                    </div>
                    <div>
                        <h4 className='font-medium'>Email</h4>
                        <a href="mailto:tariduthikshana4@gmail.com" className='text-muted-foreground hover:text-primary transition-colors border-b-1'>
                        tariduthikshana4@gmail.com
                        </a>
                    </div>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10 mt-1'>
                        <Phone className='h6 w-6 text-primary'/>
                    </div>
                    <div>
                        <h4 className='font-medium'>Phone</h4>
                        <a href="tel:+94767696411" className='text-muted-foreground hover:text-primary transition-colors border-b-1'>
                        +94 76 76 96 411
                        </a>
                    </div>
                </div>
                <div className='flex items-start space-x-4'>
                    <div className='p-3 rounded-full bg-primary/10 mt-1'>
                        <MapPin className='h6 w-6 text-primary'/>
                    </div>
                    <div>
                        <h4 className='font-medium'>Location</h4>
                        <a className='text-muted-foreground hover:text-primary transition-colors border-b-1'>
                        Colombo, Sri Lanka
                        </a>
                    </div>
                </div>
            </div>
            
            <div className='pt-8'>
                <h4 className='font-medium mb-4'>Connect With Me</h4>
                <div className='flex space-x-4 justify-center'>
                    <a target='_bank' href="https://www.linkedin.com/in/tharindu-theekshana-a4a53b285/"><Linkedin/></a>
                    <a target='_bank' href=""><Instagram/></a>  
                    <a target='_bank' href="https://x.com/TharinduTh82687"><Twitter/></a>     
                </div>
            </div>
        </div>

    <div className='bg-card p-8 rounded-lg shadow-xs'>
        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

        <form className='space-y-6' onSubmit={handleSubmit}>
            <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
            <input type="text" id='name' name='name' value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} required 
            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
            placeholder='Jonathan Andrew...'/>
            <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
            <input type="email" id='email' name='email' value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} required 
            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
            placeholder='jonathan@gmail.com...'/>
            <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
            <textarea  id='message' name='message' value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} required 
            className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
            placeholder="Hello, I'd like to talk about..."/>
            <button type='submit' disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2",
            )}> {isSubmitting ? "Sending..." : "Send Message"}<Send size={16}/></button>
        </form>
    </div>

    </div>
    </div>
    </section>
  )
}
