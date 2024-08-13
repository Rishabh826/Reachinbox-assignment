import React from 'react'


const LoginCard = ({handleSignIn}) => {
  return (
    <div className='bg-black h-screen flex justify-center items-center pb-20'>
        <div className='py-6 px-10 bg-neutral-900 border border-gray-500 rounded-2xl text-center flex gap-4 flex-col justify-center items-center'>
          <h3 className='text-lg text-white my-2'>
            Create a new account
          </h3>
          <button onClick={handleSignIn} className='text-gray-300 border py-3 px-28 rounded-md mb-6 flex items-center gap-2 font-extralight'>
            <img src="#" alt='google-logo' className='' />
            Sign Up with Google
          </button>
          <button className='text-white rounded bg-blue-700 py-3 px-8 mb-4'>
            Create an Account
          </button>
          <p className='text-gray-500 font-light mb-4'>Already have an account? <span className='text-gray-400 hover:underline cursor-pointer'>Sign In</span></p>
        </div>
    </div>
  )
}

export default LoginCard