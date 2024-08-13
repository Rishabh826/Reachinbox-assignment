import React from 'react'

const MailCard = ({email}) => {
  return (
    <div>
       <div className='flex justify-between'>
            <h3 className='text-white'>{email?.subject}</h3>
            <p className='text-gray-400 font-thin mr-4'>{email?.date}</p>
        </div>
        <p className='text-gray-400 font-thin'>from : {email?.from}</p>
        <p className='text-gray-400 font-thin mt-2'>to : {email?.to}</p>
        <p className='text-gray-100 font-thin mt-4'>{email?.message?.slice(0,17)}</p>
        <p className='text-gray-100 font-thin mt-4 w-2/3'>{email?.message?.slice(17)}</p>
    </div>
  )
}

export default MailCard