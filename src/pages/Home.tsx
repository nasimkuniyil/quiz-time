import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (path:string)=>{
    navigate(path);
  }
  return (
    <div className='h-full flex flex-col justify-center gap-2'>
      <Button onClick={() => {handleNavigate("/quiz/History")}} className='mx-auto w-1/2 hover:bg-[var(--color-secondary)] text-[var(--color-primary)] hover:text-[var(--color-white)] duration-200'>History</Button>
      <Button onClick={() => {handleNavigate("/quiz/Sports")}} className='mx-auto w-1/2 hover:bg-[var(--color-secondary)] text-[var(--color-primary)] hover:text-[var(--color-white)] duration-200'>Sports</Button>
      <Button onClick={() => {handleNavigate("/quiz/Technology")}} className='mx-auto w-1/2 hover:bg-[var(--color-secondary)] text-[var(--color-primary)] hover:text-[var(--color-white)] duration-200'>Technology</Button>
      <Button onClick={() => {handleNavigate("/quiz/Social")}} className='mx-auto w-1/2 hover:bg-[var(--color-secondary)] text-[var(--color-primary)] hover:text-[var(--color-white)] duration-200'>Social</Button>
    </div>
  )
}

export default Home