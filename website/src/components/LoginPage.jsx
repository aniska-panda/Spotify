import React from 'react'

const LoginPage = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-[550px] flex flex-col py-7 min-h-[700px] rounded-xl'>
      <div className='flex items-center mt-5 gap-1 min-h-[100px] place-self-center pt-2'>
        <h1 className='text-4xl font-semibold bg-purple-800 h-16 rounded-xl pt-3 pb-3 pl-3 pr-3'>WELCOME TO SOUNDSCAPE!</h1>
      </div>

      <div className='justify-start grid row-span-2 gap-10 px-4 py-4'>
         <input className='text-purple-950 w-[30rem] h-14 rounded-xl placeholder:text-slate-600 font-bold text-lg pl-3' type="text" placeholder="Name"/>
        <input className='text-purple-950 w-[30rem] h-14 rounded-xl placeholder:text-slate-600 font-bold text-lg pl-3' type="email" placeholder="Email"/>
        <input className='text-purple-950 w-[30rem] h-14 rounded-xl placeholder:text-slate-600 font-bold text-lg pl-3' type="password" placeholder="Password"/>
      </div>

      <div className='h-10 grid-rows-2 py-5 px-5 gap-1 items-center flex justify-center p-2'>
           <button className='bg-purple-800 rounded-3xl py-3 w-40 mt-11 gap-2 px-[8rem] p-2 m-1 justify-between'>
            <p className='flex items-center justify-center font-bold'>Login</p>
           </button>

           <button className='bg-purple-800 rounded-3xl py-3 w-40 mt-11 gap-2 px-[80rem] p-5 m-1 justify-between'>
            <P className='flex items-center font-bold'>Signup</P>
           </button>
      </div>
    </div>
  )
}

export default LoginPage
