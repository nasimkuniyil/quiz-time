import React from 'react'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className='h-full flex flex-col justify-center gap-2'>
      <Button onClick={() => { }} className='mx-auto w-1/2 hover:bg-[var(--color-secondary)] text-[var(--color-primary)] hover:text-[var(--color-white)] duration-200'>History</Button>
      <Button onClick={() => { }} className='mx-auto w-1/2 hover:bg-[var(--color-secondary)] text-[var(--color-primary)] hover:text-[var(--color-white)] duration-200'>Sports</Button>
      <Button onClick={() => { }} className='mx-auto w-1/2 hover:bg-[var(--color-secondary)] text-[var(--color-primary)] hover:text-[var(--color-white)] duration-200'>Technology</Button>
      <Button onClick={() => { }} className='mx-auto w-1/2 hover:bg-[var(--color-secondary)] text-[var(--color-primary)] hover:text-[var(--color-white)] duration-200'>Sociel</Button>
    </div>
  )
}

export default Home