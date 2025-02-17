import React from 'react'

const Footer = () => {
  return (
    <footer className='relative w-full bg-gra-900 text-white text-center mt-4 p-8 font-inter text-sm'>
        <div>
        &copy; {new Date().getFullYear()} - todos os direitos reservados
        </div>
        <div>
          Dados obtidos de <a href="http://starwars-databank.vercel.app" target='_blank' rel='nopener noreferrer' className='text-blue-400 underline'>Star Wars Databank</a>
        </div>
    </footer>
  )
}

export default Footer