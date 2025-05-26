import { ArrowUp } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap items-center justify-center flex-col'>
        <p className='text-sm text-muted-foreground'>
           &copy; {new Date().getFullYear()} TharinduTheekshana.co. All right reserved. 
        </p>
        
    </footer>
  )
}
